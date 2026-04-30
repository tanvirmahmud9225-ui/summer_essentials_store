import Banner from "@/components/Banner";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-2000">
      <div>
        <Banner />
        <Products />
      </div>
    </div>
  );
}
