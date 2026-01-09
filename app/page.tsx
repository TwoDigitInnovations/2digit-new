"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Add this import
import { Logo } from "./components/Logo";
import { Crausel1 } from "./components/Crausel1";
import { Crausel2 } from "./components/Crausel2";
import { Ready } from "./components/Ready";

export default function Home() {

  // Mouse-following purple dot


  // Refs for SVG paths
  const upperPathRef = useRef<SVGPathElement>(null);
  const lowerPathRef = useRef<SVGPathElement>(null);

  // Animate moving dots on BOTH curves
  useEffect(() => {
    const animateDot = (
      path: SVGPathElement | null,
      dot: HTMLElement | null,
      offset: number = 0
    ) => {
      if (!path || !dot) return;

      const pathLength = path.getTotalLength();

      let progress = offset;
      const speed = 0.008;

      const animate = () => {
        progress += speed;
        if (progress > 1) progress -= 1;

        const point = path.getPointAtLength(progress * pathLength);
        dot.style.cx = point.x.toString();
        dot.style.cy = point.y.toString();

        requestAnimationFrame(animate);
      };

      animate();
    };

    const dot1 = document.getElementById("dot1");
    const dot2 = document.getElementById("dot2");
    const dot1Lower = document.getElementById("dot1-lower");
    const dot2Lower = document.getElementById("dot2-lower");

    animateDot(upperPathRef.current, dot1 as HTMLElement | null, 0);
    animateDot(upperPathRef.current, dot2 as HTMLElement | null, 0.5);
    animateDot(lowerPathRef.current, dot1Lower as HTMLElement | null, 0);
    animateDot(lowerPathRef.current, dot2Lower as HTMLElement | null, 0.5);
  }, []);

  // title
  const [active, setActive] = useState<number | null>(null);
  const features = [
    {
      id: 1,
      title: "Web Development",
      link: "/services/web-development",
    },
    {
      id: 2,
      title: "Mobile App Development",
      link: "/services/mobile-app-development",
    },
    {
      id: 3,
      title: "UI/UX Design",
      link: "/services/ui/ux-design",
    },
    {
      id: 4,
      title: "Digital Marketing",
      link: "/services/digital-marketing",
    },
    {
      id: 5,
      title: "Custom Solutions",
      link: "/services/custom-software-development",
    },
  ];


  function Pill({ text, style }: { text: string; style: string }) {
    return (
      <div
        className={`absolute ${style}
        bg-white border border-[#B7A1FF]
        text-gray-800 px-5 py-2 rounded-full
        shadow-sm text-sm font-medium`}
      >
        {text}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
 

      <div
        className="absolute rounded-full blur-3xl z-0"
        style={{
          width: "520px",
          height: "520px",
          top: "180px",
          right: "-180px",
          background:
            "radial-gradient(ellipse at center, rgba(107,90,255,0.6) 0%, rgba(107,90,255,0) 70%)",
          opacity: 0.55,
        }}
      ></div>

      {/* UPPER CURVE WITH ANIMATED DOTS */}
      <div className="absolute inset-x-0 top-[65px] w-full h-[30vh] pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 272"
          preserveAspectRatio="none"
          className="w-full h-full opacity-30"
        >
          <defs>
            <linearGradient id="arcGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(107, 90, 255, 0.32)" />
              <stop offset="100%" stopColor="rgba(183, 161, 255, 0.12)" />
            </linearGradient>
          </defs>

          <path
            ref={upperPathRef}
            id="hero-curve-upper"
            d="M0 200 C450 -60 990 -60 1440 200"
            stroke="url(#arcGrad1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          <circle cx="0" cy="200" r="12" fill="#EBE5FD" opacity="0.8" />
          <circle cx="1440" cy="200" r="12" fill="#EBE5FD" opacity="0.8" />

          <circle id="dot1" r="12" fill="#EBE5FD" opacity="0.8" />
          <circle id="dot2" r="12" fill="#EBE5FD" opacity="0.8" />
        </svg>
      </div>

      {/* HERO SECTION WITH LOWER CURVE + ANIMATED DOTS */}
      <section className="text-center mt-4 md:mt-20 px-4 md:px-6 relative z-10">
        <div className="absolute inset-x-0 top-[60px] w-full h-[38vh] pointer-events-none opacity-30">
          <svg
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="arcGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(107, 90, 255, 0.32)" />
                <stop offset="100%" stopColor="rgba(183, 161, 255, 0.12)" />
              </linearGradient>
            </defs>

            <path
              ref={lowerPathRef}
              id="hero-curve-lower"
              d="M0 220 C450 -60 990 -60 1440 220"
              stroke="url(#arcGrad2)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            <circle cx="0" cy="220" r="12" fill="#EBE5FD" opacity="0.8" />
            <circle cx="1440" cy="220" r="12" fill="#EBE5FD" opacity="0.8" />

            <circle id="dot1-lower" r="12" fill="#EBE5FD" opacity="0.8" />
            <circle id="dot2-lower" r="12" fill="#EBE5FD" opacity="0.8" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl text-yellow-500 font-bold leading-tight relative z-20">
          Custom {"  "}
          <span className="text-black">
            Software Development Company | Transform{" "}
          </span>
          <br className="hidden md:block" />
          <span className="text-yellow-500">Your Digital Presence</span>
        </h1>

        <p className="text-gray-600 mt-6 text-base md:text-lg max-w-3xl mx-auto relative z-20">
          We build powerful digital solutions for businesses across the UK, USA,
          and India. From custom web development to mobile apps and digital
          marketing, we turn your vision into reality with cutting-edge
          technology. Whether you're a startup or an established enterprise, we
          deliver results that drive your business forward.
        </p>

        <div className="flex justify-center mt-8">
          <Link href="/contact">
            <button className="relative bg-[#6B5AFF] text-white px-8 py-4 rounded-full shadow-md hover:bg-purple-700 transition text-lg z-10 flex items-center gap-2">
              Get a free consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {/* LOGO CAROUSEL CARD */}

      {/* Carousel + Ellipse + Title */}
      <div className="relative mt-24 px-6">
        {/* Background Ellipse */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "680px",
            height: "680px",
            bottom: "-120px",
            left: "-160px",
            background:
              "radial-gradient(ellipse at center, rgba(107,90,255,0.55) 0%, rgba(107,90,255,0) 75%)",
            opacity: 0.55,
            zIndex: 0,
          }}
        ></div>

        {/* LOGO */}
        <Logo />

        {/* Title Section */}
        <section className="py-8 md:py-16">
          <div className="relative z-10 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12">
              Complete Digital Solutions for Your Business Growth
            </h2>

            {/* Mobile: Horizontal scroll | Desktop: Wrap & Center */}
            <div className="overflow-x-auto md:overflow-visible -mx-4 md:mx-0 scrollbar-hide">
              <div
                className="
          flex
          flex-nowrap
          md:flex-wrap
          md:justify-center
          items-center
          gap-3 md:gap-6
          px-4
          py-2
          min-w-max
          md:min-w-0
        "
              >
                {features.map((feature) => {
                  const isActive = active === feature.id;

                  return (
                    <Link key={feature.id} href={feature.link}>
                      <button
                        onClick={() => setActive(feature.id)}
                        onMouseEnter={() =>
                          window.innerWidth >= 768 && setActive(feature.id)
                        }
                        onMouseLeave={() =>
                          window.innerWidth >= 768 && setActive(null)
                        }
                        className={`
          flex-shrink-0
          whitespace-nowrap
          px-6 py-3
          rounded-full
          font-medium
          text-base
          transition-all duration-300 ease-out
          shadow-sm
          active:scale-95
          focus:outline-none focus:ring-4 focus:ring-purple-300
          md:hover:scale-105
          ${isActive
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                          }
        `}
                        aria-pressed={isActive}
                      >
                        {feature.title}
                      </button>
                    </Link>
                  );
                })}

              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Online Ordering */}
      <section className="font-montserrat py-16">
        {/* ===== SECTION HEADING ===== */}
        <div className="text-center px-4 max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Website Development Company – Unlocking the Power of the Web
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Create powerful, fast-loading websites that convert visitors into
            customers. We build custom websites using the latest technologies
            like
            <span className="font-medium text-gray-800">
              {" "}
              React, Next.js, and WordPress
            </span>
            . Whether you need an e-commerce store, business website, or web
            application, we deliver solutions that work perfectly on all devices
            and help your business grow online.
          </p>
        </div>

        {/* ===== MOBILE VIEW ===== */}
        <div className="md:hidden px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Custom Digital Solutions",
              "Smart Business Automation",
              "Customer-Centered Design",
              "Secure & Reliable Systems",
              "Scalable Growth Support",
            ].map((item) => (
              <span
                key={item}
                className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Dashboard Card */}
          <div className="flex justify-center">
            <div className="bg-[#B7A1FF] rounded-2xl p-4 shadow-lg w-full max-w-sm">
              <div className="bg-white rounded-xl p-4">
                <h3 className="font-semibold mb-3 text-gray-900">Dashboard</h3>
                <div className="h-32 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-medium">
                  Dashboard Preview
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== DESKTOP VIEW ===== */}
        <div className="hidden md:flex relative max-w-6xl mx-auto justify-center">
          {/* SVG Arch */}
          <svg
            viewBox="0 0 1200 400"
            className="absolute top-0 w-full h-[400px]"
            fill="none"
          >
            <path
              d="M100 320 C 300 60, 900 60, 1100 320"
              stroke="#D6CCFF"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Pills */}
          <div className="absolute top-0 left-0 w-full h-[400px] pointer-events-none">
            <Pill
              text="Custom Digital Solutions"
              style="left-[0%] top-[280px]"
            />
            <Pill
              text="Smart Business Automation"
              style="left-[18%] top-[160px]"
            />
            <Pill
              text="Customer-Centered Design"
              style="left-[42%] top-[105px]"
            />
            <Pill
              text="Secure & Reliable Systems"
              style="left-[66%] top-[160px]"
            />
            <Pill
              text="Scalable Growth Support"
              style="left-[84%] top-[280px]"
            />
          </div>

          {/* Dashboard */}
          <div className="relative z-10 mt-64 bg-[#B7A1FF] rounded-3xl p-6 shadow-xl">
            <div className="bg-white rounded-2xl p-6 w-[520px]">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Dashboard
              </h3>

              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src="/assests/logo/dashboard.png"
                  alt="Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <Crausel1 />

      {/* Streamlining Title */}
      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Award-Winning Software Development Solutions Built for Growing
          Businesses
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          We combine technical expertise with creative thinking to deliver
          solutions that actually work for your business. Our team has
          successfully completed over 500 projects across various industries,
          from small startups to large enterprises. We focus on understanding
          your specific needs and building custom solutions that solve real
          problems and drive measurable results.
        </p>

        {/* Key Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-2">
            <span className="text-green-500 font-bold text-xl">✓</span>
            <p className="text-gray-700">
              Digital Marketing - Grow your online presence with SEO, social
              media, and paid advertising
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 font-bold text-xl">✓</span>
            <p className="text-gray-700">
              Web Development - Build fast, secure, and scalable websites that
              convert visitors
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 font-bold text-xl">✓</span>
            <p className="text-gray-700">
              UI & UX Design - Create beautiful, user-friendly interfaces that
              users love
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 font-bold text-xl">✓</span>
            <p className="text-gray-700">
              App Development - Develop powerful mobile applications for iOS and
              Android
            </p>
          </div>
        </div>
      </div>

      {/* Our Success */}
      <Crausel2 />


      <Ready />

    </main>
  );
}
