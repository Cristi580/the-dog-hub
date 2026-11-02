"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-md text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-forest-950">
          Thank You! Our Canine Nutrition Team Has Your Message
        </h3>
        <p className="text-sm text-charcoal-800/80 max-w-md mx-auto leading-relaxed">
          We respond to all raw feeding and order enquiries within 4 working hours (Monday–Friday, 8:30am – 5:30pm).
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 rounded-full bg-forest-700 text-cream-50 text-sm font-semibold hover:bg-forest-800 transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-md space-y-5"
    >
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-terracotta-700">
          Free Nutritionist Advice
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-1">
          Send Us a Message
        </h2>
        <p className="text-sm text-charcoal-800/75 mt-1">
          Need help picking recipes for a dog with allergies, pancreatitis, or fussy eating habits? Tell us about your dog below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5"
          >
            Your Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="e.g. Sarah Jenkins"
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-forest-700"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5"
          >
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="sarah@example.co.uk"
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-forest-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="dog-breed"
            className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5"
          >
            Dog&apos;s Breed &amp; Age
          </label>
          <input
            id="dog-breed"
            type="text"
            placeholder="e.g. Labrador, 4 years old"
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-forest-700"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-topic"
            className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5"
          >
            Enquiry Topic
          </label>
          <select
            id="enquiry-topic"
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm font-medium focus:outline-none focus:border-forest-700"
          >
            <option>Switching to Raw / Transition Advice</option>
            <option>Allergies &amp; Sensitive Stomachs</option>
            <option>Puppy Feeding Plan</option>
            <option>Order &amp; Cold-Chain Delivery Query</option>
            <option>Wholesale / Breeder Club</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5"
        >
          How Can We Help? *
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          placeholder="Tell us about your dog's current diet, weight, or any questions..."
          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-forest-700"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 font-semibold text-sm shadow-md transition-colors"
      >
        <Send className="w-4 h-4" />
        <span>Send Message to Our Team</span>
      </button>
    </form>
  );
}
