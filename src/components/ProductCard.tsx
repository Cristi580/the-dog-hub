"use client";

import React, { useState } from "react";
import { Star, ShoppingBag, Check, Scale, Sparkles } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article className="group bg-white rounded-2xl border border-cream-300/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Visual Header */}
        <div
          className={`relative h-52 bg-gradient-to-br ${product.accentColor} p-5 flex flex-col justify-between text-cream-50 overflow-hidden`}
        >
          {/* Subtle decorative circle */}
          <div className="absolute -right-8 -bottom-10 w-40 h-40 rounded-full bg-white/10 blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          {/* Top badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            {product.badge ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-cream-50 text-forest-900 shadow-xs">
                <Sparkles className="w-3 h-3 text-terracotta-600" />
                {product.badge}
              </span>
            ) : (
              <span />
            )}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/30 backdrop-blur-xs text-cream-100">
              <Scale className="w-3 h-3" />
              {product.weight}
            </span>
          </div>

          {/* Center Tub Label Visual */}
          <div className="relative z-10 my-auto py-2">
            <span className="text-[11px] uppercase tracking-widest text-cream-200/90 font-semibold block">
              {product.protein} • {product.lifeStage}
            </span>
            <h3 className="font-serif text-xl font-bold leading-snug mt-0.5 text-white">
              {product.name}
            </h3>
          </div>

          {/* Ratio Pill */}
          <div className="relative z-10">
            <span className="inline-block text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-xs text-cream-50">
              {product.ratio}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Rating & Subtitle */}
          <div className="flex items-center justify-between text-xs text-charcoal-800/75 mb-2">
            <span className="font-medium text-forest-700">{product.subtitle}</span>
            <span className="inline-flex items-center gap-1 font-semibold text-amber-700">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              {product.rating.toFixed(1)} ({product.reviewsCount})
            </span>
          </div>

          <p className="text-sm text-charcoal-800/80 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Analytical Macros Mini Bar */}
          <div className="mt-4 pt-3 border-t border-cream-200 grid grid-cols-3 gap-2 text-center">
            <div className="bg-cream-100 rounded-lg py-1.5 px-2">
              <span className="block text-[10px] uppercase text-charcoal-800/60 font-semibold">
                Protein
              </span>
              <span className="text-xs font-bold text-forest-900">
                {product.AnalyticalConstituents.protein}
              </span>
            </div>
            <div className="bg-cream-100 rounded-lg py-1.5 px-2">
              <span className="block text-[10px] uppercase text-charcoal-800/60 font-semibold">
                Crude Fat
              </span>
              <span className="text-xs font-bold text-forest-900">
                {product.AnalyticalConstituents.fat}
              </span>
            </div>
            <div className="bg-cream-100 rounded-lg py-1.5 px-2">
              <span className="block text-[10px] uppercase text-charcoal-800/60 font-semibold">
                Moisture
              </span>
              <span className="text-xs font-bold text-forest-900">
                {product.AnalyticalConstituents.moisture}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Price + Add to Cart */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-3">
        <div>
          {product.compareAtPrice && (
            <span className="text-xs text-charcoal-800/50 line-through block">
              £{product.compareAtPrice.toFixed(2)}
            </span>
          )}
          <span className="font-serif text-2xl font-bold text-forest-900">
            £{product.price.toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all shadow-xs ${
            justAdded
              ? "bg-forest-700 text-cream-50"
              : "bg-terracotta-600 hover:bg-terracotta-700 text-cream-50"
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added to Box</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Box</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}
