import Link from "next/link";
export default function CheckoutPage() {
  return (
    <main className="bg-white min-h-screen px-12 pt-20">

      <h1 className="text-7xl font-bold mb-10">
        Checkout
      </h1>

      <div className="max-w-2xl space-y-6">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-4"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-4"
        />

        <textarea
          placeholder="Address"
          className="w-full border p-4 h-32"
        />

        <input
          type="text"
          placeholder="City"
          className="w-full border p-4"
        />

        <input
          type="text"
          placeholder="Pincode"
          className="w-full border p-4"
        />

        <Link href="/order-success">
            <button className="bg-black text-white px-10 py-4 text-lg uppercase">
                Place Order
            </button>
        </Link>

      </div>

    </main>
  );
}