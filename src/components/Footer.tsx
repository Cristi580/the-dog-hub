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
    <footer className="bg-forest-950 text-cream-100 border-t border-forest-800">
      {/* Value Proposition Strip */}
      <div className="border-b border-forest-800/80 bg-forest-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-terracotta-600/20 border border-terracotta-500/30 flex items-center justify-center text-terracotta-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-cream-50 text-base">
                DEFRA Approved &amp; Vet Formulated
              </h3>
              <p className="text-xs text-cream-200/80 mt-1 leading-relaxed">
                Every batch is microbiologically tested and crafted to FEDIAF nutritional standards.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-terracotta-600/20 border border-terracotta-500/30 flex items-center justify-center text-terracotta-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-cream-50 text-base">
                48-Hour Frozen Guarantee
              </h3>
              <p className="text-xs text-cream-200/80 mt-1 leading-relaxed">
                Shipped in compostable sheep&apos;s wool insulation with dry-ice packs straight to your door.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-terracotta-600/20 border border-terracotta-500/30 flex items-center justify-center text-terracotta-400 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-cream-50 text-base">
                100% Ethical British &amp; Irish Farms
              </h3>
              <p className="text-xs text-cream-200/80 mt-1 leading-relaxed">
                Outdoor-reared, pasture-fed meats with zero grains, rendering, or artificial preservatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-terracotta-600 flex items-center justify-center text-cream-50">
              <Dog className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-cream-50 block leading-none">
                The Dog Hub
              </span>
              <span className="text-[11px] uppercase tracking-widest text-terracotta-400 font-semibold">
                Raw Dog Food Co.
              </span>
            </div>
          </Link>
          <p className="text-sm text-cream-200/80 max-w-sm leading-relaxed">
            Biologically appropriate 80/10/10 raw dog food made from human-grade British cuts. Healthier digestion, firmer stools, cleaner teeth, and glossier coats in 30 days.
          </p>
          <div className="space-y-2 pt-2 text-xs text-cream-200/80">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-terracotta-400 shrink-0" />
              <span>Unit 4 Meadowbarn Farm, Cotswolds, GL7 5PQ, United Kingdom</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
              <span>0800 999 4280 (Mon–Fri, 8:30am – 5:30pm)</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
              <span>nutrition@thedoghub.co.uk</span>
            </p>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="font-serif font-bold text-cream-50 text-base mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm text-cream-200/80">
            <li>
              <Link href="/" className="hover:text-terracotta-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-terracotta-400 transition-colors"
              >
                Our Products &amp; Nutrition
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-terracotta-400 transition-colors">
                Shop All Raw Meals
              </Link>
            </li>
            <li>
              <Link
                href="/products#calculator"
                className="hover:text-terracotta-400 transition-colors"
              >
                Raw Feeding Calculator
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-terracotta-400 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Shop Categories Column */}
        <div>
          <h4 className="font-serif font-bold text-cream-50 text-base mb-4">
            Raw Ranges
          </h4>
          <ul className="space-y-2.5 text-sm text-cream-200/80">
            <li>
              <Link
                href="/shop?category=complete-meals"
                className="hover:text-terracotta-400 transition-colors"
              >
                80/10/10 Complete Meals
              </Link>
            </li>
            <li>
              <Link
                href="/shop?category=starter-boxes"
                className="hover:text-terracotta-400 transition-colors"
              >
                2-Week Starter Boxes
              </Link>
            </li>
            <li>
              <Link
                href="/shop?category=raw-bones"
                className="hover:text-terracotta-400 transition-colors"
              >
                Raw Meaty Dental Bones
              </Link>
            </li>
            <li>
              <Link
                href="/shop?category=natural-treats"
                className="hover:text-terracotta-400 transition-colors"
              >
                Air-Dried Venison &amp; Beef Treats
              </Link>
            </li>
            <li>
              <Link
                href="/shop?category=supplements"
                className="hover:text-terracotta-400 transition-colors"
              >
                Slow-Simmered Bone Broths
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-serif font-bold text-cream-50 text-base mb-2">
            Get 15% Off Your First Box
          </h4>
          <p className="text-xs text-cream-200/80 mb-4 leading-relaxed">
            Join 18,000+ raw feeders receiving canine nutrition guides and exclusive seasonal game blends.
          </p>
          {subscribed ? (
            <div className="p-3.5 rounded-xl bg-forest-900 border border-forest-700 text-xs text-emerald-300 font-semibold">
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
                className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-sm text-cream-50 placeholder:text-cream-300/50 focus:outline-none focus:border-terracotta-500"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Claim 15% Welcome Code
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-forest-900 bg-forest-950/90 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60">
          <p>
            © {new Date().getFullYear()} The Dog Hub Ltd. All rights reserved. DEFRA Plant Approval No: 14/289/8102/ABP/PTF.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-cream-100">
              Cold-Chain Shipping Policy
            </Link>
            <Link href="/products" className="hover:text-cream-100">
              Raw Hygiene Guide
            </Link>
            <Link href="/contact" className="hover:text-cream-100">
              Privacy &amp; Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
