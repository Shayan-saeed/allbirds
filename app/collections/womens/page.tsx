'use client'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebaseConfig';
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import HeroProducts from '@/components/HeroProducts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import OurApproach from '@/components/OurApproach';
import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface Shoe {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

export default function page() {

  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchShoes = async () => {
      const shoesCollection = collection(db, 'collections', 'womens', 'shoes');
      const shoesSnapshot = await getDocs(shoesCollection);
      const shoesList = shoesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Shoe[];
      setShoes(shoesList);
    };

    fetchShoes();
  }, []);

  const handleFiltersClick = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className='mt-10'>
      <div className='flex'>
        <aside className='w-1/4 p-6 space-y-6 hidden lg:block'>
          <h2 className='text-xl font-bold pb-3'>Women&apos;s Shoes</h2>
          <ul className='text-sm space-y-2'>
            <li className='hover:underline cursor-pointer'>Everyday Sneakers</li>
            <li className='hover:underline cursor-pointer'>Active Shoes</li>
            <li className='hover:underline cursor-pointer'>Water-Repellent Shoes</li>
            <li className='hover:underline cursor-pointer'>Flats</li>
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
              {['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'].map(size => (
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
            <div className='border p-2 border-gray-300 rounded-full overflow-hidden lg:hidden'>
              <button onClick={handleFiltersClick} className='flex font-bold gap-2'>
                FILTERS
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>
                </div>
              </button>
              {isFilterOpen && (
                <div className='overflow-auto '>
                  <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                    <SheetContent>
                      <h2 className='text-lg font-bold pb-4'>Filter By:</h2>
                      <Separator />
                      <div className='mt-4 space-y-3'>
                        <h2 className='text-md font-bold pb-2'>SIZES</h2>
                        <p className='text-xs pb-2'>Most of our shoes only come in full sizes. If you’re a half size, select your nearest whole size too.</p>
                        <div className='flex flex-wrap gap-2 font-sans pb-3'>
                          {['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'].map(size => (
                            <div key={size} className='flex items-center justify-center border border-gray-300 rounded-md text-center cursor-pointer hover:bg-gray-200' style={{ width: '40px', height: '40px' }}>
                              {size}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className='space-y-3 pb-4'>
                        <h2 className='text-md font-bold pt-2'>BEST FOR</h2>
                        <div className="grid grid-cols-2 gap-4">
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
                      </div>
                      <Separator />
                      <div className='space-y-3 pt-2 pb-4'>
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
                      <div className='space-y-3 pt-2'>
                        <h2 className='text-md font-bold'>HUE</h2>
                        <ul className='grid grid-cols-3 gap-y-2'>
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
                    </SheetContent>
                  </Sheet>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <img src={shoe.imageUrl} alt={shoe.name} className="w-full" />
                  <h3 className="font-bold">{shoe.name}</h3>
                  <p>${shoe.price}</p>
                </div>
              </Link>
            ))}
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
  );
}
