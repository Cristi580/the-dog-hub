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
    <article className="group bg-white rounded-2xl border border-gray-900/15 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Visual Header - Soft palette gradient with dark accessible text */}
        <div
          className={`relative h-52 bg-gradient-to-br ${product.accentColor} p-5 flex flex-col justify-between text-gray-900 overflow-hidden border-b border-gray-900/10`}
        >
          {/* Subtle decorative circle */}
          <div className="absolute -right-8 -bottom-10 w-40 h-40 rounded-full bg-white/30 blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          {/* Top badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            {product.badge ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-gray-900 shadow-xs border border-gray-900/10">
                <Sparkles className="w-3 h-3 text-gray-900" />
                {product.badge}
              </span>
            ) : (
              <span />
            )}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white/80 backdrop-blur-xs text-gray-900 border border-gray-900/10">
              <Scale className="w-3 h-3" />
              {product.weight}
            </span>
          </div>

          {/* Center Tub Label Visual */}
          <div className="relative z-10 my-auto py-2">
            <span className="text-[11px] uppercase tracking-widest text-gray-900/85 font-bold block">
              {product.protein} • {product.lifeStage}
            </span>
            <h3 className="font-serif text-xl font-bold leading-snug mt-0.5 text-gray-900">
              {product.name}
            </h3>
          </div>

          {/* Ratio Pill */}
          <div className="relative z-10">
            <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/75 backdrop-blur-xs text-gray-900 border border-gray-900/10">
              {product.ratio}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Rating & Subtitle */}
          <div className="flex items-center justify-between text-xs text-gray-900 mb-2">
            <span className="font-bold text-gray-900">{product.subtitle}</span>
            <span className="inline-flex items-center gap-1 font-bold text-gray-900">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              {product.rating.toFixed(1)} ({product.reviewsCount})
            </span>
          </div>

          <p className="text-sm text-gray-800 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Analytical Macros Mini Bar */}
          <div className="mt-4 pt-3 border-t border-gray-200 grid grid-cols-3 gap-2 text-center">
            <div className="bg-highlight/35 rounded-lg py-1.5 px-2">
              <span className="block text-[10px] uppercase text-gray-800 font-bold">
                Protein
              </span>
              <span className="text-xs font-bold text-gray-900">
                {product.AnalyticalConstituents.protein}
              </span>
            </div>
            <div className="bg-highlight/35 rounded-lg py-1.5 px-2">
              <span className="block text-[10px] uppercase text-gray-800 font-bold">
                Crude Fat
              </span>
              <span className="text-xs font-bold text-gray-900">
                {product.AnalyticalConstituents.fat}
              </span>
            </div>
            <div className="bg-highlight/35 rounded-lg py-1.5 px-2">
              <span className="block text-[10px] uppercase text-gray-800 font-bold">
                Moisture
              </span>
              <span className="text-xs font-bold text-gray-900">
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
            <span className="text-xs text-gray-600 line-through block">
              £{product.compareAtPrice.toFixed(2)}
            </span>
          )}
          <span className="font-serif text-2xl font-bold text-gray-900">
            £{product.price.toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all shadow-xs border border-gray-900/15 ${
            justAdded
              ? "bg-primary text-gray-900"
              : "bg-accent hover:bg-accent-dark text-gray-900"
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
