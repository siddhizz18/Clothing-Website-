import Link from "next/link";
import Image from "next/image";

export default function jacketsPage() {
  return (
    <main className="bg-white min-h-screen px-8 py-16">

      <h1 className="text-5xl font-light mb-12">
        Jackets
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {/* Product 1 */}
        <Link href="/product/black-jacket">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/jackets1.jpg.png"
                alt="Jacket"
                width={400}
                height={500}
                className="max-h-[380px] w-auto object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium">
              Black Jacket
            </h3>
            <p className="text-gray-500">
              ₹2999
            </p>

          </div>
        </Link>

        {/* Product 2 */}
        <Link href="/product/relaxed-fit-jacket">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/jackets3.jpg.png"
                alt="Jacket"
                width={400}
                height={500}
                className="max-h-[400px] w-auto object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium">
              Relaxed Fit Jacket
            </h3>
            <p className="text-gray-500">
              ₹3499
            </p>

          </div>
        </Link>
    </div>

    </main>
  );
}