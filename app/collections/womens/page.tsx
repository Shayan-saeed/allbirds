import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebaseConfig';
import WomensPage from './WomensPage';

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

  const shoesCollection = collection(db, 'collections', 'womens', 'shoes');
  const shoesSnapshot = await getDocs(shoesCollection);
  const shoes = shoesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Shoe[];

  return <WomensPage shoes={shoes} />;
}
