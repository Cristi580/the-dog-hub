import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, HelpCircle, Dog } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | The Dog Hub — 130 Halifax road, Sheffield, S6 1LH",
  description:
    "Get in touch with The Dog Hub at 130 Halifax road, Sheffield, S6 1LH. Call 0730591742 or email petsshop.sheffield@gmail.com for free raw dog food nutrition advice.",
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      {/* Header - Soft Teal Highlight (#83bcc1) with Dark Accessible Text */}
      <section className="bg-highlight text-gray-900 py-16 border-b border-gray-900/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-gray-900 border border-gray-900/15 text-xs font-bold uppercase tracking-wider">
              <Dog className="w-3.5 h-3.5" />
              The Dog Hub • Sheffield
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-3 text-gray-900">
              Speak With Our Raw Nutrition Specialists
            </h1>
            <p className="text-gray-900 text-base sm:text-lg mt-3 leading-relaxed font-medium">
              Visit us in person at <strong>130 Halifax road, Sheffield, S6 1LH</strong> or get in touch by phone or email for tailored raw feeding advice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Optimized Contact Image + Direct Contact Details + FAQs */}
        <div className="lg:col-span-5 space-y-6">
          {/* Next.js <Image /> Component featuring /contact.jpeg */}
          <div className="bg-primary rounded-3xl p-4 sm:p-5 border border-gray-900/15 shadow-md">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-gray-900/15 shadow-xs">
              <Image
                src="/contact.jpeg"
                alt="The Dog Hub founder with her happy raw-fed Boxer dog in Sheffield"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4 px-2 text-gray-900">
              <p className="font-serif text-lg font-bold text-gray-900">
                Welcome to The Dog Hub, Sheffield
              </p>
              <p className="text-xs text-gray-900 font-medium mt-0.5">
                Passionate about natural, biologically appropriate raw dog food for happy, healthy dogs across South Yorkshire.
              </p>
            </div>
          </div>

          {/* Direct Contact Details Card */}
          <div className="bg-white rounded-3xl p-7 border border-gray-900/15 space-y-6 shadow-xs">
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              Direct Contact Details
            </h2>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary text-gray-900 border border-gray-900/15 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">
                  The Dog Hub Shop Address
                </h3>
                <p className="text-sm text-gray-900 font-semibold mt-0.5">
                  130 Halifax road, Sheffield, S6 1LH
                </p>
                <p className="text-xs text-gray-800 mt-0.5">
                  Dogs on leads are always welcome in-store for a natural treat!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent text-gray-900 border border-gray-900/15 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">
                  Phone Number
                </h3>
                <a
                  href="tel:0730591742"
                  className="text-base text-gray-900 font-bold mt-0.5 hover:underline block"
                >
                  0730591742
                </a>
                <p className="text-xs text-gray-800">
                  Mon–Sat, 8:30am – 5:30pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-highlight text-gray-900 border border-gray-900/15 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">
                  Email Address
                </h3>
                <a
                  href="mailto:petsshop.sheffield@gmail.com"
                  className="text-sm text-gray-900 font-bold mt-0.5 hover:underline block break-all"
                >
                  petsshop.sheffield@gmail.com
                </a>
                <p className="text-xs text-gray-800">
                  Fast response for nutrition &amp; order enquiries
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary text-gray-900 border border-gray-900/15 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">
                  In-Store Collection &amp; Local Delivery
                </h3>
                <p className="text-xs text-gray-800 mt-0.5 leading-relaxed font-medium">
                  Same-day click-and-collect available at 130 Halifax road, Sheffield, plus insulated next-day delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Quick FAQs - Soft Teal Highlight (#83bcc1) with Dark Accessible Text */}
          <div className="bg-highlight text-gray-900 rounded-3xl p-7 space-y-4 border border-gray-900/15">
            <div className="flex items-center gap-2 text-gray-900 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              Common Raw Feeding Questions
            </div>
            <div className="space-y-3 text-xs">
              <div className="border-b border-gray-900/15 pb-3">
                <h4 className="font-bold text-sm text-gray-900">
                  What if I&apos;m not home when my frozen box arrives?
                </h4>
                <p className="text-gray-900 mt-1 leading-relaxed font-medium">
                  Our sheep&apos;s wool insulated liners keep meals rock-solid frozen for up to 48 hours. Nominate a safe porch, garage, or neighbour at checkout.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  How should I transition my dog from kibble to raw?
                </h4>
                <p className="text-gray-900 mt-1 leading-relaxed font-medium">
                  Most dogs thrive with a straight switch after a 12-hour overnight fast, starting with a single gentle protein like Turkey &amp; Green Tripe for the first 5 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
