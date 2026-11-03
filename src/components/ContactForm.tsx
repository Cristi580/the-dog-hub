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
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-900/15 shadow-md text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary text-gray-900 flex items-center justify-center mx-auto border border-gray-900/15">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-gray-900">
          Thank You! The Dog Hub Team Has Your Message
        </h3>
        <p className="text-sm text-gray-800 max-w-md mx-auto leading-relaxed font-medium">
          We respond to all raw feeding and order enquiries within 4 working hours, or call us directly on <strong>0730591742</strong>.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 rounded-full bg-accent text-gray-900 text-sm font-bold hover:bg-accent-dark border border-gray-900/15 transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-900/15 shadow-md space-y-5"
    >
      <div>
        <span className="inline-block px-3 py-1 rounded-full bg-highlight text-xs font-bold uppercase tracking-widest text-gray-900">
          Free Nutritionist Advice
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
          Send Us a Message
        </h2>
        <p className="text-sm text-gray-800 mt-1 font-medium">
          Need help picking recipes for a dog with allergies, pancreatitis, or fussy eating habits? Tell us about your dog below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-1.5"
          >
            Your Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="e.g. Sarah Jenkins"
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-gray-900/20 text-sm text-gray-900 focus:outline-none focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-1.5"
          >
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="sarah@example.co.uk"
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-gray-900/20 text-sm text-gray-900 focus:outline-none focus:border-gray-900"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="dog-breed"
            className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-1.5"
          >
            Dog&apos;s Breed &amp; Age
          </label>
          <input
            id="dog-breed"
            type="text"
            placeholder="e.g. Boxer, 3 years old"
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-gray-900/20 text-sm text-gray-900 focus:outline-none focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-topic"
            className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-1.5"
          >
            Enquiry Topic
          </label>
          <select
            id="enquiry-topic"
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-gray-900/20 text-sm text-gray-900 font-semibold focus:outline-none focus:border-gray-900"
          >
            <option>Switching to Raw / Transition Advice</option>
            <option>Allergies &amp; Sensitive Stomachs</option>
            <option>Puppy Feeding Plan</option>
            <option>Order &amp; Cold-Chain Delivery Query</option>
            <option>In-Store Pickup (130 Halifax road, Sheffield)</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-1.5"
        >
          How Can We Help? *
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          placeholder="Tell us about your dog's current diet, weight, or any questions..."
          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-gray-900/20 text-sm text-gray-900 focus:outline-none focus:border-gray-900"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-dark text-gray-900 font-bold text-sm shadow-md border border-gray-900/15 transition-colors"
      >
        <Send className="w-4 h-4" />
        <span>Send Message to Our Team</span>
      </button>
    </form>
  );
}
