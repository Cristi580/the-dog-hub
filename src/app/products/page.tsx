import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Snowflake,
  CheckCircle2,
  ArrowRight,
  Microscope,
  Sprout,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FeedingCalculator from "@/components/FeedingCalculator";

export const metadata: Metadata = {
  title: "Our Raw Dog Food Products & 80/10/10 Nutrition Guide",
  description:
    "Discover The Dog Hub's complete range of DEFRA-approved 80/10/10 raw dog food minces, puppy formulas, raw meaty bones, and slow-simmered bone broths in Sheffield.",
};

export default function ProductsPage() {
  return (
    <div className="pb-16">
      {/* Page Hero - Soft Teal Highlight (#83bcc1) with Dark Accessible Text */}
      <section className="bg-highlight text-gray-900 py-16 sm:py-20 border-b border-gray-900/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-gray-900 border border-gray-900/15 text-xs font-bold uppercase tracking-wider">
              <Microscope className="w-3.5 h-3.5" />
              Nutritional Transparency &amp; Standards
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Biologically Appropriate Raw Ranges Crafted for Every Life Stage
            </h1>
            <p className="text-gray-900 text-base sm:text-lg mt-4 leading-relaxed font-medium">
              Every recipe at The Dog Hub (130 Halifax road, Sheffield) is built from whole British &amp; Irish cuts you could recognise on a butcher&apos;s block. No meat meal, no mechanically recovered paste, and zero synthetic bulking agents.
            </p>
          </div>
        </div>
      </section>

      {/* Product Range Breakdown */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-7 border border-gray-900/15 shadow-xs flex flex-col justify-between">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-primary text-xs font-bold uppercase tracking-widest text-gray-900">
                Core Daily Nutrition
              </span>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mt-2">
                80/10/10 Complete Prey Model
              </h2>
              <p className="text-sm text-gray-800 mt-3 leading-relaxed">
                Our flagship range replicates whole-prey feeding with 80% muscle meat (including heart &amp; green tripe), 10% finely ground digestible bone, and 10% vitamin-rich liver and kidney.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-gray-900 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0" />
                  Single &amp; dual protein recipes for allergy management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0" />
                  Chunky 8mm grind for adults, 4mm fine grind for puppies
                </li>
              </ul>
            </div>
            <Link
              href="/shop?category=complete-meals"
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent hover:bg-accent-dark text-sm font-bold text-gray-900 border border-gray-900/15 transition-colors"
            >
              <span>Shop 80/10/10 Meals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-gray-900/15 shadow-xs flex flex-col justify-between">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-highlight text-xs font-bold uppercase tracking-widest text-gray-900">
                Enrichment &amp; Oral Care
              </span>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mt-2">
                Raw Meaty Bones &amp; Air-Dried Chews
              </h2>
              <p className="text-sm text-gray-800 mt-3 leading-relaxed">
                Chewing raw bone and fibrous tendons releases natural endorphins while mechanically flossing your dog&apos;s teeth and strengthening jaw muscles.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-gray-900 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0" />
                  Never cooked or smoked (splinter-safe raw state)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0" />
                  Rich in natural glucosamine &amp; chondroitin
                </li>
              </ul>
            </div>
            <Link
              href="/shop?category=raw-bones"
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent hover:bg-accent-dark text-sm font-bold text-gray-900 border border-gray-900/15 transition-colors"
            >
              <span>Shop Bones &amp; Treats</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-gray-900/15 shadow-xs flex flex-col justify-between">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-primary text-xs font-bold uppercase tracking-widest text-gray-900">
                Effortless Onboarding
              </span>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mt-2">
                Curated Starter Boxes &amp; Broths
              </h2>
              <p className="text-sm text-gray-800 mt-3 leading-relaxed">
                Switching from kibble is simple when you start with gentle white proteins and probiotic-rich unbleached green lamb tripe.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-gray-900 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0" />
                  Includes printed 14-day transition chart
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0" />
                  Save 15% compared to individual packs
                </li>
              </ul>
            </div>
            <Link
              href="/shop?category=starter-boxes"
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent hover:bg-accent-dark text-sm font-bold text-gray-900 border border-gray-900/15 transition-colors"
            >
              <span>Explore Starter Bundles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Complete Nutritional Lineup */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-900 font-bold">
              Full Nutritional Lineup
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-1">
              Compare Our Raw Formulas &amp; Macros
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-gray-900 text-sm font-bold hover:bg-accent-dark border border-gray-900/15 transition-colors"
          >
            <span>Filter &amp; Search in Shop</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Interactive Calculator */}
      <div className="max-w-7xl mx-auto">
        <FeedingCalculator />
      </div>

      {/* Cold Chain & Hygiene Standards */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/40 rounded-3xl p-8 sm:p-12 border border-gray-900/15 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <Snowflake className="w-8 h-8 text-gray-900 shrink-0" />
            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Locked-In Freshness (-28°C)
              </h3>
              <p className="text-sm text-gray-900 mt-1 leading-relaxed font-medium">
                Minced and blast-frozen on the same day to preserve fragile enzymes, taurine, and natural B-vitamins without synthetic preservatives.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <ShieldCheck className="w-8 h-8 text-gray-900 shrink-0" />
            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Batch Tested for Safety
              </h3>
              <p className="text-sm text-gray-900 mt-1 leading-relaxed font-medium">
                Every production run undergoes independent UKAS-accredited laboratory screening for Salmonella, Campylobacter, and Enterobacteriaceae.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Sprout className="w-8 h-8 text-gray-900 shrink-0" />
            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900">
                100% Plastic-Free Wool Insulation
              </h3>
              <p className="text-sm text-gray-900 mt-1 leading-relaxed font-medium">
                Our boxes use biodegradable British sheep&apos;s wool liners and recyclable meal tubs that fit effortlessly into standard freezer drawers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
