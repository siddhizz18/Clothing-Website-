import Link from "next/link";
import Image from "next/image";

export default function footwearPage() {
  return (
    <main className="bg-white min-h-screen px-8 py-16">

      <h1 className="text-5xl font-light mb-12">
        Footwear
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {/* Product 1 */}
        <Link href="/product/slipper">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/footwear1.jpg.png"
                alt="Footwear"
              width={400}
              height={500}
              className="max-h-[800px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            slipper 
          </h3>

          <p className="text-gray-500">
            ₹499
          </p>
        </div>
      </Link>
      
        {/* Product 2 */}
        <Link href="/product/leather-sandal">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/footwear2.jpg.png"
              alt="footwear"
              width={600}
              height={700}
              className="max-h-[400px] w-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="mt-4 text-lg font-medium">
            Leather scandal
          </h3>

          <p className="text-gray-500">
            ₹599
          </p>
        </div>
      </Link>


        {/* Product 3 */}

        <Link href="/product/kitten-heels">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/footwear3.jpg.png"
                alt="footwear"
                width={400}
                height={500}
                className="max-h-[200px] w-auto object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-4 text-lg font-medium">
              kitten heels
            </h3>

            <p className="text-gray-500">
              ₹999
            </p>
         </div>
        </Link>

        {/* Product 4 */}
        <Link href="/product/flat-shoes">
          <div className="bg-[#f7f7f7] p-4 group cursor-pointer">
            <div className="h-[400px] flex items-center justify-center">
              <Image
                src="/products/shoes3.jpg.png"
                alt="footwear"
                width={400}
                height={500}
                className="max-h-[400px] w-auto object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-4 text-lg font-medium">
              Flat Shoes 
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