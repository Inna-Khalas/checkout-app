import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-orange-100 px-4">
      <div className="text-center space-y-6 bg-white shadow-md p-10 rounded-2xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Tentai!</h1>
        <p className="text-gray-600 text-base">
          This is a simple checkout flow demo. Click the button below to proceed
          to the checkout page.
        </p>
        <Link
          href="/checkout"
          className="inline-block bg-pink-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow hover:bg-pink-500 transition"
        >
          Go to Checkout
        </Link>
      </div>
    </main>
  );
}
