import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebaseConfig';
import { Separator } from '@/components/ui/separator';
import OurApproach from '@/components/OurApproach';

interface Sock {
    id: string;
    name: string;
    color: string;
    price: string;
    imageUrl: string;
}

export default async function page() {

    const noShowSocksCollection = collection(db, 'collections', 'socks', 'noShowSocks')
    const noShowSocksSnapshot = await getDocs(noShowSocksCollection)
    const noShowSocks = noShowSocksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Sock[];

    const ankleSocksCollection = collection(db, 'collections', 'socks', 'ankleSocks')
    const ankleSocksSnapshot = await getDocs(ankleSocksCollection)
    const ankleSocks = ankleSocksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Sock[];

    const crewSocksCollection = collection(db, 'collections', 'socks', 'crewSocks')
    const crewSocksSnapshot = await getDocs(crewSocksCollection)
    const crewSocks = crewSocksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Sock[];

    const cozyCrewSocksCollection = collection(db, 'collections', 'socks', 'cozyCrewSocks')
    const cozyCrewSocksSnapshot = await getDocs(cozyCrewSocksCollection)
    const cozyCrewSocks = cozyCrewSocksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Sock[];

    return (
        <div>
            <div
                className="bg-[url('https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_3600/cms/6H7f6CaH12FmTdpGXdIndg/e2b1061585b7307be57275c52a0fa452/24Q3_Sock_CustomCollection_Hero_Desktop_2880x710.jpg')] bg-cover bg-center h-[55vh] flex flex-col justify-center items-center text-white"
            >
                <h1 className='text-4xl font-bold pb-4'>Anytime Socks</h1>
                <p className='text-center'>Made with a blend of light, breathable <br /> materials like tree fiber and Organic Cotton,<br /> our socks keep your feet cool, dry, and<br /> smiling (if feet could smile).</p>
            </div>
            <div className='m-6 mt-12'>
                <div className="p-4 pt-10">
                    <h1 className="text-2xl font-semibold mb-4">No Show Socks</h1>
                    <p className="text-lg mb-6">Light, breathable and made to move and groove without budging.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
                        {noShowSocks.map(sock => (
                            <div key={sock.id} className="bg-white shadow-md overflow-hidden">
                                <img src={sock.imageUrl} alt={sock.color} className="w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-md">{sock.name}</h3>
                                    <h3 className="text-gray-600 text-sm">{sock.color}</h3>
                                    <p className="text-sm font-sans">${sock.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Separator />
                <div className="p-4 pt-10">
                    <h1 className="text-2xl font-semibold mb-4">Ankle Socks</h1>
                    <p className="text-lg mb-6">Designed to keep you comfortable for workouts or work.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
                        {ankleSocks.map(sock => (
                            <div key={sock.id} className="bg-white shadow-md overflow-hidden">
                                <img src={sock.imageUrl} alt={sock.color} className="w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-md">{sock.name}</h3>
                                    <h3 className="text-gray-600 text-sm">{sock.color}</h3>
                                    <p className="text-sm font-sans">${sock.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Separator />
                <div className="p-4 pt-10">
                    <h1 className="text-2xl font-semibold mb-4">Crew Socks</h1>
                    <p className="text-lg mb-6">A classic crew height sock designed to keep you comfortable whether it’s the workweek or the weekend.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
                        {crewSocks.map(sock => (
                            <div key={sock.id} className="bg-white shadow-md overflow-hidden">
                                <img src={sock.imageUrl} alt={sock.color} className="w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-md">{sock.name}</h3>
                                    <h3 className="text-gray-600 text-sm">{sock.color}</h3>
                                    <p className="text-sm font-sans">${sock.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Separator />
                <div className="p-4 pt-10">
                    <h1 className="text-2xl font-semibold mb-4">Cozy Crew Socks</h1>
                    <p className="text-lg mb-6">A crew sock with a long-lasting footbed and mid-calf height that will keep you comfortable, warm, and cozy at home or on the go.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
                        {cozyCrewSocks.map(sock => (
                            <div key={sock.id} className="bg-white shadow-md overflow-hidden">
                                <img src={sock.imageUrl} alt={sock.color} className="w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-md">{sock.name}</h3>
                                    <h3 className="text-gray-600 text-sm">{sock.color}</h3>
                                    <p className="text-sm font-sans">${sock.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <OurApproach />
        </div>
    )
}
