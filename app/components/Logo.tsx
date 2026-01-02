import React from "react";
import Image from "next/image";

const logos = Array.from(
  { length: 25 },
  (_, i) => `/assests/logo/logo${i + 1}.png`
);

export const Logo = () => {
  return (
    <div className="relative z-10 flex justify-center py-5">
      <div
        className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 
                   w-full max-w-5xl border border-white/20 overflow-hidden"
        style={{
          boxShadow:
            "0 -8px 20px -8px #00000040, 0 20px 30px -10px rgba(0,0,0,0.15)",
        }}
      >
        <h2 className="text-center text-lg md:text-xl font-semibold mb-10 md:mb-12 text-gray-900">
          Trusted by 250+ Global Partners & Delivery Startups Globally Across UK,
          USA & India.
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-10 md:gap-20 items-center animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="relative min-w-[120px] md:min-w-[140px] 
                           h-[60px] md:h-[70px]
                           flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${i + 1}`}
                  width={200}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
