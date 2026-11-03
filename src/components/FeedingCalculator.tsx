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
      className="py-16 sm:py-20 bg-highlight text-gray-900 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12 px-6 sm:px-10 lg:px-16 shadow-xl border border-gray-900/15"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-gray-900 border border-gray-900/15 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            Interactive Raw Portion Calculator
          </div>
          <h2
            id="calculator-heading"
            className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-gray-900"
          >
            How much raw food does your dog need each day?
          </h2>
          <p className="text-gray-900 text-sm sm:text-base leading-relaxed font-medium">
            Adult dogs typically thrive on <strong>2% to 3%</strong> of their ideal body weight per day, split across two meals. Use our vet-approved calculator below to find your exact daily portion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div>
              <label
                htmlFor="dog-name-input"
                className="block text-xs uppercase tracking-wider text-gray-900 font-bold mb-2"
              >
                Your Dog&apos;s Name
              </label>
              <input
                id="dog-name-input"
                type="text"
                value={dogName}
                onChange={(e) => setDogName(e.target.value || "Your Dog")}
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-900/20 text-gray-900 font-bold focus:outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="dog-weight-range"
                className="block text-xs uppercase tracking-wider text-gray-900 font-bold mb-2"
              >
                Ideal Weight: <span className="underline font-bold">{weightKg} kg</span>
              </label>
              <input
                id="dog-weight-range"
                type="range"
                min={2}
                max={55}
                step={1}
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-[#c18883] h-2 bg-white rounded-lg cursor-pointer mt-3"
              />
              <div className="flex justify-between text-[11px] text-gray-900 font-semibold mt-1">
                <span>2kg (Toy)</span>
                <span>20kg (Medium)</span>
                <span>55kg (Giant)</span>
              </div>
            </div>
          </div>

          {/* Activity Level Selector */}
          <div>
            <span className="block text-xs uppercase tracking-wider text-gray-900 font-bold mb-2.5">
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
                      ? "bg-accent border-gray-900 text-gray-900 shadow-md"
                      : "bg-white/80 border-gray-900/20 text-gray-900 hover:bg-white"
                  }`}
                >
                  <span className="block text-xs font-bold">{option.label}</span>
                  <span className="block text-[11px] font-medium mt-0.5">
                    {option.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Result Card */}
        <div className="lg:col-span-5 bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-900/15">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-900 font-bold">
                Tailored Raw Plan
              </span>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mt-0.5">
                {dogName}&apos;s Daily Portion
              </h3>
            </div>
            <Sparkles className="w-7 h-7 text-gray-900" />
          </div>

          <div className="py-6 grid grid-cols-2 gap-4 border-b border-gray-200">
            <div className="bg-primary/40 p-4 rounded-xl border border-gray-900/10">
              <span className="text-xs text-gray-900 font-semibold block">
                Daily Raw Intake
              </span>
              <span className="font-serif text-3xl font-bold text-gray-900">
                {dailyGrams}g
              </span>
              <span className="text-[11px] text-gray-800 block mt-1 font-medium">
                ({Math.round(dailyGrams / 2)}g morning &amp; evening)
              </span>
            </div>

            <div className="bg-highlight/40 p-4 rounded-xl border border-gray-900/10">
              <span className="text-xs text-gray-900 font-semibold block">
                Weekly 500g Packs
              </span>
              <span className="font-serif text-3xl font-bold text-gray-900">
                {packsPerWeek} packs
              </span>
              <span className="text-[11px] text-gray-800 block mt-1 font-medium">
                Est. £{estimatedCostPerDay} / day
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-800 mt-4 leading-relaxed font-medium">
            Includes the optimal 80% muscle meat, 10% ground bone, and 10% nutrient-rich secreting offal ratio.
          </p>

          <Link
            href="/shop"
            className="mt-6 w-full py-3.5 px-6 rounded-full bg-accent hover:bg-accent-dark text-gray-900 font-bold text-sm flex items-center justify-center gap-2 shadow-md border border-gray-900/15 transition-colors"
          >
            <span>Build {dogName}&apos;s Box Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
