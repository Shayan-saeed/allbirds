import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store/store';
import { removeFromCart } from '../app/store/cartSlice';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from './ui/separator';
import Link from 'next/link';



interface CartState {
    open: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export default function Cart({ open, onOpenChange }: CartState) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveItem = (itemId: string) => {
        dispatch(removeFromCart(itemId));
    };

    return (
        <div>
            <Sheet open={open} onOpenChange={onOpenChange}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Shopping Cart</SheetTitle>
                    </SheetHeader>
                    <div className='mt-5'>
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul>
                                {cartItems.map(item => (
                                    <li key={item.id} className="flex items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-4">
                                            <img src={item.imageUrl} alt={item.name} width={80} height={80} />
                                            <div>
                                                <h3 className="font-bold">{item.name}</h3>
                                                <p>Price: ${item.price.toFixed(2)}</p>
                                                <p>Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <Separator />
                    {cartItems.length > 0 && (
                        <div className="mt-6">
                            <div className="flex justify-between mb-4">
                                <h2 className="text-lg font-semibold">Subtotal</h2>
                                <p className="text-lg font-semibold font-sans">${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <h2 className="text-lg font-semibold">Shipping</h2>
                                <p className="text-lg font-semibold font-sans">FREE</p>
                            </div>
                            <SheetFooter className='pt-5'>
                                <SheetClose asChild>
                                    <Link
                                        href="/checkout"
                                        className="w-full text-center text-sm rounded-sm px-6 py-3 transition-colors duration-300 font-bold bg-black text-white hover:bg-white hover:text-black border-2 border-black"
                                    >
                                        PROCEED TO CHECKOUT
                                    </Link>
                                </SheetClose>
                            </SheetFooter>
                        </div>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
}
