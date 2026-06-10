 import Link from "next/link";
export default function CollectionsPage() {
  return (
    <main className="bg-white min-h-screen px-16 py-16">

      <h1 className="text-6xl font-bold text-center mb-20">
        Collections
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

       
        <Link href="/tops">
            <div className="border p-12 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                <h2 className="text-3xl font-semibold">Tops</h2>
            </div>
        </Link>

       
        <Link href="/tshirts">
            <div className="border p-12 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                <h2 className="text-3xl font-semibold">T-Shirts</h2>
            </div>
        </Link>

      
        <Link href="/jeans">
            <div className="border p-12 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                <h2 className="text-3xl font-semibold">Jeans & Trousers</h2>
            </div>
        </Link>


       
        <Link href="/footwear">
            <div className="border p-12 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                <h2 className="text-3xl font-semibold">Footwear</h2>
            </div>
        </Link>

        
        <Link href="/accessories">
            <div className="border p-12 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                <h2 className="text-3xl font-semibold">Accessories</h2>
            </div>
        </Link> 

      
        <Link href="/jackets">
            <div className="border p-12 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                <h2 className="text-3xl font-semibold">Jackets</h2>
            </div>
        </Link>

      </div>

    </main>
  );
}