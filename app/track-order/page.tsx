'use client'
import React, { useState } from 'react';
import { collection, getDocs, query, where, DocumentData } from 'firebase/firestore';
import db from '../firebaseConfig';
import { getAuth } from 'firebase/auth';

interface ProductDetails {
    quantity: number;
    size: string | null;
}

interface OrderData {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
    subtotal: number;
    products: Record<string, ProductDetails>;
}

const TrackOrderPage = () => {
    const [trackingId, setTrackingId] = useState('');
    const [orderData, setOrderData] = useState<OrderData | null>(null);
    const [error, setError] = useState('');

    const fetchOrder = async () => {
        setError('');
        setOrderData(null);
        try {
            let orderQuery = query(collection(db, 'orders'), where('trackingId', '==', trackingId));
            let querySnapshot = await getDocs(orderQuery);

            if (querySnapshot.empty) {
                const auth = getAuth();
                const user = auth.currentUser;

                if (user) {
                    const userOrdersCollection = collection(db, 'orders', user.uid, 'userOrders');
                    orderQuery = query(userOrdersCollection, where('trackingId', '==', trackingId));
                    querySnapshot = await getDocs(orderQuery);
                }
            }

            if (!querySnapshot.empty) {
                const order = querySnapshot.docs[0].data() as OrderData;
                setOrderData(order);
            } else {
                setError('Order not found. Please check the tracking ID.');
            }
        } catch (error) {
            setError('An error occurred while fetching the order.');
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-10 bg-[#f2ece9]">
            <h1 className="text-3xl font-bold mb-2 text-center">Order Tracking</h1>
            <p className="text-lg mb-4 text-center">Enter your tracking ID to track your order</p>
            <div className="flex items-center justify-center mb-6">
                <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Tracking ID"
                    className="border border-gray-300 bg-white text-black p-2 w-full max-w-xs outline-none"
                />
                <button
                    onClick={fetchOrder}
                    className="bg-black border border-black text-white font-bold px-4 py-2 transition-colors delay-75 ease-in-out hover:bg-white hover:text-black whitespace-nowrap"
                >
                    Track Order
                </button>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            {orderData && (
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-gray-800">
                    <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                    <p><span className="font-semibold">Name:</span> {orderData.name}</p>
                    <p><span className="font-semibold">Email:</span> {orderData.email}</p>
                    <p><span className="font-semibold">Phone Number:</span> {orderData.phoneNumber}</p>
                    <p><span className="font-semibold">Address:</span> {orderData.address}</p>
                    <div className="my-4">
                        <h3 className="font-semibold">Products:</h3>
                        <ul className="list-disc list-inside">
                            {Object.entries(orderData.products).map(([productName, details]) => (
                                <li key={productName} className="flex justify-between py-2 border-b">
                                    <span>{productName}</span>
                                    <span>{details.quantity} x {details.size ? `Size: ${details.size}` : 'N/A'}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-lg font-semibold">Subtotal: ${orderData.subtotal.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default TrackOrderPage;

