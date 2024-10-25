import React from 'react'
import Image from 'next/image'
import heroimage from '../app/HeroBanner.jpg'
const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content mb-36 text-white w-full flex-col lg:flex-row-reverse">
                <div className='flex flex-1 flex-col'>
                    <h1 className="text-4xl font-bold">FALL SALE</h1>
                    <h1 className="text-8xl font-bold">30% OFF</h1>
                    <p className="py-6 text-2xl">
                        SELECT STYLES
                    </p>
                    <p className="py-6">
                        SCORE ON THE SEASON'S BESTSELLING <br /> SHOES AND COLORS.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
