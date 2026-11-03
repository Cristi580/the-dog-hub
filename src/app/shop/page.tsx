import type { Metadata } from "next";
import { Snowflake } from "lucide-react";
import ShopCatalog from "@/components/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop Raw Dog Food, Starter Boxes & Meaty Bones",
  description:
    "Order 80/10/10 raw dog food online from The Dog Hub in Sheffield (130 Halifax road, S6 1LH). Filter by protein, life stage, or starter bundles with next-day UK delivery.",
};

export default function ShopPage() {
  return (
    <div>
      {/* Shop Banner - Soft Teal Highlight (#83bcc1) with Dark Accessible Text */}
      <section className="bg-highlight text-gray-900 py-14 border-b border-gray-900/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-gray-900 border border-gray-900/15 text-xs font-bold uppercase tracking-wider">
              <Snowflake className="w-3.5 h-3.5" />
              Direct From The Dog Hub, Sheffield
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-3 text-gray-900">
              Build Your Dog&apos;s Raw Freezer Box
            </h1>
            <p className="text-gray-900 text-sm sm:text-base mt-2 max-w-2xl font-medium">
              Mix and match 500g flat-pack minces, recreational marrow bones, and air-dried treats. Collect in-store at 130 Halifax road, Sheffield or choose next-day insulated box delivery.
            </p>
          </div>
          <div className="bg-primary border border-gray-900/15 rounded-2xl p-4 text-xs space-y-1 shrink-0 text-gray-900">
            <p className="font-bold uppercase tracking-wider text-gray-900">
              Cold-Chain Dispatch Guarantee
            </p>
            <p className="font-semibold text-gray-900">
              Order before 2pm for Next-Working-Day Delivery
            </p>
            <p className="text-gray-900/85 font-medium">
              Free shipping automatically applied at £55+
            </p>
          </div>
        </div>
      </section>

      <ShopCatalog />
    </div>
  );
}
