import React from 'react'

const FifthSection = () => {
    return (
        <div className="fifth-section flex flex-wrap pt-12 pb-12 w-full">
            <div className="sectionItem group relative w-full md:w-1/2 overflow-hidden transition-transform duration-300 ease-in-out p-2">
                <div className='fifthSecBackground'>
                    <img src={`https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/6h3QXLL5Q7BSJalZ58YJ2c/37200a9dd056e864b378c8355cebfab2/24Q3_Tree_Breezer_Knit_Homepage_Dual-Panel_Module-1_Desktop_Mobile_2000x2000.png`} alt='section-image' className="sectionImage w-full h-auto block" />
                </div>
                <div className='text-white' style={{ position: "absolute", top: 0, textAlign: "center", width: "100%" }}>
                    <h1 className='text-white text-2xl font-bold mt-16'>Women's Flats</h1>
                    <p>Soft Feel, Sophisticated Style</p>
                </div>
                <div className="overlayFifth opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-end flex-row ease-in pb-12">
                    <button className="shop-button-men bg-white text-gray-800 border-none px-5 py-2 mx-1.5 cursor-pointer text-sm font-bold transition-colors duration-300 ease-in-out hover:bg-[#333] hover:text-white">Shop Tree Breezers</button>
                </div>
            </div>
            <div className="sectionItem group relative w-full md:w-1/2 overflow-hidden transition-transform duration-300 ease-in-out p-2">
                <div className='fifthSecBackground'>
                    <video src={`https://cdn.allbirds.com/video/upload/f_auto,q_auto/cms/hEOl9EtcpDTyWj7ocj1qH/7711c5863b082c94815372002ee84af7/Site_WoolCollection_DualPanel.mp4`} className="sectionImage w-full h-auto block" autoPlay loop muted></video>
                </div>
                <div className='text-white' style={{ position: "absolute", top: 0, textAlign: "center", width: "100%" }}>
                    <h1 className='text-white text-2xl font-bold mt-16'>The Wool Collection</h1>
                    <p>Shop The Coziest Sneaks Ever</p>
                </div>
                <div className="overlayFifth group-hover:opacity-100 absolute inset-0 opacity-0 flex justify-center items-end flex-row transition-opacity duration-300 ease-in pb-12">
                    <button className="shop-button-men bg-white text-gray-800 border-none px-4 py-2.5 mx-1.5 cursor-pointer text-sm font-bold transition-colors duration-300 ease-in-out hover:bg-[#333] hover:text-white">Shop Men</button>
                    <button className="shop-button-women bg-white text-gray-800 border-none px-5 py-2 mx-1.5 cursor-pointer text-sm font-bold transition-colors duration-300 ease-in-out hover:bg-[#333] hover:text-white">Shop Women</button>
                </div>
            </div>
        </div>
    )
}

export default FifthSection
