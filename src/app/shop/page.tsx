import type { Metadata } from "next";
import { Snowflake } from "lucide-react";
import ShopCatalog from "@/components/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop Raw Dog Food, Starter Boxes & Meaty Bones",
  description:
    "Order 80/10/10 raw dog food online from The Dog Hub. Filter by protein, life stage, or starter bundles with next-day insulated UK delivery.",
};

export default function ShopPage() {
  return (
    <div>
      {/* Shop Banner */}
      <section className="bg-forest-900 text-cream-50 py-14 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-terracotta-300 text-xs font-bold uppercase tracking-wider">
              <Snowflake className="w-3.5 h-3.5" />
              Direct From Our Cotswolds Butchery
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-3">
              Build Your Dog&apos;s Raw Freezer Box
            </h1>
            <p className="text-cream-200/85 text-sm sm:text-base mt-2 max-w-2xl">
              Mix and match 500g flat-pack minces, recreational marrow bones, and air-dried treats. Dispatched Monday–Thursday in eco-friendly sheep&apos;s wool chilled boxes.
            </p>
          </div>
          <div className="bg-forest-800/90 border border-forest-700 rounded-2xl p-4 text-xs space-y-1 shrink-0">
            <p className="font-bold text-terracotta-300 uppercase tracking-wider">
              Cold-Chain Dispatch Guarantee
            </p>
            <p className="text-cream-100">Order before 2pm for Next-Working-Day Delivery</p>
            <p className="text-cream-200/75">Free shipping automatically applied at £55+</p>
          </div>
        </div>
      </section>

      <ShopCatalog />
    </div>
  );
}
