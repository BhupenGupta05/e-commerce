import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
  currentIndex: number;
  itemsPerView: number;
}

export default function ProductCarousel({
  products,
  currentIndex,
  itemsPerView,
}: Props) {
  return (
    <div className="overflow-hidden -mx-2">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${
            currentIndex * (100 / itemsPerView)
          }%)`,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="shrink-0 px-2"
            style={{
              width: `${100 / itemsPerView}%`,
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}