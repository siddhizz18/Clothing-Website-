import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen px-16 py-10">

      <div className="grid md:grid-cols-2 gap-30 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-7xl font-bold mb-8">
            About White Echo
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            White Echo is a modern fashion brand dedicated to creating
            premium clothing that combines comfort, style, and
            individuality. Our mission is to deliver timeless designs
            crafted with quality materials, allowing every customer
            to express themselves through fashion.
          </p>
        </div>

        {/* Right Side */}
        <div>
          <Image
            src="/about/fashion.jpg.png"
            alt="White Echo Fashion"
            width={600}
            height={700}
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>

      </div>

    </main>
  );
}