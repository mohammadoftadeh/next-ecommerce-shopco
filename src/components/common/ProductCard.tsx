import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";
import { calculateDiscountedPrice } from "@/lib/utils";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const discountedPrice = calculateDiscountedPrice(data.price, data.discount);

  return (
    <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      className="flex flex-col items-start aspect-auto"
      aria-label={`View details for ${data.title}, price $${discountedPrice} ${
        data.rating ? `, rated ${data.rating} out of 5 stars` : ""
      }`}
    >
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
          alt={data.title}
          // Optimization: Define sizes to help browser download the appropriate image size
          // based on the grid layout (1 col mobile, 2 col tablet, 3 col desktop)
          sizes="(max-width: 374px) 100vw, (max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 50vw, 295px"
        />
      </div>
      <strong className="text-black xl:text-xl">{data.title}</strong>
      <div className="flex items-end mb-1 xl:mb-2">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={19}
          readonly
        />
        <span className="text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
          {data.rating.toFixed(1)}
          <span className="text-black/60">/5</span>
        </span>
      </div>
      <div className="flex items-center space-x-[5px] xl:space-x-2.5">
        <span className="font-bold text-black text-xl xl:text-2xl">
          ${discountedPrice}
        </span>
        {data.discount.percentage > 0 && (
          <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
            ${data.price}
          </span>
        )}
        {data.discount.amount > 0 && (
          <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
            ${data.price}
          </span>
        )}
        {data.discount.percentage > 0 ? (
          <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
            {`-${data.discount.percentage}%`}
          </span>
        ) : (
          data.discount.amount > 0 && (
            <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
              {`-$${data.discount.amount}`}
            </span>
          )
        )}
      </div>
    </Link>
  );
};

// Memoized to prevent unnecessary re-renders when parent lists (like filters or carousels) update
// but the product data itself hasn't changed.
export default React.memo(ProductCard);
