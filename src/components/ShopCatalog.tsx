"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ShopCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLifeStage, setSelectedLifeStage] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"popular" | "price-asc" | "price-desc">(
    "popular"
  );

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCat =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchesStage =
        selectedLifeStage === "all" ||
        p.lifeStage === selectedLifeStage ||
        p.lifeStage === "All Life Stages";
      const matchesQuery =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.protein.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesStage && matchesQuery;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    });
  }, [selectedCategory, selectedLifeStage, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-cream-300 shadow-xs space-y-5 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-charcoal-800/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search beef, venison, tripe, starter box..."
              aria-label="Search raw dog food products"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-sm text-forest-950 focus:outline-none focus:border-forest-700"
            />
          </div>

          {/* Life Stage Filter */}
          <div className="md:col-span-4 flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-forest-700 shrink-0" />
            <select
              aria-label="Filter by Dog Life Stage"
              value={selectedLifeStage}
              onChange={(e) => setSelectedLifeStage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-sm text-forest-950 font-medium focus:outline-none focus:border-forest-700"
            >
              <option value="all">All Life Stages (Puppy to Senior)</option>
              <option value="Puppy">Puppy Formulas (8w–12m)</option>
              <option value="Adult">Adult Dog Formulas</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="md:col-span-3">
            <select
              aria-label="Sort products"
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "popular" | "price-asc" | "price-desc"
                )
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-sm text-forest-950 font-medium focus:outline-none focus:border-forest-700"
            >
              <option value="popular">Sort: Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-cream-200">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  active
                    ? "bg-forest-700 text-cream-50 shadow-xs"
                    : "bg-cream-100 text-charcoal-800 hover:bg-cream-200"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 text-sm text-charcoal-800/80">
        <p>
          Showing <strong>{filteredProducts.length}</strong> DEFRA-approved raw products
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800">
          <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
          Multi-buy: Free next-day delivery over £55
        </span>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-cream-300">
          <h3 className="font-serif text-xl font-bold text-forest-900">
            No matching raw recipes found
          </h3>
          <p className="text-sm text-charcoal-800/75 mt-1">
            Try clearing your search filter or selecting &ldquo;All Products&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSelectedLifeStage("all");
              setSearchQuery("");
            }}
            className="mt-4 px-5 py-2.5 rounded-full bg-terracotta-600 text-cream-50 text-sm font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
