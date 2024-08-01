import React from "react";
import ProductCard from "../components/ProductCard";
import image from "../assets/rhyno final.95.png";

function Products() {
  const products = [
    { id: 1, title: "SE03 Lite", link: "/products/se03-lite", image },
    { id: 2, title: "SE03", link: "/products/se03", image },
    { id: 3, title: "SE03 Max", link: "/products/se03-max", image },
  ];

  return (
    <div className="my-16 flex flex-col gap-8">
      <h2 className="w-full text-center font-extrabold text-5xl">
        Our <span className="text-yellow-200">Products</span>
      </h2>
      <section className="flex flex-col gap-8 justify-center items-center">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            link={product.link}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>
    </div>
  );
}

export default Products;
