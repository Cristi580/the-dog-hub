"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ShoppingBag,
  Snowflake,
  ShieldCheck,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Compass,
  Dog,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    items,
    isOpen,
    openCart,
    closeCart,
    updateQuantity,
    removeItem,
    totalItems,
    subtotal,
  } = useCart();

  const freeShippingThreshold = 55;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-forest-900 text-cream-100 text-xs sm:text-sm py-2.5 px-4 border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Snowflake className="w-4 h-4 text-terracotta-400 shrink-0" />
            <span>
              <strong>Next-Day Insulated Eco-Box Delivery</strong> — Free on orders over £55
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-cream-200 text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-terracotta-400" />
              DEFRA Approved Raw Producer
            </span>
            <span>•</span>
            <span>100% British &amp; Irish Grass-Fed Meat</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-md border-b border-cream-300/80">
        <nav
          aria-label="Main Navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-11 h-11 rounded-xl bg-forest-700 flex items-center justify-center text-cream-50 shadow-sm group-hover:bg-terracotta-600 transition-colors">
              <Dog className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest-900 block leading-none">
                The Dog Hub
              </span>
              <span className="text-[11px] uppercase tracking-widest text-terracotta-700 font-semibold block mt-1">
                Ancestral Raw Nutrition
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-forest-700 text-cream-50 shadow-sm"
                      : "text-charcoal-800 hover:bg-cream-200/80 hover:text-forest-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions: CTA + Cart + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/products#calculator"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded-full border border-forest-600/30 text-forest-800 hover:bg-forest-50 transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-terracotta-600" />
              Portion Calculator
            </Link>

            <button
              type="button"
              onClick={openCart}
              aria-label={`Open Raw Box Cart with ${totalItems} items`}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 text-sm font-semibold shadow-sm transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Your Box</span>
              <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold rounded-full bg-cream-50 text-terracotta-800">
                {totalItems}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-forest-900 hover:bg-cream-200 focus:outline-none focus:ring-2 focus:ring-forest-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className="md:hidden border-t border-cream-300 bg-cream-50 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-forest-700 text-cream-50"
                        : "text-charcoal-800 hover:bg-cream-200"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-cream-300 flex flex-col gap-2.5">
              <Link
                href="/products#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-cream-200 text-forest-900 font-semibold text-sm text-center hover:bg-cream-300 transition-colors"
              >
                Calculate Your Dog&apos;s Daily Raw Portion
              </Link>
              <p className="text-xs text-center text-charcoal-800/70">
                DEFRA Approved • Vet Formulated • Frozen Fresh Delivery
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Slide-Over Freezer Box / Cart Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Box"
        >
          <div
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-xs transition-opacity"
            onClick={closeCart}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-cream-50 shadow-2xl flex flex-col justify-between">
              {/* Drawer Header */}
              <div className="p-6 bg-forest-900 text-cream-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-5 h-5 text-terracotta-400" />
                    <h2 className="font-serif text-xl font-bold">
                      Your Insulated Raw Box
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={closeCart}
                    aria-label="Close cart"
                    className="p-1.5 rounded-lg text-cream-200 hover:text-white hover:bg-forest-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Free delivery progress bar */}
                <div className="mt-4 bg-forest-800/90 rounded-xl p-3 text-xs">
                  {remainingForFreeShipping > 0 ? (
                    <p className="text-cream-100">
                      Add{" "}
                      <strong className="text-terracotta-300">
                        £{remainingForFreeShipping.toFixed(2)}
                      </strong>{" "}
                      more for <strong>FREE Next-Day Cold-Chain Shipping</strong>!
                    </p>
                  ) : (
                    <p className="text-emerald-300 font-semibold">
                      🎉 You&apos;ve unlocked FREE Next-Day Insulated Delivery!
                    </p>
                  )}
                  <div className="mt-2 w-full h-2 bg-forest-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-terracotta-500 transition-all duration-300"
                      style={{
                        width: `${Math.min(
                          100,
                          (subtotal / freeShippingThreshold) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 divide-y divide-cream-300">
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto rounded-full bg-cream-200 flex items-center justify-center text-forest-700 mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-forest-900">
                      Your freezer box is empty
                    </h3>
                    <p className="text-sm text-charcoal-800/75 mt-1 max-w-xs mx-auto">
                      Explore our 80/10/10 BARF meals, starter bundles, and air-dried treats.
                    </p>
                    <Link
                      href="/shop"
                      onClick={closeCart}
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-700 text-cream-50 text-sm font-semibold hover:bg-forest-800 transition-colors"
                    >
                      Browse the Shop
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  items.map(({ product, quantity }) => (
                    <div key={product.id} className="py-4 flex gap-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.accentColor} text-cream-50 flex flex-col items-center justify-center shrink-0 p-2 text-center`}
                      >
                        <span className="text-[10px] uppercase tracking-wider font-bold opacity-85">
                          {product.protein}
                        </span>
                        <span className="text-xs font-serif font-bold">
                          {product.weight}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-forest-900 truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-charcoal-800/70">
                          £{product.price.toFixed(2)} per pack
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-lg border border-cream-300 bg-white">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(product.id, quantity - 1)
                              }
                              aria-label="Decrease quantity"
                              className="p-1.5 text-charcoal-800 hover:text-terracotta-600"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-forest-900">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(product.id, quantity + 1)
                              }
                              aria-label="Increase quantity"
                              className="p-1.5 text-charcoal-800 hover:text-forest-700"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-forest-900">
                              £{(product.price * quantity).toFixed(2)}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeItem(product.id)}
                              aria-label={`Remove ${product.name}`}
                              className="text-charcoal-800/50 hover:text-terracotta-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-6 bg-cream-100 border-t border-cream-300 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal-800/80">Subtotal</span>
                    <span className="font-serif text-xl font-bold text-forest-900">
                      £{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-800/70">
                    Packed in 100% recyclable sheep&apos;s wool insulated liners to stay frozen for up to 48 hours.
                  </p>
                  <Link
                    href="/contact?checkout=demo"
                    onClick={closeCart}
                    className="w-full py-3.5 px-6 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
