import Banner from "@/components/Banner";
import CareTips from "@/components/CareTips";
import Products from "@/components/Products";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-20">
      <div>
        <Banner />
        <Products />
        <CareTips />
        <TopBrands />
      </div>
    </div>
  );
}
