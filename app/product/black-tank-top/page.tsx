"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function BlackTankTopPage() {
  const { addToCart } = useCart();
  const [size, setSize] = useState("M");
  return (
    <main className="bg-white min-h-screen px-16 py-16">

      <div className="grid md:grid-cols-2 gap-20">

        {/* Product Image */}
        <div className="bg-[#f7f7f7] p-8 flex justify-center">
          <Image
            src="/products/top9.jpg.png"
            alt="Black Tank Top"
            width={600}
            height={700}
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="pt-10">

          <h1 className="text-5xl font-light mb-4">
            Black Tank Top
          </h1>

          <p className="text-3xl mb-8">
            ₹999
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            A timeless black tank top crafted from premium cotton fabric.
            Designed for maximum comfort and effortless everyday styling.
            Perfect for casual wear, layering, and summer outfits.
          </p>

          {/* Sizes */}
          <h3 className="text-lg mb-4">
            Select Size
          </h3>

          <div className="flex gap-4 mb-10">
            <button
              onClick={() => setSize("S")}
              className={`border px-6 py-3 ${
                size === "S" ? "bg-black text-white" : ""
              }`}
            >
              S
            </button>

            <button
              onClick={() => setSize("M")}
              className={`border px-6 py-3 ${
                size === "M" ? "bg-black text-white" : ""
              }`}
            >
              M
            </button>

            <button
              onClick={() => setSize("L")}
              className={`border px-6 py-3 ${
                size === "L" ? "bg-black text-white" : ""
              }`}
            >
              L
            </button>

            <button
              onClick={() => setSize("XL")}
              className={`border px-6 py-3 ${
                size === "XL" ? "bg-black text-white" : ""
              }`}
            >
              XL
            </button>
          </div>


          {/* Add to Cart */}
          <Link href="/cart">
            <button
              onClick={() =>
                addToCart({
                  name: "Black Tank Top",
                  price: 999,
                  size: size
                })
              }
              className="bg-black text-white px-12 py-4 text-lg hover:bg-gray-800 transition"
            >
              Add To Cart
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}