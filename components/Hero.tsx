import React from 'react'
const Hero = () => {
    return (
        <div className="hero min-h-screen lg:min-h-[100vh]">
            <div className="hero-content text-white w-full flex-col lg:flex-row-reverse p-6 lg:p-12">
                <div className='flex flex-1 flex-col text-left hero-inner'>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">FALL SALE</h1>
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold">30% OFF</h1>
                    <p className="py-6 lg:py-6 text-2xl md:text-3xl lg:text-4xl">
                        SELECT STYLES
                    </p>
                    <p className="py-4 lg:py-6 text-lg lg:text-xl">
                        SCORE ON THE SEASON'S BESTSELLING <br /> SHOES AND COLORS.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero