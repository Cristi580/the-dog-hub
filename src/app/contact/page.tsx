import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us & Free Canine Nutritionist Consultations",
  description:
    "Get in touch with The Dog Hub's certified canine nutritionists for free raw dog food transition advice, allergy support, or delivery enquiries.",
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-forest-900 text-cream-50 py-16 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-300">
            Here For You &amp; Your Dog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-2">
            Speak With Our Raw Nutrition Specialists
          </h1>
          <p className="text-cream-200/85 text-base sm:text-lg mt-3 leading-relaxed">
            Whether you&apos;re switching your first puppy to raw or managing complex dietary sensitivities, our qualified Cotswolds team is ready to help.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Details Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-7 border border-cream-300 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-forest-950">
              Direct Contact Details
            </h2>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-forest-950">
                  Nutrition Helpline (Freephone)
                </h3>
                <p className="text-sm text-terracotta-700 font-bold mt-0.5">
                  0800 999 4280
                </p>
                <p className="text-xs text-charcoal-800/70">
                  Mon–Fri, 8:30am – 5:30pm GMT
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-forest-950">
                  Email Support
                </h3>
                <p className="text-sm text-forest-800 font-medium mt-0.5">
                  nutrition@thedoghub.co.uk
                </p>
                <p className="text-xs text-charcoal-800/70">
                  Orders: orders@thedoghub.co.uk
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-forest-950">
                  Butchery &amp; Farm Shop Click-and-Collect
                </h3>
                <p className="text-sm text-charcoal-800/80 mt-0.5">
                  Unit 4 Meadowbarn Farm, Cotswolds, GL7 5PQ
                </p>
                <p className="text-xs text-charcoal-800/70 mt-0.5">
                  Dogs on leads are always welcome for a free air-dried venison treat!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-forest-950">
                  Cold-Chain Dispatch Schedule
                </h3>
                <p className="text-xs text-charcoal-800/80 mt-0.5 leading-relaxed">
                  Orders placed Monday–Thursday before 2:00 PM are dispatched the same day via DPD Next-Day Timed Delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Quick FAQs */}
          <div className="bg-forest-900 text-cream-50 rounded-3xl p-7 space-y-4">
            <div className="flex items-center gap-2 text-terracotta-300 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              Common Raw Feeding Questions
            </div>
            <div className="space-y-3 text-xs">
              <div className="border-b border-forest-800 pb-3">
                <h4 className="font-bold text-sm text-white">
                  What if I&apos;m not home when my frozen box arrives?
                </h4>
                <p className="text-cream-200/80 mt-1 leading-relaxed">
                  Our sheep&apos;s wool insulated liners keep meals rock-solid frozen for up to 48 hours. Nominate a safe porch, garage, or neighbour at checkout.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">
                  How should I transition my dog from kibble to raw?
                </h4>
                <p className="text-cream-200/80 mt-1 leading-relaxed">
                  Most dogs thrive with a straight switch after a 12-hour overnight fast, starting with a single gentle protein like Turkey &amp; Green Tripe for the first 5 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
