import React from "react";
import ProductCard from "./productCard";

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
];

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

interface ProductComponentProps {
  component: {
    id: number;
    header: string;
    shopNowHref: string;
  };
}

const ProductGrid: React.FC<ProductComponentProps> = ({ component }) => {
  return (
    <section className="py-12 w-full">
      {/* Heading + Button */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl md:text-xl font-normal">{component.header}</h2>
        <a
          className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition inline-block text-center"
          href={component.shopNowHref}
        >
          Shop Now
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
