import Link from "next/link";
import Image from "next/image";

export default function TopsPage() {
  return (
    <main className="bg-white min-h-screen px-8 py-16">

      <h1 className="text-5xl font-light mb-12">
        Tops
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {/* Product 1 */}
        <Link href="/product/black-tank-top">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">

            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/top9.jpg.png"
                alt="Top"
                width={400}
                height={500}
                className="max-h-[380px] w-auto object-contain group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-4 text-lg">
              Black Tank Top
            </h3>

            <p>₹999</p>

          </div>
        </Link>

        {/* Product 2 */}
        <Link href="/product/summer-top">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">

            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/tops7.jpg.png"
                alt="Top"
                width={400}
                height={500}
                className="max-h-[400px] w-auto object-contain group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-4 text-lg">
              Summer Top
            </h3>

            <p>₹999</p>

          </div>
        </Link>

      </div>

    </main>
  );
}