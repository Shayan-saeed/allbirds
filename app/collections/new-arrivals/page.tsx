'use client'
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebaseConfig';
import Link from 'next/link';

interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

export default function NewArrivalsPage() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      const mensCollectionRef = collection(db, 'collections', 'mens', 'shoes');
      const womensCollectionRef = collection(db, 'collections', 'womens', 'shoes');

      const [mensSnapshot, womensSnapshot] = await Promise.all([
        getDocs(mensCollectionRef),
        getDocs(womensCollectionRef),
      ]);

      const mensProducts = mensSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Product[];
      const womensProducts = womensSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Product[];

      const combinedProducts = [...mensProducts.slice(0, 4), ...womensProducts.slice(0, 4)];
      setProducts(combinedProducts);
    };

    fetchNewArrivals();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            href={{
              pathname: '/view-product',
              query: {
                imageUrl: product.imageUrl,
                name: product.name,
                price: product.price,
              },
            }}
          >
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}
