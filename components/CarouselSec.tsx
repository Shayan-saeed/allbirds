'use client'
import React, { useState } from 'react';
import Image from 'next/image'

const CarouselSec = () => {

    const images = [
        'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/5BIvZPIZemCHiLZlSccJOn/5a2e7716181bdf7eef036bc7d3bea440/24Q3_FallEssentials_Site_ShoppableFeature_Desktop_2000x2000.png',
        'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/1LP3c2E5REiO39pnbiqLOo/0f6431d182a816a0167134fc284cceda/24Q4_LoungerLift_Site_LifestyleCollectionCarousel_Womens_SlipOns_2000x2000__1_.jpg',
        'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/6ebCuttYCn4fPiwjRCZXBx/2f6e25e643def071d88e6bf6e91e651c/24Q3_TreeGlider_Site_Homepage_LifestyleCollectionsModule_Desktop_Mobile_2000x2000_Mens.jpg',
        'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/6NBsJMLXZfRB70szw2ld6X/c7bc41e9f372f1bf72e33662c980a385/24Q3_TreeGlider_Site_Homepage_LifestyleCollectionsModule_Desktop_Mobile_2000x2000_Womens.jpg',
        'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/5l2hbtB0yYQfkYmO7ycs4s/8cb1e87797e0d01ae437766ae56ac4cb/24Q3_July_SeasonalCore_Mens_Travel_Homepage_LifestyleCollectionsCatalog_Module_Desktop_Mobile_2000x2000.jpg',
        'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/33UGTTNMdtYBHcPfQfjmU2/f0c6b682e2092092d9c2fb4ccf31174b/24Q3_July_SeasonalCore_Womens_Travel_Homepage_LifestyleCollectionsCatalog_Module_Desktop_Mobile_2000x2000.jpg'
    ];

    const [selectedButton, setSelectedButton] = useState<Number | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const newIndex = (currentIndex + 2) % images.length;
        setCurrentIndex(newIndex);
        setSelectedButton(newIndex)
    };

    const handlePrev = () => {
        const newIndex = (currentIndex - 2 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedButton(newIndex);
    };

    const handleLinkClick = (index: number) => {
        setSelectedButton(index)
        setCurrentIndex(index);
    };

    return (
        <div className='p-10'>
            <div className="links pb-7 pl-6">
                <button className={`pr-10 text-lg font-extrabold ${selectedButton === 0 ? 'underline' : ''}`} style={{ textDecorationThickness: '2px', textUnderlineOffset: '6px' }} onClick={() => handleLinkClick(0)}>EVERYDAY WEAR</button>
                <button className={`pr-10 text-lg font-extrabold ${selectedButton === 2 ? 'underline' : ''}`} style={{ textDecorationThickness: '2px', textUnderlineOffset: '6px' }} onClick={() => handleLinkClick(2)}>ON THE MOVE</button>
                <button className={`text-lg font-extrabold ${selectedButton === 4 ? 'underline' : ''}`} style={{ textDecorationThickness: '2px', textUnderlineOffset: '6px' }} onClick={() => handleLinkClick(4)}>TRAVEL READY</button>
            </div>
            <div className="carousel flex flex-wrap md:flex-nowrap space-y-3 md:space-y-0">
                <button onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className='pr-2 relative w-full md:w-1/2'>
                    <div className="image-container" style={{ position: 'relative' }}>
                        <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-auto" />
                        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black', opacity: 0.1 }}></div>
                    </div>
                    <h2 className="text-white text-2xl font-bold absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>{currentIndex === 0 ? "Men's Season-Ready Styles" : currentIndex === 2 ? "Men's Sporty Styles" : currentIndex === 4 ? "Men's Lightweight Styles" : null}</h2>
                </div>
                <div className='pr-2 relative w-full md:w-1/2'>
                    <div className="image-container" style={{ position: 'relative' }}>
                        <Image src={images[(currentIndex + 1) % images.length]} className="w-full h-auto" alt={`Slide ${currentIndex + 2}`} />
                        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black', opacity: 0.1 }}></div>
                    </div>
                    <h2 className="text-white text-2xl font-bold absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>{currentIndex === 0 ? "Women's Fall Essentials" : currentIndex === 2 ? "Women's Athleisure Styles" : currentIndex === 4 ? "Women's Packable Shoes" : null}</h2>
                </div>
                <button onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CarouselSec;