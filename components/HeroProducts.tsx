'use client'
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import db from '../app/firebaseConfig';
import Link from 'next/link';


interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  collection: string;
}


const HeroProducts = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchCategoryProducts = async (category: string) => {
        const collectionRef = collection(db, 'collections', category, 'shoes');
        const snapshot = await getDocs(collectionRef);
        const productList = snapshot.docs.map(doc => ({ id: doc.id, collection: category , ...doc.data() })) as Product[];
        return productList.sort(() => Math.random() - 0.5).slice(0, 4);
      };

      const mensProducts = await fetchCategoryProducts('mens');
      const womensProducts = await fetchCategoryProducts('womens');

      setProducts([...mensProducts, ...womensProducts]);
    };

    fetchProducts();
  }, []);
  return (
    <div className="relative pt-10">
      <div className="pl-8">
        <h1 className='font-bold text-lg'>MORE TO SHOP</h1>
      </div>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full overflow-hidden p-7"  
        style={{paddingInline: "10%"}}
      >
        <CarouselContent>
          {products.map(product => (
            <CarouselItem className='flex-none w-full md:w-1/3 lg:w-1/4' key={product.id}>
              <Link
                href={`/view-product/${product.collection}/${product.id}`}
              >
                <div className="p-1 mx-auto" style={{ maxWidth: "300px", height: "400px" }}>
                  <img src={product.imageUrl} alt={product.name} width={300} height={200} className='bg-gray-100' />
                  <h2 className='font-bold pt-2'>{product.name}</h2>
                  <p>${product.price}</p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}

export default HeroProducts