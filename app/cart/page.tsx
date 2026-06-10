"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {

  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price,
    0
  );

  return (
    <main className="bg-white min-h-screen px-12 pt-10">

      <h1 className="text-5xl font-bold tracking-tight mb-12">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-xl">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item: any, index: number) => (
            <div key={index} className="mb-10 border-b pb-6">

              <h2 className="text-3xl mb-4 font-medium">
                {item.name}
              </h2>

              <p className="text-2xl mb-4">
                ₹{item.price}
              </p>

              <p className="text-gray-500">
                Size: {item.size}
              </p>

              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500"
              >
                Remove
              </button>

            </div>
          ))}

          <div className="border-t pt-4 flex justify-between text-2xl mb-12">

            <span>Total</span>

            <span>₹{total}</span>

          </div>

          <Link href="/checkout">
            <button className="bg-black text-white px-10 py-4 text-lg uppercase hover:opacity-90 transition">
              Proceed To Checkout
            </button>
          </Link>
        </>
      )}

    </main>
  );
}