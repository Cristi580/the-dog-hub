"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Dog,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-primary text-gray-900 border-t border-gray-900/15">
      {/* Value Proposition Strip - Soft Teal Highlight (#83bcc1) */}
      <div className="border-b border-gray-900/15 bg-highlight text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent border border-gray-900/15 flex items-center justify-center text-gray-900 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 text-base">
                DEFRA Approved &amp; Vet Formulated
              </h3>
              <p className="text-xs text-gray-900/90 mt-1 leading-relaxed">
                Every batch is microbiologically tested and crafted to FEDIAF nutritional standards.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent border border-gray-900/15 flex items-center justify-center text-gray-900 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 text-base">
                48-Hour Frozen Guarantee
              </h3>
              <p className="text-xs text-gray-900/90 mt-1 leading-relaxed">
                Shipped in compostable sheep&apos;s wool insulation with dry-ice packs straight to your door.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent border border-gray-900/15 flex items-center justify-center text-gray-900 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 text-base">
                100% Ethical British &amp; Irish Farms
              </h3>
              <p className="text-xs text-gray-900/90 mt-1 leading-relaxed">
                Outdoor-reared, pasture-fed meats with zero grains, rendering, or artificial preservatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid - Primary Sage Green (#9dc183) with Dark Accessible Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent border border-gray-900/15 flex items-center justify-center text-gray-900">
              <Dog className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-gray-900 block leading-none">
                The Dog Hub
              </span>
              <span className="text-[11px] uppercase tracking-widest text-gray-900/85 font-bold">
                Raw Dog Food Co.
              </span>
            </div>
          </Link>
          <p className="text-sm text-gray-900/90 max-w-sm leading-relaxed font-medium">
            Biologically appropriate 80/10/10 raw dog food made from human-grade British cuts. Healthier digestion, firmer stools, cleaner teeth, and glossier coats in 30 days.
          </p>
          <div className="space-y-2 pt-2 text-xs text-gray-900 font-semibold">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-900 shrink-0" />
              <span>130 Halifax road, Sheffield, S6 1LH</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-900 shrink-0" />
              <a href="tel:0730591742" className="hover:underline">
                0730591742
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-900 shrink-0" />
              <a href="mailto:petsshop.sheffield@gmail.com" className="hover:underline">
                petsshop.sheffield@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="font-serif font-bold text-gray-900 text-base mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-900 font-medium">
            <li>
              <Link href="/" className="hover:underline transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:underline transition-colors"
              >
                Our Products &amp; Nutrition
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline transition-colors">
                Shop All Raw Meals
              </Link>
            </li>
            <li>
              <Link
                href="/products#calculator"
                className="hover:underline transition-colors"
              >
                Raw Feeding Calculator
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Shop Categories Column */}
        <div>
          <h4 className="font-serif font-bold text-gray-900 text-base mb-4">
            Raw Ranges
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-900 font-medium">
            <li>
              <Link
                href="/shop?category=complete-meals"
                className="hover:underline transition-colors"
              >
                80/10/10 Complete Meals
              </Link>
            </li>
            <li>
              <Link
                href="/shop?category=starter-boxes"
                className="hover:underline transition-colors"
              >
                2-Week Starter Boxes
              </Link>
            </li>
            <li>
              <Link
                href="/shop?category=raw-bones"
                className="hover:underline transition-colors"
              >
                Raw Meaty Dental Bones
              </Link>
            </li>
            <li>
              <Link
                href="/shop?category=natural-treats"
                className="hover:underline transition-colors"
              >
                Air-Dried Venison &amp; Beef Treats
              </Link>
            </li>
            <li>
              <Link
                href="/shop?category=supplements"
                className="hover:underline transition-colors"
              >
                Slow-Simmered Bone Broths
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-serif font-bold text-gray-900 text-base mb-2">
            Get 15% Off Your First Box
          </h4>
          <p className="text-xs text-gray-900/90 mb-4 leading-relaxed font-medium">
            Join 18,000+ raw feeders receiving canine nutrition guides and exclusive seasonal game blends.
          </p>
          {subscribed ? (
            <div className="p-3.5 rounded-xl bg-highlight border border-gray-900/20 text-xs text-gray-900 font-bold">
              🎉 Welcome! Use code <span className="underline">RAWDOG15</span> at checkout for 15% off.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="space-y-2.5"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                required
                placeholder="Enter your email..."
                aria-label="Email address"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-900/20 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:border-gray-900"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-accent hover:bg-accent-dark text-gray-900 font-bold text-xs uppercase tracking-wider border border-gray-900/15 transition-colors"
              >
                Claim 15% Welcome Code
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-900/15 bg-primary-dark/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-900 font-medium">
          <p>
            © {new Date().getFullYear()} The Dog Hub • 130 Halifax road, Sheffield, S6 1LH • Tel: 0730591742
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:underline">
              Cold-Chain Shipping Policy
            </Link>
            <Link href="/products" className="hover:underline">
              Raw Hygiene Guide
            </Link>
            <Link href="/contact" className="hover:underline">
              Privacy &amp; Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
