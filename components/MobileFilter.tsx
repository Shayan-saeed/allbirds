'use client'
import React, { useState } from 'react'
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

const MobileFilter = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleFiltersClick = () => {
        setIsFilterOpen(!isFilterOpen)
    }
    return (
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
                <div>
                    <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                        <SheetContent className='overflow-y-auto'>
                            <h2 className='text-lg font-bold pb-4'>Filter By:</h2>
                            <Separator />
                            <div className='mt-4 space-y-3 overflow-auto'>
                                <h2 className='text-md font-bold pb-2'>SIZES</h2>
                                <p className='text-xs pb-2'>Most of our shoes only come in full sizes. If you’re a half size, select your nearest whole size too.</p>
                                <div className='flex flex-wrap gap-2 font-sans pb-3'>
                                    {['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14'].map(size => (
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
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-black rounded-full"></span> Black</li>
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-gray-500 rounded-full"></span> Grey</li>
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-[#F5F5DC] rounded-full"></span> Beige</li>
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-blue-500 rounded-full"></span> Blue</li>
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-red-500 rounded-full"></span> Red</li>
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span> Green</li>
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-white rounded-full border border-grey-200"></span> White</li>
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-purple-500 rounded-full"></span> Purple</li>
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-yellow-500 rounded-full"></span> Yellow</li>
                                    <li className='flex items-center gap-2'><span className="inline-block w-5 h-5 bg-[#964B00] rounded-full"></span> Brown</li>
                                </ul>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            )}
        </div>
    )
}

export default MobileFilter
