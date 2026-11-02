"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Sparkles } from "lucide-react";

export default function FeedingCalculator() {
  const [dogName, setDogName] = useState("Barnaby");
  const [weightKg, setWeightKg] = useState(18);
  const [activityPercent, setActivityPercent] = useState(2.5); // 2%, 2.5%, 3%, 5% (puppy)

  // Daily grams = weight (kg) * 1000 * (activityPercent / 100)
  const dailyGrams = Math.round(weightKg * 10 * activityPercent);
  const packsPerWeek = Math.ceil((dailyGrams * 7) / 500);
  const estimatedCostPerDay = ((dailyGrams / 500) * 4.35).toFixed(2);

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="py-16 sm:py-20 bg-forest-900 text-cream-50 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12 px-6 sm:px-10 lg:px-16 shadow-xl border border-forest-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800 text-terracotta-300 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            Interactive Raw Portion Calculator
          </div>
          <h2
            id="calculator-heading"
            className="font-serif text-3xl sm:text-4xl font-bold leading-tight"
          >
            How much raw food does your dog need each day?
          </h2>
          <p className="text-cream-200/85 text-sm sm:text-base leading-relaxed">
            Adult dogs typically thrive on <strong>2% to 3%</strong> of their ideal body weight per day, split across two meals. Use our vet-approved calculator below to find your exact daily portion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div>
              <label
                htmlFor="dog-name-input"
                className="block text-xs uppercase tracking-wider text-cream-200 font-semibold mb-2"
              >
                Your Dog&apos;s Name
              </label>
              <input
                id="dog-name-input"
                type="text"
                value={dogName}
                onChange={(e) => setDogName(e.target.value || "Your Dog")}
                className="w-full px-4 py-3 rounded-xl bg-forest-950/90 border border-forest-700 text-cream-50 font-medium focus:outline-none focus:border-terracotta-400"
              />
            </div>

            <div>
              <label
                htmlFor="dog-weight-range"
                className="block text-xs uppercase tracking-wider text-cream-200 font-semibold mb-2"
              >
                Ideal Weight: <span className="text-terracotta-400 font-bold">{weightKg} kg</span>
              </label>
              <input
                id="dog-weight-range"
                type="range"
                min={2}
                max={55}
                step={1}
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-terracotta-500 h-2 bg-forest-950 rounded-lg cursor-pointer mt-3"
              />
              <div className="flex justify-between text-[11px] text-cream-300/60 mt-1">
                <span>2kg (Toy)</span>
                <span>20kg (Medium)</span>
                <span>55kg (Giant)</span>
              </div>
            </div>
          </div>

          {/* Activity Level Selector */}
          <div>
            <span className="block text-xs uppercase tracking-wider text-cream-200 font-semibold mb-2.5">
              Life Stage &amp; Activity Level
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { label: "Less Active / Senior", pct: 2.0, sub: "2% Body Weight" },
                { label: "Typical Adult", pct: 2.5, sub: "2.5% Body Weight" },
                { label: "Working / Active", pct: 3.0, sub: "3% Body Weight" },
                { label: "Growing Puppy", pct: 5.0, sub: "5% Body Weight" },
              ].map((option) => (
                <button
                  key={option.pct}
                  type="button"
                  onClick={() => setActivityPercent(option.pct)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activityPercent === option.pct
                      ? "bg-terracotta-600 border-terracotta-400 text-white shadow-md"
                      : "bg-forest-950/60 border-forest-700 text-cream-200 hover:border-forest-500"
                  }`}
                >
                  <span className="block text-xs font-bold">{option.label}</span>
                  <span className="block text-[11px] opacity-80 mt-0.5">
                    {option.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Result Card */}
        <div className="lg:col-span-5 bg-cream-50 text-charcoal-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-cream-300">
          <div className="flex items-center justify-between border-b border-cream-300 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-terracotta-700 font-bold">
                Tailored Raw Plan
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest-900 mt-0.5">
                {dogName}&apos;s Daily Portion
              </h3>
            </div>
            <Sparkles className="w-7 h-7 text-terracotta-600" />
          </div>

          <div className="py-6 grid grid-cols-2 gap-4 border-b border-cream-300">
            <div className="bg-cream-100 p-4 rounded-xl">
              <span className="text-xs text-charcoal-800/70 block">
                Daily Raw Intake
              </span>
              <span className="font-serif text-3xl font-bold text-forest-800">
                {dailyGrams}g
              </span>
              <span className="text-[11px] text-charcoal-800/60 block mt-1">
                ({Math.round(dailyGrams / 2)}g morning &amp; evening)
              </span>
            </div>

            <div className="bg-cream-100 p-4 rounded-xl">
              <span className="text-xs text-charcoal-800/70 block">
                Weekly 500g Packs
              </span>
              <span className="font-serif text-3xl font-bold text-terracotta-700">
                {packsPerWeek} packs
              </span>
              <span className="text-[11px] text-charcoal-800/60 block mt-1">
                Est. £{estimatedCostPerDay} / day
              </span>
            </div>
          </div>

          <p className="text-xs text-charcoal-800/75 mt-4 leading-relaxed">
            Includes the optimal 80% muscle meat, 10% ground bone, and 10% nutrient-rich secreting offal ratio.
          </p>

          <Link
            href="/shop"
            className="mt-6 w-full py-3.5 px-6 rounded-full bg-forest-700 hover:bg-forest-800 text-cream-50 font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
          >
            <span>Build {dogName}&apos;s Box Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
