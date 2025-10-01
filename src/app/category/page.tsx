import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroComponent";
import ProductGrid from "@/components/productsComponent";
import HotCategoriesComponent from "@/components/hotCategoriesComponent";
import HelpComponent from "@/components/helpComponent";
import EmailSection from "@/components/emailSection";
import FooterComponent from "@/components/footerComponent";
import EventComponent from "@/components/eventComponent";
import CategoryComponent from "@/components/categoryComponent";

const products = [
  {
    id: 1,
    brand: "Lanvin",
    season: "New Season",
    name: "animal-print coat",
    price: "4.729 €",
    image: "/womens/women1.webp",
    imageSecondary: "/womens/women5.webp",
  },
  {
    id: 2,
    brand: "Saint Laurent",
    season: "New Season",
    name: "leather clutch bag",
    price: "1.400 €",
    image: "/womens/women2.webp",
    imageSecondary: "/womens/women6.webp",
  },
  {
    id: 3,
    brand: "Willy Chavarria",
    season: "New Season",
    name: "belt loops trousers",
    price: "835 €",
    image: "/womens/women3.webp",
    imageSecondary: "/womens/women7.webp",
  },
  {
    id: 4,
    brand: "Aimé Leon Dore",
    season: "New Season",
    name: "Papia boat shoes",
    price: "267 €",
    image: "/womens/women4.webp",
    imageSecondary: "/womens/women9.webp",
  },
  {
    id: 5,
    brand: "Gucci",
    season: "Spring Collection",
    name: "GG Marmont mini bag",
    price: "1.980 €",
    image: "/womens/women10.webp",
    imageSecondary: "/womens/women11.webp",
  },
  {
    id: 6,
    brand: "Prada",
    season: "Summer Drop",
    name: "Re-Nylon bucket hat",
    price: "420 €",
    image: "/womens/women12.webp",
    imageSecondary: "/womens/women13.webp",
  },
  {
    id: 7,
    brand: "Balenciaga",
    season: "New Arrival",
    name: "logo-print hoodie",
    price: "850 €",
    image: "/womens/women14.webp",
    imageSecondary: "/womens/women15.webp",
  },
  {
    id: 8,
    brand: "Versace",
    season: "Resort",
    name: "Barocco silk shirt",
    price: "1.150 €",
    image: "/womens/women16.webp",
    imageSecondary: "/womens/women17.webp",
  },
];

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between px-14 pt-24">
        <Navbar />
        <CategoryComponent products={products} />
      </main>
      <FooterComponent />
    </div>
  );
}
