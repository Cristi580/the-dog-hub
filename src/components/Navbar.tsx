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
      {/* Top Announcement Bar - Soft Teal Highlight (#83bcc1) with Dark Accessible Text */}
      <div className="bg-highlight text-gray-900 text-xs sm:text-sm py-2.5 px-4 border-b border-gray-900/10 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Snowflake className="w-4 h-4 text-gray-900 shrink-0" />
            <span>
              <strong>Next-Day Insulated Eco-Box Delivery</strong> — Free on orders over £55
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-gray-900 text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gray-900" />
              DEFRA Approved Raw Producer
            </span>
            <span>•</span>
            <span>130 Halifax road, Sheffield • 0730591742</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header - Primary Sage Green (#9dc183) with Dark Accessible Text */}
      <header className="sticky top-0 z-40 bg-primary text-gray-900 border-b border-gray-900/15 shadow-xs">
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
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center text-gray-900 shadow-xs border border-gray-900/15 group-hover:bg-accent-light transition-colors">
              <Dog className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-gray-900 block leading-none">
                The Dog Hub
              </span>
              <span className="text-[11px] uppercase tracking-widest text-gray-900/85 font-bold block mt-1">
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
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? "bg-accent text-gray-900 shadow-xs border border-gray-900/15"
                      : "text-gray-900 hover:bg-white/40"
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
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-full bg-highlight/60 border border-gray-900/20 text-gray-900 hover:bg-highlight transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-gray-900" />
              Portion Calculator
            </Link>

            <button
              type="button"
              onClick={openCart}
              aria-label={`Open Raw Box Cart with ${totalItems} items`}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent hover:bg-accent-dark text-gray-900 text-sm font-bold shadow-xs border border-gray-900/15 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Your Box</span>
              <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold rounded-full bg-white text-gray-900">
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
              className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-gray-900 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900"
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
            className="md:hidden border-t border-gray-900/15 bg-primary px-4 pt-3 pb-6 shadow-xl"
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
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                      isActive
                        ? "bg-accent text-gray-900 border border-gray-900/15"
                        : "text-gray-900 hover:bg-white/40"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-900/15 flex flex-col gap-2.5">
              <Link
                href="/products#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-accent text-gray-900 font-bold text-sm text-center hover:bg-accent-dark transition-colors border border-gray-900/15"
              >
                Calculate Your Dog&apos;s Daily Raw Portion
              </Link>
              <p className="text-xs text-center text-gray-900 font-medium">
                130 Halifax road, Sheffield, S6 1LH • 0730591742
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
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-xs transition-opacity"
            onClick={closeCart}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-cream-50 shadow-2xl flex flex-col justify-between">
              {/* Drawer Header */}
              <div className="p-6 bg-primary text-gray-900 border-b border-gray-900/15">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-5 h-5 text-gray-900" />
                    <h2 className="font-serif text-xl font-bold text-gray-900">
                      Your Insulated Raw Box
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={closeCart}
                    aria-label="Close cart"
                    className="p-1.5 rounded-lg text-gray-900 hover:bg-white/40 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Free delivery progress bar */}
                <div className="mt-4 bg-highlight rounded-xl p-3 text-xs text-gray-900 border border-gray-900/15">
                  {remainingForFreeShipping > 0 ? (
                    <p className="text-gray-900 font-medium">
                      Add{" "}
                      <strong className="font-bold underline">
                        £{remainingForFreeShipping.toFixed(2)}
                      </strong>{" "}
                      more for <strong>FREE Next-Day Cold-Chain Shipping</strong>!
                    </p>
                  ) : (
                    <p className="text-gray-900 font-bold">
                      🎉 You&apos;ve unlocked FREE Next-Day Insulated Delivery!
                    </p>
                  )}
                  <div className="mt-2 w-full h-2 bg-white/70 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-300"
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
              <div className="flex-1 overflow-y-auto p-6 divide-y divide-gray-200">
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto rounded-full bg-highlight flex items-center justify-center text-gray-900 mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">
                      Your freezer box is empty
                    </h3>
                    <p className="text-sm text-gray-800 mt-1 max-w-xs mx-auto">
                      Explore our 80/10/10 BARF meals, starter bundles, and air-dried treats.
                    </p>
                    <Link
                      href="/shop"
                      onClick={closeCart}
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-gray-900 text-sm font-bold hover:bg-accent-dark transition-colors border border-gray-900/15"
                    >
                      Browse the Shop
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  items.map(({ product, quantity }) => (
                    <div key={product.id} className="py-4 flex gap-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.accentColor} text-gray-900 flex flex-col items-center justify-center shrink-0 p-2 text-center border border-gray-900/15`}
                      >
                        <span className="text-[10px] uppercase tracking-wider font-bold">
                          {product.protein}
                        </span>
                        <span className="text-xs font-serif font-bold">
                          {product.weight}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-gray-900 truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-700">
                          £{product.price.toFixed(2)} per pack
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-lg border border-gray-300 bg-white">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(product.id, quantity - 1)
                              }
                              aria-label="Decrease quantity"
                              className="p-1.5 text-gray-900 hover:bg-accent/30"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-gray-900">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(product.id, quantity + 1)
                              }
                              aria-label="Increase quantity"
                              className="p-1.5 text-gray-900 hover:bg-primary/40"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-900">
                              £{(product.price * quantity).toFixed(2)}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeItem(product.id)}
                              aria-label={`Remove ${product.name}`}
                              className="text-gray-700 hover:text-gray-900 transition-colors"
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
                <div className="p-6 bg-highlight/30 border-t border-gray-900/15 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-900 font-semibold">Subtotal</span>
                    <span className="font-serif text-xl font-bold text-gray-900">
                      £{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-800">
                    Packed in 100% recyclable sheep&apos;s wool insulated liners to stay frozen for up to 48 hours.
                  </p>
                  <Link
                    href="/contact?checkout=demo"
                    onClick={closeCart}
                    className="w-full py-3.5 px-6 rounded-full bg-accent hover:bg-accent-dark text-gray-900 font-bold text-sm flex items-center justify-center gap-2 shadow-md border border-gray-900/15 transition-colors"
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
