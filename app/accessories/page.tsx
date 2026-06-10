import Link from "next/link";
import Image from "next/image";

export default function accessoriesPage() {
  return (
    <main className="bg-white min-h-screen px-8 py-16">

      <h1 className="text-5xl font-light mb-12">
        Accessories
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {/* Product 1 */}
        <Link href="/product/yellow-tint-sunglasses">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/accesories11.jpg.png"
                alt="Accessories"
              width={400}
              height={100}
              className="max-h-[300px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            yellow tint Sunglasses
          </h3>

          <p className="text-gray-500">
            ₹499
          </p>
        </div>
      </Link>

        {/* Product 2 */}
        <Link href="/product/starfish-shaped-earrings">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/accesories8.jpg.png"
                alt="Accessories"
              width={400}
              height={500}
              className="max-h-[400px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            Starfish-shaped earrings
          </h3>

          <p className="text-gray-500">
            ₹199
          </p>
        </div>
      </Link>
        

      </div>

    </main>
  );
}