'use client'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebaseConfig';
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import HeroProducts from '@/components/HeroProducts';
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import OurApproach from '@/components/OurApproach';
import Link from 'next/link';

interface Shoe {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

export default function Page() {

  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    const fetchShoes = async () => {
      const shoesCollection = collection(db, 'collections', 'mens', 'shoes');
      const shoesSnapshot = await getDocs(shoesCollection);
      const shoesList = shoesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Shoe[];
      setShoes(shoesList);
    };

    fetchShoes();
  }, []);

  return (
    <div className='mt-10'>
      <div className='flex'>
        <aside className='w-1/4 p-6 space-y-6'>
          <h2 className='text-xl font-bold pb-3'>Men&apos;s Shoes</h2>
          <ul className='text-sm space-y-2'>
            <li className='hover:underline cursor-pointer'>Everyday Sneakers</li>
            <li className='hover:underline cursor-pointer'>Active Shoes</li>
            <li className='hover:underline cursor-pointer'>Water-Repellent Shoes</li>
            <li className='hover:underline cursor-pointer'>Slip-Ons</li>
            <li className='hover:underline cursor-pointer'>Hiking Shoes</li>
            <li className='hover:underline cursor-pointer'>High Tops</li>
            <li className='hover:underline cursor-pointer'>Sale Shoes</li>
          </ul>
          <h2 className='text-lg font-bold mt-6 pb-4'>Filter By:</h2>
          <Separator />
          <div className='mt-4 space-y-3'>
            <h2 className='text-md font-bold pb-3'>SIZES</h2>
            <p className='text-xs'>Most of our shoes only come in full sizes. If you’re a half size, select your nearest whole size too.</p>
            <div className='flex flex-wrap gap-2 font-sans'>
              {['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14'].map(size => (
                <div key={size} className='flex items-center justify-center border border-gray-300 rounded-md text-center cursor-pointer hover:bg-gray-200' style={{ width: '50px', height: '50px' }}>
                  {size}
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div className='space-y-3'>
            <h2 className='text-md font-bold'>BEST FOR</h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="everyday" />
              <label
                htmlFor="everyday"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Everyday
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cool-weather" />
              <label
                htmlFor="cool-weather"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cool Weather
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="wet-weather" />
              <label
                htmlFor="wet-weather"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Wet Weather
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="active" />
              <label
                htmlFor="active"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Active
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="warm-weather" />
              <label
                htmlFor="warm-weather"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Warm Weather
              </label>
            </div>
          </div>
          <Separator />
          <div className='space-y-3'>
            <h2 className='text-md font-bold'>MATERIAL</h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="wool" />
              <label
                htmlFor="wool"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Soft & Cozy Wool
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="tree" />
              <label
                htmlFor="tree"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Light & Breezy Tree
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="canvas" />
              <label
                htmlFor="canvas"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lightweight & Durable Canvas
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cotton-blend" />
              <label
                htmlFor="cotton-blend"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cozy & Durable Cotton Blend
              </label>
            </div>
          </div>
          <Separator />
          <div className='space-y-3'>
            <h2 className='text-md font-bold'>HUE</h2>
            <ul className='space-y-2'>
              <li><span className="inline-block w-5 h-5 bg-black rounded-full"></span> Black</li>
              <li><span className="inline-block w-5 h-5 bg-gray-500 rounded-full"></span> Grey</li>
              <li><span className="inline-block w-5 h-5 bg-[#F5F5DC] rounded-full"></span> Beige</li>
              <li><span className="inline-block w-5 h-5 bg-blue-500 rounded-full"></span> Blue</li>
              <li><span className="inline-block w-5 h-5 bg-red-500 rounded-full"></span> Red</li>
              <li><span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span> Green</li>
              <li><span className="inline-block w-5 h-5 bg-white rounded-full border border-grey-200"></span> White</li>
              <li><span className="inline-block w-5 h-5 bg-purple-500 rounded-full"></span> Purple</li>
              <li><span className="inline-block w-5 h-5 bg-yellow-500 rounded-full"></span> Yellow</li>
              <li><span className="inline-block w-5 h-5 bg-[#964B00] rounded-full"></span> Brown</li>
            </ul>
          </div>
        </aside>
        <main className='flex-1 p-2'>
          <div className="flex justify-end pr-6">
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
          </div>
          <div className="grid grid-cols-3 gap-5">
            {shoes.map(shoe => (
              <Link
                key={shoe.id}
                href={{
                  pathname: '/view-product',
                  query: {
                    imageUrl: shoe.imageUrl,
                    name: shoe.name,
                    price: shoe.price,
                  },
                }}
              >
                <div>
                  <Image src={shoe.imageUrl} alt={shoe.name} className="w-full" />
                  <h3 className="font-bold">{shoe.name}</h3>
                  <p>${shoe.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
      <HeroProducts />
      <div className="flex bg-gray-100">
        <div className="w-1/4">
          <h1 className='text-4xl font-bold p-7 pt-28'>Explore More Men&apos;s Shoes</h1>
        </div>
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="card bg-white rounded-none">
              <Image src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/4VgbiZp42NWWF7swBOBnoS/1" alt="Shoe 1" />
              <h2 className='text-sm p-4 font-bold'>Everyday Sneakers</h2>
            </div>
            <div className="card bg-white rounded-none">
              <Image src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/6uFLbJ71n1lLaaQhPFEZ6D/4" alt="Shoe 2" />
              <h2 className='text-sm p-4 font-bold'>Active Shoes</h2>
            </div>
            <div className="card bg-white rounded-none">
              <Image src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/2kEfCf93lGt9q957ky14rc/2" alt="Shoe 3" />
              <h2 className='text-sm p-4 font-bold'>Water-Repellent Shoes</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="card bg-white rounded-none">
              <Image src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/39zrLFPePhQXwoap88lAnc/1" alt="Shoe 4" />
              <h2 className='text-sm p-4 font-bold'>Slip-Ons</h2>
            </div>
            <div className="card bg-white rounded-none">
              <Image src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/7zQGhDDbBE8CiAkk9jucxb/2" alt="Shoe 5" />
              <h2 className='text-sm p-4 font-bold'>Hiking Shoes</h2>
            </div>
            <div className="card bg-white rounded-none">
              <Image src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/breadcrumbNavigationNode/en-US/images/4XkWseoM4kmcHIhBhLp1Hn/1" alt="Shoe 6" />
              <h2 className='text-sm p-4 font-bold'>Sale Shoes</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="p-16">
        <h1 className="text-3xl font-bold mb-6">Men&apos;s Shoes</h1>
        <p className="mb-6">
          Find your perfect blend of style and comfort with our collection of men’s shoes for any occasion. From business casual days to meeting up with friends after work to taking on your favorite trail, our men’s shoes provide the ultimate in sustainable support for every step of your day—and look incredible while doing so.
        </p>
        <Accordion type="single" collapsible className="w-full p-10">
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