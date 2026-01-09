"use client";

import { useState } from "react";

export default function Home() {

  const faqs = [
    {
      question: "What is the White-label Food Delivery App Solution?",
      answer:
        "A pre-developed app with all the essential modules to start running your online delivery business is a white-label online ordering platform. It can be customized with business branding like logo, brand colors, and font.",
    },
    {
      question: "Is SaaS-Based Food Delivery App Solution Customizable?",
      answer: "Yes, the SaaS solution can be customized to match your branding and requirements.",
    },
    {
      question: "What Features Does Your SaaS Food Delivery App Offer?",
      answer: "The app includes order management, payment integration, real-time tracking, and more.",
    },
    {
      question: "How Long Does Launching a Food Delivery App Using Your SaaS Solution Take?",
      answer: "It usually takes a few days to set up and launch the app, depending on customization.",
    },
    {
      question: "Do You Provide Technical Support and Maintenance for Your SaaS App?",
      answer: "Yes, we provide ongoing support and maintenance for all our clients.",
    },
    {
      question: "Can we Integrate Our Existing Payment Gateway and POS Systems?",
      answer: "Yes, our platform supports integration with existing payment gateways and POS systems.",
    },
    {
      question: "Is the App Compatible with both iOS and Android Platforms?",
      answer: "Yes, the app is fully compatible with both iOS and Android devices.",
    },
    {
      question: "How Secure is the Customer and Payment Data on Your Platform?",
      answer: "We use industry-standard encryption and security protocols to protect all data.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20">
          FAQ
        </h1>

        <div className="max-w-4xl mx-auto p-8">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center font-semibold text-xl focus:outline-none"
              >
                {faq.question}
                <span className="text-2xl font-bold">{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
