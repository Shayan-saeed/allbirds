import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebaseConfig';
import MensPage from './MensPage';

interface Shoe {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  sizes: number[];
  bestFor: string;
  material: string;
  hue: string;
}

export default async function Page() {
    
    const shoesCollection = collection(db, 'collections', 'mens', 'shoes');
    const shoesSnapshot = await getDocs(shoesCollection);
    const shoes = shoesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Shoe[];

    return <MensPage shoes={shoes} />;
}
