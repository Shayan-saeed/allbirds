'use client'
import CarouselSec from "@/components/CarouselSec";
import FifthSection from "@/components/FifthSection";
import Hero from "@/components/Hero";
import HeroProducts from "@/components/HeroProducts";
import OurApproach from "@/components/OurApproach";
import RegisterEmailSection from "@/components/RegisterEmailSection";
import SecSection from "@/components/SecSection";
import ThirdSec from "@/components/ThirdSec";

export default function Home() {
  // useEffect(() => {
  //   SaveProductsToFirebase();
  // }, []);
  return (
    <main>
      <Hero />
      <SecSection />
      <ThirdSec />
      <CarouselSec />
      <FifthSection />
      <HeroProducts />
      <RegisterEmailSection />
      <OurApproach />
    </main>
  );
}
