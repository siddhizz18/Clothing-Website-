import Image from "next/image";
import Link from "next/link";

export default function TshirtsPage() {
  return (
    <main className="bg-white min-h-screen px-8 py-16">

      <h1 className="text-5xl font-light mb-12">
        T-Shirts
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {/* Product 1 */}
        <Link href="/product/graphic-vest-top">
        <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
          <div className="h-[400px] flex items-center justify-center">
            <Image
              src="/products/T-shirt4.jpg.png"
              alt="T-Shirt"
              width={400}
              height={500}
              className="max-h-[400px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            Graphic Vest Top
          </h3>

          <p className="text-gray-500">
            ₹1299
          </p>
        </div>
        </Link>

        {/* Product 2 */}
        <Link href="/product/oversized-tee">
        <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
          <div className="h-[400px] flex items-center justify-center">
            <Image
              src="/products/T-shirt5.jpg.png"
              alt="T-Shirt"
              width={400}
              height={500}
              className="max-h-[380px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            Oversized Tee
          </h3>

          <p className="text-gray-500">
            ₹1499
          </p>
        </div>
        </Link>



        {/* Product 3 */}
        <a
            href="/product/graphic-tshirt"
            className="bg-[#f7f7f7] p-4 group cursor-pointer block"
        >
            <div className="h-[400px] flex items-center justify-center">
                <Image
                    src="/products/T-shirt6.jpg.png"
                    alt="T-Shirt"
                    width={400}
                    height={500}
                    className="max-h-[400px] w-auto object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            <h3 className="mt-4 text-lg font-medium">
                Graphic T-Shirt
            </h3>

            <p className="text-gray-500">
                ₹1299
            </p>
        </a>
      </div>

    </main>
  );
}