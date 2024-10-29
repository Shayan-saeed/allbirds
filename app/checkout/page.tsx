'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { collection, doc, setDoc } from "firebase/firestore";
import db from '../firebaseConfig';
import { clearCart } from '../store/cartSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function CheckoutPage() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            toast.error('Your cart is empty!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }

        const orderId = doc(collection(db, "orders")).id;
        const orderData = {
            name,
            email,
            address,
            phoneNumber,
            subtotal,
            products: cartItems.reduce((acc: Record<string, { quantity: number, size: string | null}>, item) => {
                const key = `${item.name}- size${item.size}`;
                acc[key] = {
                    quantity: item.quantity,
                    size: item.size
                };
                return acc;
            }, {})
        };


        await setDoc(doc(db, "orders", orderId), orderData);

        dispatch(clearCart());

        router.push('/');

        alert("Order Placed Successfully")
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-xl font-bold mb-4">Checkout Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input type="text" required className="w-full p-2 border" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input type="email" required className="w-full p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Address</label>
                        <input type="text" required className="w-full p-2 border" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Phone number</label>
                        <input type="tel" required className="w-full p-2 border" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <button type="submit" className="w-full font-bold bg-black text-white hover:text-black hover:bg-white hover:border-2 hover:border-black transition p-2 mt-4">
                        Place Order
                    </button>
                </form>
            </div>

            <div className="w-full md:w-1/2 p-4 border-t md:border-t-0 md:border-l bg-gray-50">
                <h2 className="text-xl font-bold mb-4">Your Cart</h2>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="font-bold">{item.name}</h3>
                                <p>Price: ${item.price.toFixed(2)}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Size: {item.size}</p>
                            </div>
                            <img src={item.imageUrl} alt={item.name} width={150} height={150} />
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-semibold">Subtotal</h2>
                    <p className="text-lg font-semibold font-sans">${subtotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}
