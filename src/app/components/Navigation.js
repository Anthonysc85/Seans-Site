import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation({ dark, showLinks, links }) {
  return (
    <nav className="w-full">
      <ul className="flex gap-5 text-black px-4 py-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/commissions">Commissions</Link>
        </li>
        <li>
          <Link href="/illustrations">illustrations</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
