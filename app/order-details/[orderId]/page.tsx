'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from "firebase/firestore";
import db from '../../firebaseConfig';
import { useParams } from 'next/navigation';
import { getAuth } from 'firebase/auth';

interface Order {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
    subtotal: number;
    trackingId: string;
    products: {
        [key: string]: {
            quantity: number;
            size: string | null;
        };
    };
}

export default function OrderDetailsPage() {
    const router = useRouter();
    const { orderId } = useParams();
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;
                if (user) {
                    const orderDoc = await getDoc(doc(db, "orders", user.uid, "userOrders", orderId as string));
                    if (orderDoc.exists()) {
                        setOrder(orderDoc.data() as Order);
                    } else {
                        console.error("No order found with this ID.");
                    }
                } else {
                    const orderDoc = await getDoc(doc(db, "orders", orderId as string));
                    if (orderDoc.exists()) {
                        setOrder(orderDoc.data() as Order);
                    } else {
                        console.error("No order found with this ID.");
                    }
                }
            } catch (error) {
                console.error("Error fetching order details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (orderId) {
            fetchOrderDetails();
        }
    }, [orderId]);

    if (loading) {
        return <div>Loading order details...</div>;
    }

    if (!order) {
        return <div>Order not found.</div>;
    }

    const { name, email, address, phoneNumber, subtotal, trackingId, products } = order;

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Order Confirmation</h1>
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Thank you for your order, {name}!</h2>
                <p>Your order has been successfully placed.</p>
                <p className="font-bold my-4">Tracking ID: <span className="text-blue-600">{trackingId}</span></p>
                <p>Please keep this Tracking ID safe to track your order. To check the status, go to the <strong>Track Order</strong> page and enter your Tracking ID.</p>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Order Details</h3>
                    <ul className="mt-2">
                        <li><strong>Name:</strong> {name}</li>
                        <li><strong>Email:</strong> {email}</li>
                        <li><strong>Address:</strong> {address}</li>
                        <li><strong>Phone Number:</strong> {phoneNumber}</li>
                        <li><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Products</h3>
                    <ul className="mt-2">
                        {Object.keys(products).map((productKey) => (
                            <li key={productKey}>
                                {productKey}: Quantity - {products[productKey].quantity}, Size - {products[productKey].size}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button
                onClick={() => router.push('/')}
                className="mt-8 font-bold text-xs bg-black text-white hover:text-black hover:bg-white border-2 border-black transition p-2 px-6"
            >
                Go to Home
            </button>
        </div>
    );
}
