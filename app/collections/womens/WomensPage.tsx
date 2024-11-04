'use client'
import HeroProducts from '@/components/HeroProducts';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import OurApproach from '@/components/OurApproach';
import Link from 'next/link';
import MobileFilter from '@/components/MobileFilter';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

interface Shoe {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    sizes: number[];
    bestFor: string;
    material: string;
    hue: string;
}

interface WomensPageProps {
    shoes: Shoe[];
}

export default function WomensPage({ shoes }: WomensPageProps) {

    const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
    const [selectedBestFor, setSelectedBestFor] = useState<string[]>([]);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
    const [selectedHue, setSelectedHue] = useState<string[]>([]);

    const filteredShoes = shoes.filter(shoe => {
        const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => shoe.sizes.includes(size));
        const bestForMatch = selectedBestFor.length === 0 || selectedBestFor.includes(shoe.bestFor);
        const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(shoe.material);
        const hueMatch = selectedHue.length === 0 || selectedHue.includes(shoe.hue);

        return sizeMatch && bestForMatch && materialMatch && hueMatch;
    });

    return (
        <div className='mt-10'>
            <div className='flex'>
                <Sidebar
                    gender="Women"
                    selectedSizes={selectedSizes}
                    setSelectedSizes={setSelectedSizes}
                    selectedBestFor={selectedBestFor}
                    setSelectedBestFor={setSelectedBestFor}
                    selectedMaterials={selectedMaterials}
                    setSelectedMaterials={setSelectedMaterials}
                    selectedHue={selectedHue}
                    setSelectedHue={setSelectedHue}
                />
                <main className='flex-1 p-2'>
                    <div className='lg:hidden'>
                        <h2 className='text-xl font-bold pb-6 pl-3'>Women&apos;s Shoes</h2>
                    </div>
                    <div className="flex justify-around lg:justify-end pr-6">
                        <div className="inline-flex border p-1 border-gray-300 rounded-full overflow-hidden">
                            <a href="/collections/womens" className="text-decoration-none">
                                <div className="inline-block px-4 py-1 bg-black rounded-full text-white text-sm font-semibold cursor-pointer">
                                    Women
                                </div>
                            </a>
                            <a href="/collections/mens" className="text-decoration-none">
                                <div className="inline-block px-4 py-1 bg-white rounded-full text-black text-sm font-semibold cursor-pointer">
                                    Men
                                </div>
                            </a>
                        </div>
                        <MobileFilter
                            selectedSizes={selectedSizes}
                            setSelectedSizes={setSelectedSizes}
                            selectedBestFor={selectedBestFor}
                            setSelectedBestFor={setSelectedBestFor}
                            selectedMaterials={selectedMaterials}
                            setSelectedMaterials={setSelectedMaterials}
                            selectedHue={selectedHue}
                            setSelectedHue={setSelectedHue}
                        />
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredShoes.length > 0 ? (
                            filteredShoes.map(shoe => (
                                <Link key={shoe.id} href={`/view-product/womens/${shoe.id}`}>
                                    <div>
                                        <img src={shoe.imageUrl} alt={shoe.name} className="w-full" />
                                        <h3 className="font-bold">{shoe.name}</h3>
                                        <p>${shoe.price}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-2 lg:col-span-3 p-10">
                                <p className="text-gray-500">No products available matching your filters.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <HeroProducts />
            <div className="flex flex-col md:flex-row bg-gray-100">
                <div className="w-full md:w-1/4">
                    <h1 className='text-2xl md:text-4xl font-bold p-4 md:p-7 pt-10 md:pt-28'>Explore More Women&apos;s Shoes</h1>
                </div>
                <div className="w-full md:w-3/4 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/yUlh0nysxCxmrv3SzK6PZ/4" alt="Shoe 1" />
                            <h2 className='text-sm p-4 font-bold'>Everyday Sneakers</h2>
                        </div>
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/6eYhnQlZ944sUTllcUVHD3/2" alt="Shoe 2" />
                            <h2 className='text-sm p-4 font-bold'>Active Shoes</h2>
                        </div>
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/2kEfCf93lGt9q957ky14rc/2" alt="Shoe 3" />
                            <h2 className='text-sm p-4 font-bold'>Water-Repellent Shoes</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/37RhAHzyDMH4udsfQhL8uu/1" alt="Shoe 4" />
                            <h2 className='text-sm p-4 font-bold'>Slip-Ons</h2>
                        </div>
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/4n5RIXmMc5H0axffEeZhhq/1" alt="Shoe 5" />
                            <h2 className='text-sm p-4 font-bold'>Hiking Shoes</h2>
                        </div>
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/5Jw8dhEIPYOX2rHLSYPUdQ/1" alt="Shoe 6" />
                            <h2 className='text-sm p-4 font-bold'>Sale Shoes</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-8 lg:p-16">
                <h1 className="text-3xl font-bold mb-6">Women&apos;s Shoes</h1>
                <p className="mb-6">
                    Explore the sustainable fusion of style and all-day comfort with our women’s shoes collection. Whether you need some new flats for the office or a brisk pair of active shoes to log some miles in, we’ve got your perfect pair—but it’s up to you to pick them out.
                </p>
                <Accordion type="single" collapsible className="w-full p-2 lg:p-10">
                    <AccordionItem value="item-1" className='py-6'>
                        <AccordionTrigger className="py-2 text-lg font-semibold">DO ALLBIRDS RUN TRUE TO SIZE?</AccordionTrigger>
                        <AccordionContent className="px-4 py-2">Yes, Allbirds shoes generally run true to size. For those who prefer a snugger fit or plan to wear the shoes without socks, we typically recommend sticking to your usual size. If you prefer a roomier fit or plan to wear thicker socks, consider sizing up for comfort. If you’d like more guidance, refer to the size guides found on every product’s page.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='py-6'>
                        <AccordionTrigger className="py-2 text-lg font-semibold">ARE ALLBIRDS CONSIDERED ALL-DAY SHOES?</AccordionTrigger>
                        <AccordionContent className="px-4 py-2">
                            Absolutely! Allbirds are designed to support your feet through long hours of wear, making them perfect for your daily routines. Features like supportive midsoles, lightweight construction, ample breathability, and soft materials ensure that you can stay on your feet longer without discomfort—ideal for all-day wear. Learn more about our favorite Allbirds for standing all day.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='py-6'>
                        <AccordionTrigger className="py-2 text-lg font-semibold">CAN ALLBIRDS BE WORN BAREFOOT?</AccordionTrigger>
                        <AccordionContent className="px-4 py-2">
                            Although our shoes are incredibly soft and plush enough for sockless wear, they are not specifically designed for continuous use without socks. <br />
                            That said, for days when you really want to go sockless, our breathable ZQ Merino wool or eucalyptus tree fiber, paired with the odor-minimizing insoles made from castor bean oil, will keep your feet comfortable and fresh. Need some comfy socks to match with your Allbirds? Take a look at our Anytime sock collection to find the perfect pair that matches your style and color preferences.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='py-6'>
                        <AccordionTrigger className="py-2 text-lg font-semibold">ARE ALLBIRDS GOOD FOR WALKING ALL DAY?</AccordionTrigger>
                        <AccordionContent className="px-4 py-2">
                            Yes! Allbirds shoes are crafted to provide unrivaled comfort throughout the day. Our daily wear favorites, including the Wool Mizzles, Tree Dashers, and Wool Pipers, utilize sustainable and ethically-sourced materials like our soft ZQ Merino wool, springy SweetFoam® sugarcane midsoles, and plush, odor-minimizing castor bean oil insoles. <br />
                            Together, these elements result in a shoe that is lightweight, breathable, flexible, and extraordinarily comfortable. <br />
                            Strut in your Allbirds with a spring in your step, whether you&apos;re heading to work, running errands, traveling, or anything else on your agenda.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <OurApproach />
        </div>
    )
}

