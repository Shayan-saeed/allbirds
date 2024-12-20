import React from 'react';
import './SecSection.css';
import Link from 'next/link';

const SecSection = () => {
    return (
        <div className="sec-section flex flex-col md:flex-row md:justify-around px-5 py-12 pt-[50px] pb-[50px]">
            <div className="section-item relative w-full md:w-1/3 mb-4 md:mb-0 md:mr-2 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out bg-[rgba(0,0,0,0.5)]">
                <div className='secSecBackground'>
                    <img src={`https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2000/cms/1fWXTkbxm2CXN78Nb4W2Gw/bdb4c55952fef6fbf7c7fb36802f266f/24Q4_RunnerFranchise_Site_TriPanel_WRGO_1200x1500.jpg`} alt='section-image' className="section-image" />
                </div>
                <div className='text-white' style={{ position: "absolute", top: 0, textAlign: "center", width: "100%" }}>
                    <h1 className='text-white text-2xl font-bold mt-16'>Wool Runner Go</h1>
                    <p>Sublimely Soft, Everyday Elevated</p>
                </div>
                <div className="overlay">
                    <Link href='/collections/mens'>
                        <button className="shop-button-men">Shop Men</button>
                    </Link>
                    <Link href='/collections/womens'>
                        <button className="shop-button-women">Shop Women</button>
                    </Link>
                </div>
            </div>
            <div className="section-item relative w-full md:w-1/3 mb-4 md:mb-0 md:mr-2 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out bg-[rgba(0,0,0,0.5)]">
                <div className='secSecBackground'>
                    <video className="section-image" autoPlay loop muted>
                        <source src='https://res.cloudinary.com/dir9vradu/video/upload/v1730298560/secSectionVideo_qbxuqs.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className='text-white' style={{ position: "absolute", top: 0, textAlign: "center", width: "100%" }}>
                    <h1 className='text-white text-2xl font-bold mt-16'>Wool Runner Mizzle</h1>
                    <p>Weather-ready, Everyday Sneaker</p>
                </div>
                <div className="overlay">
                    <Link href='/collections/mens'>
                        <button className="shop-button-men">Shop Men</button>
                    </Link>
                    <Link href='/collections/womens'>
                        <button className="shop-button-women">Shop Women</button>
                    </Link>
                </div>
            </div>
            <div className="section-item relative w-full md:w-1/3 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out bg-[rgba(0,0,0,0.5)]">
                <div className='secSecBackground'>
                    <img src={`https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2000/cms/5nKyYBYlpEgjondsmupa49/9cc8c0359622da20e8c6cfc720ae37c5/24Q3_FallEssentials_Site_NavTile_Mens_Mobile_1125x1542.png`} alt='section-image' className="section-image" />
                </div>
                <div className='text-white' style={{ position: "absolute", top: 0, textAlign: "center", width: "100%" }}>
                    <h1 className='text-white text-2xl font-bold mt-16'>Tree Dasher 2</h1>
                    <p>Bouncy, Lightweight, Active Shoe</p>
                </div>
                <div className="overlay">
                    <Link href='/collections/mens'>
                        <button className="shop-button-men">Shop Men</button>
                    </Link>
                    <Link href='/collections/womens'>
                        <button className="shop-button-women">Shop Women</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SecSection;