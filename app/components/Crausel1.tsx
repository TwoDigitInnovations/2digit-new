import React from "react";

const industries = [
  {
    title: "Technology Companies",
    image: "/assests/technology.png",
    description:
      "We help tech companies build scalable web applications, SaaS platforms, and enterprise solutions.",
  },
  {
    title: "E-commerce Businesses",
    image: "/assests/e-commerce.png",
    description:
      "Launch and grow your online store with custom e-commerce solutions.",
  },
  {
    title: "Fintech & Financial Services",
    image: "/assests/finetech.png",
    description:
      "Build secure, compliant financial applications with our expert team.",
  },
  {
    title: "Healthcare & Medical Services",
    image: "/assests/health.png",
    description:
      "Develop HIPAA-compliant healthcare applications that improve patient care.",
  },
  {
    title: "Education & E-learning",
    image: "/assests/e-learning.png",
    description:
      "Transform education with digital learning platforms and LMS systems.",
  },
];

export const Crausel1 = () => {
  return (
    <div className="py-20">
      <div className="overflow-hidden px-4 md:px-6">
        <div className="flex gap-4 md:gap-6 animate-marquee">
          {[...industries, ...industries].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 md:w-80 rounded-3xl bg-[#CFCFCF] overflow-hidden shadow-md"
            >
              {/* Image (FIXED SIZE) */}
              <div className="h-40 md:h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
