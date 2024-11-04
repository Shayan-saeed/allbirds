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

interface MensPageProps {
    shoes: Shoe[];
}

export default function MensPage({ shoes }: MensPageProps) {

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
                    gender="Men"
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
                        <h2 className='text-xl font-bold pb-6 pl-3'>Men&apos;s Shoes</h2>
                    </div>
                    <div className="flex justify-around lg:justify-end pr-6">
                        <div className="inline-flex border p-1 border-gray-300 rounded-full overflow-hidden">
                            <a href="/collections/womens" className="text-decoration-none">
                                <div className="inline-block px-4 py-1 bg-white rounded-full text-black text-sm font-semibold cursor-pointer">
                                    Women
                                </div>
                            </a>
                            <a href="/collections/mens" className="text-decoration-none">
                                <div className="inline-block px-4 py-1 bg-black rounded-full text-white text-sm font-semibold cursor-pointer">
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
                                <Link key={shoe.id} href={`/view-product/mens/${shoe.id}`}>
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
                    <h1 className='text-2xl md:text-4xl font-bold p-4 md:p-7 pt-10 md:pt-28'>Explore More Men&apos;s Shoes</h1>
                </div>
                <div className="w-full md:w-3/4 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/4VgbiZp42NWWF7swBOBnoS/1" alt="Shoe 1" />
                            <h2 className='text-sm p-4 font-bold'>Everyday Sneakers</h2>
                        </div>
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/6uFLbJ71n1lLaaQhPFEZ6D/4" alt="Shoe 2" />
                            <h2 className='text-sm p-4 font-bold'>Active Shoes</h2>
                        </div>
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/2kEfCf93lGt9q957ky14rc/2" alt="Shoe 3" />
                            <h2 className='text-sm p-4 font-bold'>Water-Repellent Shoes</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/39zrLFPePhQXwoap88lAnc/1" alt="Shoe 4" />
                            <h2 className='text-sm p-4 font-bold'>Slip-Ons</h2>
                        </div>
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/7zQGhDDbBE8CiAkk9jucxb/2" alt="Shoe 5" />
                            <h2 className='text-sm p-4 font-bold'>Hiking Shoes</h2>
                        </div>
                        <div className="card bg-white rounded-none">
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/4XkWseoM4kmcHIhBhLp1Hn/1" alt="Shoe 6" />
                            <h2 className='text-sm p-4 font-bold'>Sale Shoes</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-8 lg:p-16">
                <h1 className="text-3xl font-bold mb-6">Men&apos;s Shoes</h1>
                <p className="mb-6">
                    Find your perfect blend of style and comfort with our collection of men’s shoes for any occasion. From business casual days to meeting up with friends after work to taking on your favorite trail, our men’s shoes provide the ultimate in sustainable support for every step of your day—and look incredible while doing so.
                </p>
                <Accordion type="single" collapsible className="w-full p-2 lg:p-10">
                    <AccordionItem value="item-1" className='py-6'>
                        <AccordionTrigger className="py-2 text-lg font-semibold">DO ALLBIRDS RUN TRUE TO SIZE?</AccordionTrigger>
                        <AccordionContent className="px-4 py-2">Yes, Allbirds shoes run true to size. If you’re looking at any of our shoes that come only in whole sizes and you’re in between, just know that Allbirds whole sizes fit true to size for most customers. If you have wide feet or are between sizes, we suggest you size up for all whole-size styles.<br />
                            For those shoes that do come in half sizes, like our Tree Gliders and Tree Dasher 2s, you can order your normal size, unless you plan on wearing thick socks for hiking or trail running.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='py-6'>
                        <AccordionTrigger className="py-2 text-lg font-semibold">ARE ALLBIRDS SHOES WIDE OR NARROW?</AccordionTrigger>
                        <AccordionContent className="px-4 py-2">
                            Allbirds shoes are designed to accommodate a range of foot shapes. While they aren&apos;t specifically categorized as wide or narrow, the flexible materials used in Allbirds shoes, like our ZQ Merino wool and eucalyptus tree fiber, allow them to adapt to both wider and narrower feet, offering a comfortable fit for most wearers. <br /> <br />
                            You’ll notice that Allbirds shoes come in whole and half sizes to ensure a perfect fit. If you’re not sure of your size or you’re in between sizes, refer to the customer reviews and the size guides found on any given shoe’s product pages.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='py-6'>
                        <AccordionTrigger className="py-2 text-lg font-semibold">ARE ALLBIRDS MEANT TO BE WORN WITHOUT SOCKS?</AccordionTrigger>
                        <AccordionContent className="px-4 py-2">
                            While it’s true that our shoes are certainly soft and plush enough to go sockless, they’re not purposely designed to wear without socks all the time. <br />
                            Still, for those days when you’re going , materials like our soft, moisture-wicking ZQ Merino wool and plush, odor-minimizing castor bean oil insoles will provide your feet with the breathability and comfort they need. However, for those days when you really need a comfy pair of socks, check out our Trino™ sock collection to find some in your style and colors of choice.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='py-6'>
                        <AccordionTrigger className="py-2 text-lg font-semibold">ARE ALLBIRDS WASHABLE?</AccordionTrigger>
                        <AccordionContent className="px-4 py-2">
                            Absolutely! Here’s how it&apos;s done: Begin by taking out the insoles and laces, then use a towel or soft brush to sweep off any loose dirt. Place the shoes in the washing machine on the wool/delicates cycle (use cold water). We highly recommend putting the shoes in a linen bag or a pillowcase for extra protection. Always use a mild detergent and steer clear of bleach entirely. Then air dry for at least a day; do not tumble dry. (Learn more about caring for your Allbirds here.)
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <OurApproach />
        </div>
    );
}

