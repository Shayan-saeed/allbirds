import { doc, getDoc } from 'firebase/firestore';
import db from '../../../firebaseConfig';
import { notFound } from 'next/navigation';
import ProductDetails from './ProductDetail';

import OurApproach from '@/components/OurApproach';

interface ProductProps {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    sizes: number[];
}

export default async function ProductPage({ params }: { params: {collection: string; id: string } }) {

    const { collection , id } = params;

    const productDoc = doc(db, 'collections', collection, 'shoes', id);
    const productSnapshot = await getDoc(productDoc);

    if (!productSnapshot.exists()) {
        notFound();
    }

    const product = {
        id: productSnapshot.id,
        ...productSnapshot.data(),
    } as ProductProps;

    return (
        <div>
            <ProductDetails product={product} />
            <div className="flex flex-col md:flex-row w-full mt-12 p-6">
                <div className="flex-1 p-4">
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/cms/7kEum339XP7zP4lS4S52sX/3b1fddeda84bc873d2094a00b1f9e09f/WRGO_-_M1.jpg" alt="Image 1" className="w-full h-auto" />
                    <h2 className="text-2xl font-bold mt-4">Refined Design</h2>
                    <p className="mt-2 text-lg">All of the things you love about the original Wool Runner but revamped to offer more room in the toes and added structure for an effortless fit and streamlined look</p>
                </div>
                <div className="flex-1 p-4">
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/cms/SQYVoMQhMd3M3LN4JVQvn/af63bc6da8b87bc08876ea54f42a4601/WRGO-M2.jpg" alt="Image 2" className="w-full h-auto" />
                    <h2 className="text-2xl font-bold mt-4">Springy Support</h2>
                    <p className="mt-2 text-lg">Made with even more foam cushioning to deliver a plusher and bouncier feel that upgrades your ride—all day, everyday</p>
                </div>
                <div className="flex-1 p-4">
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/cms/q23Gt675SRvgAvErxY1GB/fcb6165433848ff3c8eb541334181c04/WR2-M3.jpg" alt="Image 3" className="w-full h-auto" />
                    <h2 className="text-2xl font-bold mt-4">100% Machine Washable</h2>
                    <p className="mt-2 text-lg">Our shoes are fully washable, making every step as clean as the first</p>
                </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-md text-center">
                <h2 className="text-4xl font-bold mb-4">{product.name} Reviews</h2>
                <div className="flex justify-center items-center gap-3 mb-6">
                    <div className="text-7xl font-semibold mb-2">4.2</div>
                    <div className="flex">
                        <span className="text-black text-5xl">&#9733;</span>
                        <span className="text-black text-5xl">&#9733;</span>
                        <span className="text-black text-5xl">&#9733;</span>
                        <span className="text-black text-5xl">&#9733;</span>
                        <span className="text-gray-400 text-5xl">&#9733;</span>
                    </div>
                </div>
            </div>
            <OurApproach />
        </div>
    )
}
