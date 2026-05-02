"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10">
      
      <Link href="/" className="text-xl font-bold">
        💎 Treasure Venture
      </Link>

      <div className="flex gap-6 text-sm text-gray-300">
        <Link href="#">Shop</Link>
        <Link href="#">Collections</Link>
        <Link href="/login">Login</Link>
      </div>

    </nav>
  );
}
