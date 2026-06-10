import Image from "next/image";
import Link from "next/link";


export default function jeansSPage() {
  return (
    <main className="bg-white min-h-screen px-8 py-16">

      <h1 className="text-5xl font-light mb-12">
        Jeans & Trousers
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {/* Product 1 */}
        <Link href="/product/black-trousers">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/trouser.jpg.png"
                alt="Trousers"
                width={400}
              height={500}
              className="max-h-[250px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            Black Trousers
          </h3>

          <p className="text-gray-500">
            ₹999
          </p>
        </div>
      </Link>

        {/* Product 2 */}
        <Link href="/product/off-white-trousers">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
              src="/products/trouser1.jpg.png"
              alt="Trousers"
              width={400}
              height={500}
              className="max-h-[400px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            Off white Trousers
          </h3>

          <p className="text-gray-500">
            ₹999
          </p>
        </div>
      </Link>

        {/* Product 3 */}
        <Link href="/product/jeans">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer"> 
            <div className="h-[400px] flex items-center justify-center">
            <Image
              src="/products/jeans2.jpg.png"
              alt="Jeans"
              width={400}
              height={500}
              className="max-h-[500px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            Jeans
          </h3>

          <p className="text-gray-500">
            ₹1299
          </p>
        </div>
      </Link>

        {/* Product 4 */}
        <Link href="/product/blue-jeans"> 
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
          <div className="h-[400px] flex items-center justify-center">
            <Image
              src="/products/jeans1.jpg.png"
              alt="Jeans"
              width={400}
              height={500}
              className="max-h-[360px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            Blue Jeans
          </h3>

          <p className="text-gray-500">
            ₹1299
          </p>
        </div>
      </Link>
        {/* Product 5 */}
        
        <Link href="/product/graphic-jeans">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/jeans4.jpg.png"
                alt="Jeans"
                width={400}
                height={500}
                className="max-h-[440px] w-auto object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-4 text-lg font-medium">
              Graphic Jeans
            </h3>

            <p className="text-gray-500">
              ₹1499
            </p>
          </div>
        </Link>
        </div>
    </main>
  );
}