"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="fixed inset-0 z-0">
        

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/hero.jpg.png"
            alt="Fashion Hero"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/25" />

        {/* Navbar */}
        <nav
          className="
          absolute
          top-6
          left-1/2
          z-30
          w-[90%]
          -translate-x-1/2
          px-10
          py-3
          flex
          justify-end
          items-center
          text-white
          bg-white/5
          backdrop-blur-md
          border
          border-white/20
          rounded-full
        "
        >
          <div className="flex gap-10 uppercase text-xs tracking-[3px]">
            <a href="/collections">Collections</a>
            <a href="/about">About</a>
            <a href="/cart">Cart</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center">

          <div className="text-white ml-24">

            <p className="uppercase tracking-[4px] text-xs mb-4">
              Spring / Summer 2026
            </p>

            <h1 className="text-[70px] md:text-[90px] font-light leading-[0.9]">
              White
              <br />
              Echo
            </h1>

            <p className="mt-8 text-sm text-white/80 max-w-sm leading-relaxed">
              A contemporary collection inspired by people,
              movement and everyday essentials.
            </p>

             

          </div>

        </div>

      </section>

      {/* NEW IN SECTION */}
      <section className="relative z-20 bg-white px-12 py-24 rounded-t-[40px] mt-[100vh]">

        <div className="flex justify-between items-center mb-16">

          <h2 className="text-5xl font-light uppercase tracking-[3px]">
            New In
          </h2>

          <button className="text-5xl hover:translate-x-2 transition-all duration-300">
            →
          </button>

        </div>

        <div className="grid grid-cols-2 gap-10">

          <div className="min-w-[280px] group cursor-pointer snap-start">
            <div className="bg-[#f7f7f7] h-[420px] overflow-hidden flex items-center justify-center">
              <Image
                src="/products/top9.jpg.png"
                alt="Top"
                width={400}
                height={500}
                className="max-h-[380px] w-auto object-contain group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>
          <div className="min-w-[280px] group cursor-pointer snap-start">
            <div className="bg-[#f7f7f7] h-[420px] overflow-hidden flex items-center justify-center">
              <Image
                src="/products/jeans1.jpg.png"
                alt="Jeans"
                width={400}
                height={500}
                className="max-h-[380px] w-auto  object-contain group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>
          <div className="min-w-[280px] group cursor-pointer snap-start">
            <div className="bg-[#f7f7f7] h-[420px] overflow-hidden flex items-center justify-center">
              <Image
                src="/products/T-shirt3.jpg.png"
                alt="Tshirt"
                width={400}
                height={500}
                className="max-h-[380px] w-auto object-contain group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          <div className="min-w-[280px] group cursor-pointer snap-start">
            <div className="bg-[#f7f7f7] h-[420px] overflow-hidden flex items-center justify-center">
              <Image
                src="/products/footwear1.jpg.png"
              alt="Shoes"
                width={400}
                height={500}
                className="max-h-[380px] w-auto object-contain group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
    </section>


    {/* SHOP BY CATEGORY */}
    <section className="relative z-50 bg-white px-8 py-24">

      <div className="mb-14">
        <h2 className="text-5xl font-light">
          Shop By Category
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-8">

        {/* TOPS */}
        <a
        href="/tops"
        className="group relative aspect-[3/4] overflow-hidden cursor-pointer block"
        >
          <Image
            src="/categories/Tops.jpg.png"
            alt="Tops"
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
          <h3 className="absolute bottom-8 left-8 text-white text-3xl group-hover:translate-y-[-5px] transition duration-500">
            Tops
          </h3>
        </a>

        {/* TSHIRTS */}
        <a
          href="/tshirts"
          className="group relative aspect-[3/4] overflow-hidden cursor-pointer block"
        >
          <Image
            src="/categories/T-shirt.jpg.png"
            alt="T-Shirts"
            fill
           className="object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
          <h3 className="absolute bottom-8 left-8 text-white text-3xl group-hover:translate-y-[-5px] transition duration-500">
            T-Shirts
          </h3>
        </a>

        {/* JEANS */}
        <a
          href="/jeans"
          className="group relative aspect-[3/4] overflow-hidden cursor-pointer block"
        >
          <Image
            src="/categories/jeans&trouser.jpg.png"
            alt="Jeans & Trousers"
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
          <h3 className="absolute bottom-8 left-8 text-white text-3xl group-hover:translate-y-[-5px] transition duration-500">
            Jeans & Trousers
          </h3>
        </a>

        {/* JACKETS */}
        <a
          href="/jackets"
          className="group relative aspect-[3/4] overflow-hidden cursor-pointer block"
        >
          <Image
          src="/categories/jacketss.jpg.png"
          alt="Jackets"
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
        <h3 className="absolute bottom-8 left-8 text-white text-3xl group-hover:translate-y-[-5px] transition duration-500">
          Jackets
        </h3> 
      </a>

      {/* FOOTWEAR */}
      <a
        href="/footwear"
        className="group relative aspect-[3/4] overflow-hidden cursor-pointer block"
      >
        <Image
          src="/categories/shoes3.jpg.png"
          alt="Footwear"
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
        <h3 className="absolute bottom-8 left-8 text-white text-3xl group-hover:translate-y-[-5px] transition duration-500">
          Footwear
        </h3>
      </a>

      {/* ACCESSORIES */}
      <a
        href="/accessories"
        className="group relative aspect-[3/4] overflow-hidden cursor-pointer block"
      >
        <Image
          src="/categories/accesories7.jpg.png"
          alt="Accessories"
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
        <h3 className="absolute bottom-8 left-8 text-white text-3xl group-hover:translate-y-[-5px] transition duration-500">
          Accessories
        </h3>
      </a>
      </div>
  </section>
  {/* NEWSLETTER SECTION */}
<section className="relative z-50 bg-white px-8 py-24 ">
  <div className="max-w-4xl mx-auto text-center">

    <p className="uppercase tracking-[4px] text-sm mb-4">
      Become A Member
    </p>

    <h2 className="text-7xl font-light mb-6">
      Join White Echo
    </h2>

    <p className="text-gray-500 mb-10">
      Sign up and get 10% off your first purchase,
      early access to new collections and exclusive offers.
    </p>

    <div className="flex justify-center gap-4 max-w-xl mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 border border-gray-300 px-6 py-4 outline-none"
      />

      <button
        className="bg-black text-white px-8 py-4 uppercase hover:bg-neutral-800 transition"
      >
        Sign Up
      </button>
    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="relative z-50 bg-[#f7f7f7] px-8 py-16">

  <div className="grid grid-cols-3 gap-20 mb-20">

    <div>
      <h3 className="font-semibold mb-6">Shop</h3>

      <ul className="space-y-1 text-gray-600">
        <li className="hover:text-black cursor-pointer transition">
          Women
        </li>
        <li className="hover:text-black cursor-pointer transition">
          Men
        </li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-6">Help</h3>

      <ul className="space-y-1 text-gray-600">
        <li>Contact</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>FAQ</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-6">About</h3>

      <ul className="space-y-1 text-gray-600">
        <li>Our Story</li>
        <li>Careers</li>
        <li>Sustainability</li>
      </ul>
    </div>

  </div>

  <div className="border-t pt-10">

    <div className="flex justify-between items-center">

      <p className="text-gray-500">
        © 2026 White Echo
      </p>

      <div className="flex gap-8">
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
        <a href="#">YouTube</a>
      </div>

    </div>

  </div>

  <div className="mt-16">

    <h3 className="font-semibold mb-6">
      Payments
    </h3>

    <div className="flex items-center gap-8 flex-wrap">

      <img
        src="/payments/cash-on-delivery.png"
        alt="Cash on Delivery"
        className="h-8 w-auto"
      />

      <img
        src="/payments/visa.png"
        alt="Visa"
        className="h-8 w-auto"
      />

      <img
        src="/payments/mastercard.png"
        alt="Mastercard"
        className="h-8 w-auto"
      />

      <img
        src="/payments/upi.png"
        alt="UPI"
        className="h-8 w-auto"
      />

      <a
        href="#"
        className="underline text-gray-700 hover:text-black"
      >
        View all payment options
      </a>

    </div>

  </div>

</footer>

</main>
  );
}
