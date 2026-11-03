import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Award,
  CheckCircle2,
  Star,
  HeartPulse,
  Flame,
  Bone,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FeedingCalculator from "@/components/FeedingCalculator";

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.isPopular).slice(0, 4);

  return (
    <div>
      {/* Hero Section - Highlight Soft Teal (#83bcc1) & Sage Green (#9dc183) with dark text-gray-900 */}
      <section className="relative overflow-hidden bg-highlight/35 pt-10 pb-20 sm:py-24 border-b border-gray-900/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary border border-gray-900/15 text-gray-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gray-900" />
              DEFRA Approved • 100% British Grass-Fed Cuts
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              <span className="bg-primary px-3 py-0.5 rounded-2xl inline-block mb-1">
                Real Ancestral Raw
              </span>{" "}
              Food for{" "}
              <span className="underline decoration-[#c18883] decoration-wavy underline-offset-8">
                Thriving Dogs.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-900 max-w-2xl leading-relaxed font-medium">
              Crafted in small batches for <strong>The Dog Hub</strong> in Sheffield using the biologically appropriate{" "}
              <strong>80% muscle meat, 10% ground bone, and 10% secreting offal</strong>{" "}
              ratio. Zero grains, zero fillers, never cooked or denatured.
            </p>

            {/* Primary & Secondary CTAs - Dusty Rose (#c18883) Accent with dark text-gray-900 */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-accent hover:bg-accent-dark text-gray-900 font-bold text-base shadow-md border border-gray-900/15 transition-all"
              >
                <span>Shop Raw Meals</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-primary hover:bg-primary-dark text-gray-900 border border-gray-900/15 font-bold text-base transition-colors"
              >
                <span>Explore 80/10/10 Nutrition</span>
              </Link>
            </div>

            {/* Social Proof Trust Bar */}
            <div className="pt-6 border-t border-gray-900/15 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-900 mt-1 font-semibold">
                  <strong>4.9/5</strong> from 2,400+ reviews
                </p>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-gray-900 block">
                  100% Raw
                </span>
                <p className="text-xs text-gray-900 font-medium">
                  Human-grade British meat
                </p>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-gray-900 block">
                  48hr Cold
                </span>
                <p className="text-xs text-gray-900 font-medium">
                  Sheep&apos;s wool eco-boxes
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card - Primary Sage Green (#9dc183) with dark text-gray-900 */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-primary p-6 sm:p-8 text-gray-900 shadow-2xl border border-gray-900/15 overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-gray-900/15">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-900 font-bold">
                    Prey Model Standard
                  </span>
                  <h2 className="font-serif text-2xl font-bold mt-0.5 text-gray-900">
                    The 80 / 10 / 10 Formula
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-highlight text-gray-900 border border-gray-900/15 text-xs font-bold">
                  FEDIAF Balanced
                </span>
              </div>

              {/* 80/10/10 Visual Breakdown */}
              <div className="space-y-4 my-6">
                <div className="bg-white/85 rounded-2xl p-4 border border-gray-900/15">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-lg text-gray-900">
                      80% Prime Muscle Meat
                    </span>
                    <span className="text-sm font-bold px-2.5 py-0.5 rounded-full bg-accent text-gray-900">
                      80%
                    </span>
                  </div>
                  <p className="text-xs text-gray-900 leading-relaxed font-medium">
                    Rich in essential amino acids, natural enzymes, and healthy omega fats for lean muscle &amp; sustained energy.
                  </p>
                </div>

                <div className="bg-white/85 rounded-2xl p-4 border border-gray-900/15">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-lg text-gray-900">
                      10% Finely Ground Bone
                    </span>
                    <span className="text-sm font-bold px-2.5 py-0.5 rounded-full bg-highlight text-gray-900">
                      10%
                    </span>
                  </div>
                  <p className="text-xs text-gray-900 leading-relaxed font-medium">
                    Bio-available calcium and phosphorus for strong teeth, dense skeletal structure, and firm, low-odour stools.
                  </p>
                </div>

                <div className="bg-white/85 rounded-2xl p-4 border border-gray-900/15">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-lg text-gray-900">
                      10% Nutrient-Dense Offal
                    </span>
                    <span className="text-sm font-bold px-2.5 py-0.5 rounded-full bg-primary text-gray-900">
                      10%
                    </span>
                  </div>
                  <p className="text-xs text-gray-900 leading-relaxed font-medium">
                    5% liver and 5% secreting organ (kidney/spleen) — nature&apos;s multivitamin packed with Vitamins A, D, E &amp; B12.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-gray-900 font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gray-900" />
                  Blast-frozen at -28°C within 2 hours
                </span>
                <Link
                  href="/shop?category=starter-boxes"
                  className="text-gray-900 hover:underline font-bold"
                >
                  Try Starter Box →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        aria-labelledby="benefits-heading"
        className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-highlight text-gray-900 text-xs uppercase tracking-widest font-bold">
            Visible Transformation in 4 Weeks
          </span>
          <h2
            id="benefits-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-3"
          >
            <span className="bg-primary/60 px-3 py-1 rounded-xl">
              Why 18,000+ UK Dog Owners Switched to The Dog Hub
            </span>
          </h2>
          <p className="text-gray-900 mt-4 text-sm sm:text-base font-medium">
            Ultra-processed kibble is extruded at high temperatures and loaded with up to 60% starchy carbohydrates. Raw feeding restores the diet your dog evolved to digest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: HeartPulse,
              title: "Effortless Digestion",
              desc: "Up to 60% smaller, firmer, and virtually odourless stools thanks to 95%+ nutrient bioavailability.",
            },
            {
              icon: Bone,
              title: "Sparkling Clean Teeth",
              desc: "No starchy sugars sticking to gums. Natural enzymes and raw bone keep breath fresh and tartar away.",
            },
            {
              icon: Flame,
              title: "Calmer, Steady Energy",
              desc: "Zero glycaemic blood-sugar spikes from cheap corn, wheat, or rice fillers.",
            },
            {
              icon: Leaf,
              title: "Softer Coat & Less Itching",
              desc: "Unprocessed Omega-3 fatty acids calm itchy paws, yeast ears, and dry, flaky skin.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-900/15 shadow-xs hover:border-gray-900/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-gray-900 flex items-center justify-center mb-4 border border-gray-900/15">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-800 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Raw Meals Section - Highlight Soft Teal (#83bcc1) background with dark text */}
      <section
        aria-labelledby="featured-meals-heading"
        className="py-16 bg-highlight/45 border-y border-gray-900/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-900 font-bold">
                Most Loved Recipes
              </span>
              <h2
                id="featured-meals-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1"
              >
                Customer Favourite Raw Mince &amp; Boxes
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-gray-900 text-sm font-bold hover:bg-accent-dark border border-gray-900/15 transition-colors"
            >
              <span>View All 9 Raw Recipes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Portion Calculator */}
      <div className="max-w-7xl mx-auto">
        <FeedingCalculator />
      </div>

      {/* Customer Reviews Section */}
      <section
        aria-labelledby="reviews-heading"
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-gray-900 font-bold">
            Real Bowls, Real Results
          </span>
          <h2
            id="reviews-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1"
          >
            Trusted by Raw Feeders &amp; Canine Nutritionists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Our Golden Retriever struggled with ear infections and loose stools for two years on prescription kibble. Two weeks into The Dog Hub's Venison & Turkey packs, his digestion is textbook and his coat gleams.",
              author: "Hannah & Cooper (3yo Golden Retriever)",
              location: "Sheffield, UK",
              recipe: "Wild Scottish Venison & Blueberry",
            },
            {
              quote:
                "The 500g flat-pack tubs stack so neatly in our freezer drawer and defrost cleanly with zero mess. You can actually see the quality of the meat and heart compared to watery supermarket brands.",
              author: "Marcus & Indie (2yo Border Collie)",
              location: "Yorkshire, UK",
              recipe: "Grass-Fed Beef Complete 80/10/10",
            },
            {
              quote:
                "Started our 10-week-old Cockapoo on the Puppy Growth Fine-Mince formula. The transition guide in the Starter Box took away all the guesswork!",
              author: "Claire & Bertie (6mo Cockapoo)",
              location: "Sheffield, UK",
              recipe: "14-Pack Raw Transition Starter Box",
            },
          ].map((review, idx) => (
            <blockquote
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-900/15 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-900 italic leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <footer className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-serif font-bold text-gray-900 text-sm">
                  {review.author}
                </p>
                <p className="text-xs text-gray-800 font-bold mt-0.5">
                  Verified Buyer • {review.recipe}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Bottom Call-To-Action Banner - Primary Sage Green (#9dc183) + Accent Dusty Rose (#c18883) with dark text-gray-900 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-primary rounded-3xl p-8 sm:p-12 text-gray-900 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-gray-900/15">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight text-gray-900 border border-gray-900/15 text-xs font-bold">
              <Award className="w-4 h-4 text-gray-900" />
              <span>New to Raw Feeding? Start with Confidence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Try Our 14-Pack Transition Starter Box for £54
            </h2>
            <p className="text-gray-900 text-sm sm:text-base font-medium">
              Includes 7kg of gentle single-protein raw meals, our step-by-step 14-day switch guide, and free nutritionist support at our Sheffield shop (130 Halifax road, S6 1LH).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/shop?category=starter-boxes"
              className="px-7 py-4 rounded-full bg-accent hover:bg-accent-dark text-gray-900 font-bold text-sm shadow-md border border-gray-900/15 transition-colors text-center"
            >
              Order Starter Box (Save 15%)
            </Link>
            <Link
              href="/contact"
              className="px-6 py-4 rounded-full bg-white hover:bg-gray-100 text-gray-900 border border-gray-900/20 font-bold text-sm transition-colors text-center"
            >
              Ask a Canine Nutritionist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
