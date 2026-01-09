"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const plans = [
    {
      name: "Basic",
      desc: "Ideal for single-location restaurants ready to go online",
      price: "₹1,999",
      period: "/ Month",
      button: "Get Started",
      features: [
        "Unlimited orders",
        "QR code ordering",
        "Custom domain",
        "Promotion codes & coupons",
        "Advanced reports",
        "Online Payments",
      ],
      popular: false,
    },
    {
      name: "Pro",
      desc: "For restaurants scaling to multiple locations with delivery",
      price: "₹3,999",
      period: "/ Month",
      button: "Get Started",
      features: [
        "Everything in Basic, plus:",
        "Up to 3 outlets",
        "Delivery management system",
        "Driver app & tracking",
        "Loyalty & rewards program",
        "Table Booking",
      ],
      popular: true, // ← Ab Pro Most Popular hai
    },
    {
      name: "Premium",
      desc: "Enterprise solution for restaurant chains and franchises",
      price: "₹8,999",
      period: "/ Month",
      button: "Get Started",
      features: [
        "Everything in Pro, plus:",
        "Up to 5 outlets",
        "Branded Mobile Apps",
        "POS integration",
        "Advanced analytics",
        "Priority Support",
      ],
      popular: false,
    },
  ];

  const custom = [
    { title: "0% Commission", desc: "Keep 100% of your order revenue. No hidden fees, no commission – just a simple monthly subscription.", icon: "🚀" },
    { title: "Live in 24 Hours", desc: "Get your online ordering system up and running in just one day. Start taking orders immediately.", icon: "⚡" },
    { title: "Your Brand, Your Way", desc: "Fully customizable website that matches your restaurant's brand and style perfectly.", icon: "🎨" },
    { title: "Dedicated Support", desc: "Get help whenever you need it. Our team is always ready to assist you with setup and ongoing support.", icon: "🎧" },
  ];

  const table = [
    { feature: "Online Ordering Website", basic: "✓", pro: "✓", premium: "✓" },
    { feature: "Monthly Orders", basic: "Unlimited", pro: "Unlimited", premium: "Unlimited" },
    { feature: "Number of Outlets", basic: "1", pro: "Up to 3", premium: "Up to 5" },
    { feature: "Admin Dashboard", basic: "✓", pro: "✓", premium: "✓" },
    { feature: "Menu Management", basic: "✓", pro: "✓", premium: "✓" },
    { feature: "QR Code Ordering", basic: "✓", pro: "✓", premium: "✓" },
    { feature: "Custom Domain", basic: "✓", pro: "✓", premium: "✓" },
    { feature: "Promotion Codes & Coupons", basic: "✓", pro: "✓", premium: "✓" },
    { feature: "Online Payments", basic: "✓", pro: "✓", premium: "✓" },
    { feature: "Delivery Management System", basic: "✕", pro: "✓", premium: "✓" },
  ];

  const stats = [
    { value: "500+", label: "Restaurants", icon: "🍽️" },
    { value: "50K+", label: "Monthly Orders", icon: "📦" },
    { value: "15+", label: "Countries", icon: "🌍" },
    { value: "4.8/5", label: "Customer Rating", icon: "⭐" },
  ];

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
     
      <section className="bg-gradient-to-b from-white to-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg"
          >
            Stop paying 15–30% commission to third-party apps. Own your orders,
            keep 100% of your profits, and grow your restaurant with our
            commission-free platform.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ 
                  y: -12, 
                  transition: { duration: 0.3 }
                }}
                className={`relative group ${plan.popular ? "md:scale-110 md:z-10" : ""}`}
              >
                {/* Purple Glow Background on Hover/Touch */}
                <div className="absolute inset-0 bg-[#6B5AFF]/20 rounded-3xl blur-3xl scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100 -z-10" />

                <div
                  className={`relative bg-white rounded-3xl p-10 shadow-xl border-2 transition-all duration-500 hover:shadow-2xl ${
                    plan.popular 
                      ? "border-[#6B5AFF] ring-8 ring-purple-100" 
                      : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#6B5AFF] text-white text-sm font-bold px-8 py-3 rounded-full shadow-lg animate-pulse">
                      🔥 Most Popular
                    </div>
                  )}

                  <h3 className="text-3xl font-bold mb-3 text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mb-8 text-base">{plan.desc}</p>

                  <div className="mb-10">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-3 text-xl">{plan.period}</span>
                  </div>

                  <Link href="/contact">
                    <button
                      className={`w-full py-5 rounded-full font-bold text-lg transition-all duration-300 mb-10 shadow-md hover:shadow-xl ${
                        plan.popular
                          ? "bg-[#6B5AFF] text-white hover:bg-[#5948CC]"
                          : "bg-white border-2 border-[#6B5AFF] text-[#6B5AFF] hover:bg-[#6B5AFF] hover:text-white"
                      }`}
                    >
                      {plan.button} →
                    </button>
                  </Link>

                  <ul className="space-y-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-700">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 text-[#6B5AFF] flex items-center justify-center text-sm font-bold">
                          ✓
                        </span>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Baaki sections same as before – Custom, Table, Trusted, CTA */}
      {/* (Custom Solutions, Comparison Table, Trusted, CTA – same as previous code) */}

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Need Custom Solutions?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            We've got you covered with tailored enterprise plans
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {custom.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See What's Included in Each Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Every feature you need to run and grow your restaurant's online ordering
            </p>

            <div className="overflow-x-auto rounded-2xl shadow-lg">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-8 py-5 font-bold text-gray-800">Features</th>
                    <th className="px-8 py-5 font-bold text-gray-800">Basic</th>
                    <th className="px-8 py-5 font-bold text-gray-800">Pro</th>
                    <th className="px-8 py-5 font-bold text-gray-800">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((row, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-8 py-6 font-medium text-gray-800">{row.feature}</td>
                      <td className="px-8 py-6 text-center">
                        {row.basic === "✓" ? <span className="text-2xl text-green-600 font-bold">✓</span> :
                         row.basic === "✕" ? <span className="text-2xl text-red-500 font-bold">✕</span> :
                         <span className="font-medium text-gray-700">{row.basic}</span>}
                      </td>
                      <td className="px-8 py-6 text-center">
                        {row.pro === "✓" ? <span className="text-2xl text-green-600 font-bold">✓</span> :
                         row.pro === "✕" ? <span className="text-2xl text-red-500 font-bold">✕</span> :
                         <span className="font-medium text-gray-700">{row.pro}</span>}
                      </td>
                      <td className="px-8 py-6 text-center">
                        {row.premium === "✓" ? <span className="text-2xl text-green-600 font-bold">✓</span> :
                         row.premium === "✕" ? <span className="text-2xl text-red-500 font-bold">✕</span> :
                         <span className="font-medium text-gray-700">{row.premium}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#6B5AFF] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Trusted by restaurants worldwide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-5xl font-bold text-white mb-2">{item.value}</h3>
                <p className="text-white/80 text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-[#6B5AFF]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Work Together <br /> on Your Next Project?
              </h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl">
                Have a project in mind? Let's bring it to life. Whether you need a new website,
                mobile app, or complete digital transformation, we're here to help.
                Get a free consultation and project quote within 24 hours.
              </p>

              <Link href="/contact">
                <button className="bg-[#6B5AFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5948CC] transition shadow-lg inline-flex items-center gap-3 hover:scale-105">
                  Start Your Project Today
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </button>
              </Link>
            </div>

            <div className="relative z-10">
              <div className="w-80 h-80 bg-white rounded-full shadow-2xl p-8 flex items-center justify-center">
                <img src="/assests/2digit.png" alt="2Digit Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}