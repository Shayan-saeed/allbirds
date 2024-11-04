'use client'
import React, { useState } from 'react'
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

interface SidebarProps {
    gender: string;
    selectedSizes: number[];
    setSelectedSizes: (sizes: number[] | ((prev: number[]) => number[])) => void;
    selectedBestFor: string[];
    setSelectedBestFor: (bestFor: string[] | ((prev: string[]) => string[])) => void;
    selectedMaterials: string[];
    setSelectedMaterials: (materials: string[] | ((prev: string[]) => string[])) => void;
    selectedHue: string[];
    setSelectedHue: (hues: string[] | ((prev: string[]) => string[])) => void;
}

const MobileFilter = ({
    gender,
    selectedSizes,
    setSelectedSizes,
    selectedBestFor,
    setSelectedBestFor,
    selectedMaterials,
    setSelectedMaterials,
    selectedHue,
    setSelectedHue,
}: SidebarProps) => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleFiltersClick = () => {
        setIsFilterOpen(!isFilterOpen)
    }

    const handleSizeChange = (size: number) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const handleBestForChange = (bestFor: string) => {
        setSelectedBestFor(prev =>
            prev.includes(bestFor) ? prev.filter(b => b !== bestFor) : [...prev, bestFor]
        );
    };

    const handleMaterialChange = (material: string) => {
        setSelectedMaterials(prev =>
            prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
        );
    };

    const handleHueChange = (hue: string) => {
        setSelectedHue(prev =>
            prev.includes(hue) ? prev.filter(h => h !== hue) : [...prev, hue]
        );
    };

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
                                        <div
                                            key={size}
                                            className={`flex items-center justify-center border border-gray-300 rounded-md text-center cursor-pointer hover:bg-gray-200 ${selectedSizes.includes(Number(size)) ? 'bg-gray-200' : ''}`}
                                            onClick={() => handleSizeChange(Number(size))}
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Separator />
                            <div className='space-y-3 pb-4'>
                                <h2 className='text-md font-bold pt-2'>BEST FOR</h2>
                                {["Everyday", "Cool Weather", "Wet Weather", "Active", "Warm Weather"].map(bestFor => (
                                    <div key={bestFor} className="flex items-center space-x-2">
                                        <Checkbox id={bestFor} checked={selectedBestFor.includes(bestFor)} onCheckedChange={() => handleBestForChange(bestFor)} />
                                        <label
                                            htmlFor={bestFor}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {bestFor}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <Separator />
                            <div className='space-y-3 pt-2 pb-4'>
                                <h2 className='text-md font-bold'>MATERIAL</h2>
                                {["Soft & Cozy Wool", "Light & Breezy Tree", "Lightweight & Durable Canvas", "Cozy & Durable Cotton Blend"].map(material => (
                                    <div key={material} className="flex items-center space-x-2">
                                        <Checkbox id={material} checked={selectedMaterials.includes(material)} onCheckedChange={() => handleMaterialChange(material)} />
                                        <label
                                            htmlFor={material}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {material}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <Separator />
                            <div className='space-y-3 pt-2'>
                                <h2 className='text-md font-bold'>HUE</h2>
                                {["Black", "Grey", "Beige", "Blue", "Red", "Green", "White", "Purple", "Yellow", "Brown"].map(hue => (
                                    <div
                                        key={hue}
                                        className="flex items-center space-x-2 cursor-pointer"
                                        onClick={() => handleHueChange(hue)}
                                    >
                                        <span
                                            className={`inline-block w-5 h-5 rounded-full ${hue.toLowerCase()} ${selectedHue.includes(hue) ? 'border-2 border-black' : ''}`}
                                            style={{ backgroundColor: hue === "White" ? "#FFFFFF" : hue }}
                                        ></span>
                                        <span className="text-sm font-medium leading-none">{hue}</span>
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            )
            }
        </div >
    )
}

export default MobileFilter
