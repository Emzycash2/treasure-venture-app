import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl font-bold">
          Treasure <span className="text-amber-400">Venture</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl">
          A modern luxury marketplace for premium products, rare items, and exclusive deals.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-8 py-4 bg-amber-500 text-black rounded-full font-semibold">
            Shop Now
          </button>

          <button className="px-8 py-4 border border-white/20 rounded-full">
            Explore
          </button>
        </div>
      </section>

    </div>
  );
}
