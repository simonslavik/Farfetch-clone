import Image from "next/image";
import Navbar from "../components/navbar";
import HeroSection from "@/components/heroComponent";
import ProductGrid from "@/components/productsComponent";
import HotCategoriesComponent from "@/components/hotCategoriesComponent";

const productsComponent = [
  {
    id: 1,
    header:
      "New in: handpicked daily from the world’s best brands and boutiques",
    shopNowHref: "/shop",
  },
  {
    id: 2,
    header: "Contrast collars",
    shopNowHref: "/shop2",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <HeroSection />
      <ProductGrid component={productsComponent[0]} />
      <ProductGrid component={productsComponent[1]} />
      <HotCategoriesComponent />
    </main>
  );
}
