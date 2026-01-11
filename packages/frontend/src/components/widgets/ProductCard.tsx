import React from "react";
import { Heart, Plus } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  category,
}) => {
  return (
    <div
      data-cmp="ProductCard"
      className="group bg-card rounded-2xl shadow-custom overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-muted-foreground hover:text-red-400 transition-colors">
          <Heart size={18} />
        </button>
        <button className="absolute bottom-3 right-3 p-3 rounded-full bg-primary text-white translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
          <Plus size={20} />
        </button>
      </div>
      <div className="p-4">
        <div className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">
          {category}
        </div>
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <span className="text-muted-foreground">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
