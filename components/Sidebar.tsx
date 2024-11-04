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

const Sidebar = ({
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

    const handleSizeChange = (size: number) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    // Handle best for selection
    const handleBestForChange = (bestFor: string) => {
        setSelectedBestFor(prev =>
            prev.includes(bestFor) ? prev.filter(b => b !== bestFor) : [...prev, bestFor]
        );
    };

    // Handle material selection
    const handleMaterialChange = (material: string) => {
        setSelectedMaterials(prev =>
            prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
        );
    };

    // Handle hue selection
    const handleHueChange = (hue: string) => {
        setSelectedHue(prev =>
            prev.includes(hue) ? prev.filter(h => h !== hue) : [...prev, hue]
        );
    };

    return (
        <aside className='w-1/4 p-6 space-y-6 hidden lg:block'>
            <h2 className='text-xl font-bold pb-3'>{gender}&apos;s Shoes</h2>
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
                <div className='flex flex-wrap gap-2 font-sans'>
                    {['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14'].map(size => (
                        <div
                            key={size}
                            className={`flex items-center justify-center border border-gray-300 rounded-md text-center cursor-pointer hover:bg-gray-200 ${selectedSizes.includes(Number(size)) ? 'bg-gray-200' : ''}`}
                            onClick={() => handleSizeChange(Number(size))}
                            style={{ width: '50px', height: '50px' }}
                        >
                            {size}
                        </div>
                    ))}
                </div>
            </div>
            <Separator />
            <div className='space-y-3'>
                <h2 className='text-md font-bold'>BEST FOR</h2>
                {["Everyday", "Cool Weather", "Wet Weather", "Active", "Warm Weather"].map(bestFor => (
                    <div key={bestFor} className="flex items-center space-x-2">
                        <Checkbox id={bestFor} checked={selectedBestFor.includes(bestFor)} onCheckedChange={() => handleBestForChange(bestFor)} />
                        <label
                            htmlFor={bestFor}
                            className="text-sm font-medium leading-none"
                        >
                            {bestFor}
                        </label>
                    </div>
                ))}
            </div>
            <Separator />
            <div className='space-y-3'>
                <h2 className='text-md font-bold'>MATERIAL</h2>
                {["Soft & Cozy Wool", "Light & Breezy Tree", "Lightweight & Durable Canvas", "Cozy & Durable Cotton Blend"].map(material => (
                    <div key={material} className="flex items-center space-x-2">
                        <Checkbox id={material} checked={selectedMaterials.includes(material)} onCheckedChange={() => handleMaterialChange(material)} />
                        <label
                            htmlFor={material}
                            className="text-sm font-medium leading-none"
                        >
                            {material}
                        </label>
                    </div>
                ))}
            </div>
            <Separator />
            <div className='space-y-3'>
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
        </aside>
    )
}

export default Sidebar
