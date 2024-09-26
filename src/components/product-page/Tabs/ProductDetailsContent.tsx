import React from "react";
import ProductDetails from "./ProductDetails";

const ProductDetailsContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Product specifications
      </h3>
      <ProductDetails />
    </section>
  );
};

export default ProductDetailsContent;
