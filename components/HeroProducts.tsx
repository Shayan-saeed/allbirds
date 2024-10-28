import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const HeroProducts = () => {
  const products = [
    {
      image: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/2ROcA1uYykQbU2tM7v66qy/acb2d5eddb4b77c5a4df6c0e19f72709/A11160_24Q3_Lounger_Lift_Stony_Cream_Natural_White_PDP_LEFT-2000x2000.png",
      heading: "Women's Lounger Lift",
      subheading: "Stony Cream",
      price: "$150",
    },
    {
      image: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/4PZe5eFRZyPOtgClDfNNaE/42942165a9325d001947ec9f5934d548/A11053_24Q3_Tree_Dasher_Relay_Deep_Navy_Deep_Navy_PDP_LEFT-2000x2000.png",
      heading: "Men's Tree Dasher Relay",
      subheading: "Deep Navy",
      price: "$130",
    },
    {
      image: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/25kaBcqrF20cfR3D2EVJh7/2a70011de8a9b7a09a9ca4db30061962/A10967_24Q2_Tree_Runner_Go_Thunder_Red_Natural_White_PDP_LEFT-2000x2000.png",
      heading: "Women's Tree Runner Go",
      subheading: "Thunder Red",
      price: "$84",
    },
    {
      image: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/2ROcA1uYykQbU2tM7v66qy/acb2d5eddb4b77c5a4df6c0e19f72709/A11160_24Q3_Lounger_Lift_Stony_Cream_Natural_White_PDP_LEFT-2000x2000.png",
      heading: "Men's Tree Runner Go",
      subheading: "Stony Cream",
      price: "$84",
    },
    {
      image: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/6AxKaFvzBSsPX2orFJBOvs/bbb3a6b9eafa24e8d000d725422ee1a5/TB1WNNT_SHOE_LEFT_GLOBAL_WOMENS_TREE_BREEZERS_NAVY_NIGHT_DARK_NAVY.png",
      heading: "Women's Tree Breezers",
      subheading: "Navy Night",
      price: "$100",
    },
    {
      image: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/4Z8F1HXuA4YULfGpqJDyCg/5d62a8b67fd7d678680ff46016dec100/TR2MNNT_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_NAVY_NIGHT_DARK_NAVY.png",
      heading: "Men's Tree Runners",
      subheading: "Navy Night",
      price: "$98",
    },
    {
      image: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/LF5mw2OqGGbPKGlIGiM2r/d72e3d6ede36f865382272b2ea6f09c0/A11074_24Q3_Tree_Glider_Blizzard_Basin_Pink_Blizzard_PDP_LEFT-2000x2000.png",
      heading: "Women's Tree Gliders",
      subheading: "Blizzard/Basin Pink",
      price: "$94",
    },
  ];

  return (
    <div className="relative">
      <div className="pl-8">
        <h1 className='font-bold text-lg'>MORE TO SHOP</h1>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full overflow-hidden p-7"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem className='basis-full md:basis-1/4 ' key={index}>
              <div className="p-1" style={{ width: "300px", height: "400px" }}>
                <Image src={product.image} alt={product.heading} width={300} height={200} className='bg-gray-100' />
                <h2 className='font-bold pt-2'>{product.heading}</h2>
                <h3>{product.subheading}</h3>
                <p>{product.price}</p>
              </div>
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