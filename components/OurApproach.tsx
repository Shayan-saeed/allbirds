import React from 'react'

const OurApproach = () => {
    return (
        <div className="text-left flex flex-col p-7 mb-6">
            <div>
                <h1 className="text-3xl font-extrabold mb-6">The Allbirds Approach</h1>
            </div>
            <div className='flex flex-wrap'>
                <div className="w-full md:w-1/3 mb-6 pr-6">
                    <h2 className="text-xl font-bold mb-2">Wear-All-Day Comfort</h2>
                    <p className="mb-2 font-medium text-sm">Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
                    <a href="#" className="underline text-sm">Learn More</a>
                </div>
                <div className="w-full md:w-1/3 mb-6 pr-6">
                    <h2 className="text-xl font-bold mb-2">Sustainability In Every Step</h2>
                    <p className="mb-2 font-medium text-sm">From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
                    <a href="#" className="underline text-sm">Learn More</a>
                </div>
                <div className="w-full md:w-1/3 mb-6">
                    <h2 className="text-xl font-bold mb-2 pr-6">Materials From The Earth</h2>
                    <p className="mb-2 font-medium text-sm">We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.</p>
                    <a href="#" className="underline text-sm">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default OurApproach