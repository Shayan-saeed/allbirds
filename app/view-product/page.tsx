"use client";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useSearchParams } from 'next/navigation';
import { Badge } from "@/components/ui/badge"
import { Separator } from '@/components/ui/separator';
import { toast } from "sonner"
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import OurApproach from '@/components/OurApproach';

interface ProductProps {
    imageUrl: string;
    name: string;
    price: number;
}

export default function page() {
    const searchParams = useSearchParams();
    const dispatch = useDispatch();

    const imageUrl = searchParams.get('imageUrl') as string;
    const name = searchParams.get('name') as string;
    const price = parseFloat(searchParams.get('price') || '0');

    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const product: ProductProps = { imageUrl, name, price };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, id: new Date().toISOString(), quantity: 1 }));
    };

    return (
        <div>
            <div className="flex p-8 rounded-lg mt-5">
                <div className="flex-1 pr-4">
                    <Image
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
                <div className="flex-1 pl-4">
                    <h1 className="text-5xl font-bold mb-2">{product.name}</h1>
                    <div className="text-xl font-sans mb-4">
                        <span>${product.price.toFixed(2)}</span>
                        {product.price > 74 && (
                            <span className="ml-2">
                                <Badge variant="outline">Free Shipping</Badge>
                            </span>
                        )}
                    </div>
                    <p className="text-xl font-sans mb-4">★★★★☆ <span className='text-sm'>(374)</span></p>
                    <h2 className="text-lg font-semibold mt-4 mb-2">Select Size:</h2>
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
                    <h2 className='text-sm font-bold underline mb-4 cursor-pointer'>See Size Chart</h2>
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
                        <Image src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2020/cms/6o5KOeXtFcjeNml7kfLXCT/b2e133c3a37f8bd1dd4b87f9cf8a96ff/24Q4_OctoberPromo_Site_ParentCollection_Banner_Desktop_2020x312.png" alt="sale-banner" className="w-full" style={{ filter: "brightness(0.7)" }} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
                            <h1 className="text-lg font-bold">Our Fall Sale Is Officially On</h1>
                            <p className="mt-2 text-sm">Shop our Fall Sale with deals on shoes primed for crisp days and cool nights..</p>
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
                                <Image
                                    src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_650,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1TEbr4dheBGAOwu4I4Dh1h/1"
                                    alt="Product 1"
                                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                                />
                                <p className="mt-2 text-center">Tree Gliders</p>
                            </div>
                            <div className="w-full h-75 overflow-hidden relative shadow-lg">
                                <Image
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
            <div className="flex flex-col md:flex-row w-full mt-12 p-6">
                <div className="flex-1 p-4">
                    <Image src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/cms/7kEum339XP7zP4lS4S52sX/3b1fddeda84bc873d2094a00b1f9e09f/WRGO_-_M1.jpg" alt="Image 1" className="w-full h-auto" />
                    <h2 className="text-2xl font-bold mt-4">Refined Design</h2>
                    <p className="mt-2 text-lg">All of the things you love about the original Wool Runner but revamped to offer more room in the toes and added structure for an effortless fit and streamlined look</p>
                </div>
                <div className="flex-1 p-4">
                    <Image src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/cms/SQYVoMQhMd3M3LN4JVQvn/af63bc6da8b87bc08876ea54f42a4601/WRGO-M2.jpg" alt="Image 2" className="w-full h-auto" />
                    <h2 className="text-2xl font-bold mt-4">Springy Support</h2>
                    <p className="mt-2 text-lg">Made with even more foam cushioning to deliver a plusher and bouncier feel that upgrades your ride—all day, everyday</p>
                </div>
                <div className="flex-1 p-4">
                    <Image src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/cms/q23Gt675SRvgAvErxY1GB/fcb6165433848ff3c8eb541334181c04/WR2-M3.jpg" alt="Image 3" className="w-full h-auto" />
                    <h2 className="text-2xl font-bold mt-4">100% Machine Washable</h2>
                    <p className="mt-2 text-lg">Our shoes are fully washable, making every step as clean as the first</p>
                </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-md text-center">
                <h2 className="text-4xl font-bold mb-4">{product.name} Reviews</h2>
                <div className="flex justify-center items-center gap-3 mb-6">
                    <div className="text-7xl font-semibold mb-2">4.2</div>
                    <div className="flex">
                        <span className="text-black text-5xl">&#9733;</span>
                        <span className="text-black text-5xl">&#9733;</span>
                        <span className="text-black text-5xl">&#9733;</span>
                        <span className="text-black text-5xl">&#9733;</span>
                        <span className="text-gray-400 text-5xl">&#9733;</span>
                    </div>
                </div>
            </div>
            <OurApproach />
        </div>
    )
}
