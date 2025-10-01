import React from "react";
import { Heart } from "lucide-react";

interface Product {
  id: number;
  brand: string;
  season: string;
  name: string;
  price: string;
  image: string;
  imageSecondary: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-contain transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={product.imageSecondary}
          alt={product.name + " secondary"}
          className="w-full h-80 object-contain absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
        <button className="absolute top-2 right-2">
          <Heart className="w-6 h-6 text-gray-600 hover:text-black" />
        </button>
      </div>
      <div className="mt-3">
        <p className="text-sm text-gray-500">{product.season}</p>
        <p className="text-sm font-semibold">{product.brand}</p>
        <p className="text-sm text-gray-700">{product.name}</p>
        <p className="text-sm mt-1">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
