'use client'
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseConfig';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export default function SearchPage() {
  const [mensProducts, setMensProducts] = useState<Product[]>([]);
  const [womensProducts, setWomensProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      const mensCollection = collection(db, 'collections', 'mens', 'shoes');
      const womensCollection = collection(db, 'collections', 'womens', 'shoes');

      const mensSnapshot = await getDocs(mensCollection);
      const womensSnapshot = await getDocs(womensCollection);

      const mensList = mensSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];

      const womensList = womensSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];

      setMensProducts(mensList);
      setWomensProducts(womensList);
      setFilteredProducts([...mensList, ...womensList]); 
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([...mensProducts, ...womensProducts]);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = [...mensProducts, ...womensProducts].filter(product =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, mensProducts, womensProducts]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Search Products</h1>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <Link 
            key={product.id}
            href={{
              pathname: '/view-product',
              query: { imageUrl: product.imageUrl, name: product.name, price: product.price },
            }}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
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
