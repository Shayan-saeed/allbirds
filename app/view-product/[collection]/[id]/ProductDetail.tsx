"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';
import { Separator } from '@/components/ui/separator';
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SizeChart from '@/components/SizeChart';

interface ProductProps {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
}

export default function ProductDetails({ product }: { product: ProductProps }) {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handleAddToCart = () => {
        if (selectedSize) {
            dispatch(addToCart({ ...product, id: product.id, quantity: 1, size: selectedSize }));
        }
    };

    return (
        <div className="flex flex-col lg:flex-row p-8 rounded-lg mt-5">
            <div className="flex-1 pr-4">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-auto rounded-lg"
                />
                <div className='bg-gray-100 text-center p-6'>
                    <h1 className='text-lg font-bold mb-4'>{product.name} Highlights</h1>
                    <Separator />
                    <p className='text-sm pb-4 pt-4'>Enhanced comfort thanks to 14% more foam under your foot and a roomier toe-box</p>
                    <Separator />
                    <p className='text-sm pb-4 pt-4'>Improved durability with an upper that provides reinforcements to help prevent toe poke-through</p>
                    <Separator />
                    <p className='text-sm pb-4 pt-4'>Modern aesthetic delivered by a sleek upper and completely reimagined fit</p>
                </div>
            </div>
            <div className="flex-1 pl-4 mt-8 lg:mt-0">
                <h1 className="text-3xl lg:text-5xl font-bold mb-2">{product.name}</h1>
                <div className="text-lg lg:text-xl font-sans mb-4">
                    <span>${product.price.toFixed(2)}</span>
                    {product.price > 74 && (
                        <span className="ml-2">
                            <Badge variant="outline">Free Shipping</Badge>
                        </span>
                    )}
                </div>
                <p className="text-lg lg:text-xl font-sans mb-4">★★★★☆ <span className='text-sm'>(374)</span></p>
                <h2 className="text-md lg:text-lg font-semibold mt-4 mb-2">Select Size:</h2>
                <div className='flex flex-wrap gap-3 font-sans mb-4'>
                    {['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14'].map(size => (
                        <div
                            key={size}
                            className={`flex items-center justify-center border border-gray-300 rounded-sm text-center cursor-pointer transition duration-200 ${selectedSize === size ? 'bg-black text-white' : 'hover:bg-gray-200'}`}
                            style={{ width: '70px', height: '70px' }}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </div>
                    ))}
                </div>
                <SizeChart />
                <button
                    onClick={() => {
                        toast("Item has been added to Cart", {
                            description: new Date().toISOString(),
                        }),
                            handleAddToCart()
                    }
                    }
                    className={`w-full rounded-sm px-6 py-3 transition-colors duration-300 font-bold ${selectedSize ? 'bg-black text-white hover:bg-white hover:text-black border-2 border-black' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                    disabled={!selectedSize}
                >
                    {selectedSize ? `Add to Cart - $${product.price}` : 'Select a size'}
                </button>
                <div className="relative mt-5">
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2020/cms/6o5KOeXtFcjeNml7kfLXCT/b2e133c3a37f8bd1dd4b87f9cf8a96ff/24Q4_OctoberPromo_Site_ParentCollection_Banner_Desktop_2020x312.png" alt="sale-banner" className="w-full" style={{ filter: "brightness(0.7)" }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
                        <h1 className="text-sm md:text-lg font-bold">Our Fall Sale Is Officially On</h1>
                        <p className="mt-2 text-sm hidden md:block">Shop our Fall Sale with deals on shoes primed for crisp days and cool nights..</p>
                    </div>
                </div>
                <div className='text-center text-xs mt-5 pb-3'>
                    <p>Free shipping on orders over $75. Free returns.*</p>
                </div>
                <Separator />
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className='py-6'>
                            <AccordionTrigger className="py-2 text-sm font-semibold">FIND IN STORE</AccordionTrigger>
                            <AccordionContent className="px-4 py-2 text-sm">See if this item is available at a store location near you to pick up. <br />
                                <span className='underline font-bold'>Find A Store</span>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Also Consider</h2>
                    <div className="flex space-x-4">
                        <div className="w-full h-75 overflow-hidden relative shadow-lg">
                            <img
                                src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_650,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1TEbr4dheBGAOwu4I4Dh1h/1"
                                alt="Product 1"
                                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                            <p className="mt-2 text-center">Tree Gliders</p>
                        </div>
                        <div className="w-full h-75 overflow-hidden relative shadow-lg">
                            <img
                                src="//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_650,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1MnqSzTfrSBOEXwKcw6fME/1"
                                alt="Product 2"
                                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                            <p className="mt-2 text-center">Wool Runner Mizzles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
