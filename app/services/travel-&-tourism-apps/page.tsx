"use client";

import { useEffect, useRef, useState } from "react";

import { useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Add this import
import {
  HandCoins,
  MonitorCog,
  Rocket,
  Smartphone,
  QrCode,
} from "lucide-react";

import { Footer } from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Logo } from "@/app/components/Logo";
import { Crausel1 } from "@/app/components/Crausel1";
import { Crausel2 } from "@/app/components/Crausel2";
import { Ready } from "@/app/components/Ready";
import { Faq } from "@/app/components/Faq";

export default function Home() {
  // Logo carousel auto-scroll

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
  const [active, setActive] = useState<string | null>(null);
  const features = [
    { title: "Booking & Reservations", href: "/services/ios" },
    { title: "Itinerary Planning & Management", href: "/services/android" },
    {
      title: "Destination Guides & Recommendations",
      href: "/services/cross-platform",
    },
    { title: "Navigation & Maps Integration", href: "/services/pwa" },
  ];

  // const pricingMenu = ["Plans", "Compare Plans", "Enterprise"];

  /* ---------------- SMALL COMPONENTS ---------------- */

  const items = [
    {
      title: "Cafés",
      desc: "Create a welcoming atmosphere, serve coffee and light bites, and build a community around your business.",
      img: "/images/cafe.jpg",
    },
    {
      title: "Cloud Kitchens",
      desc: "Manage multiple virtual brands and fulfill online orders efficiently.",
      img: "/images/cloud-kitchen.jpg",
    },
    {
      title: "Tiffin",
      desc: "Set up weekly or monthly meal plans, automate recurring orders, and deliver pre-planned meals.",
      img: "/images/tiffin.jpg",
    },
    {
      title: "Super Market",
      desc: "Offer a wide range of products with doorstep delivery and easy order management.",
      img: "/images/supermarket.jpg",
    },
  ];
  // Screen
  const screens = [
    { src: "/screens/home.png", alt: "Home Screen" },
    { src: "/screens/order.png", alt: "Order Screen" },
    { src: "/screens/profile.png", alt: "Profile Screen" },
    { src: "/screens/wallet.png", alt: "Wallet Screen" },
  ];

  // FAQ

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />
      {/* NAVBAR WITH MOBILE MENU */}
      {/* Glows behind navbar */}

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
          Travel & Tourism App{"  "}
          <span className="text-black">
         Development Services | Create{" "}
          </span>
          <br className="hidden md:block" />
          <span className="text-yellow-500"> Unforgettable Journey Experiences
</span>
        </h1>

        <p className="text-gray-600 mt-6 text-base md:text-lg max-w-3xl mx-auto relative z-20">
Transform travel planning and experiences with innovative apps that inspire exploration and simplify journeys. At 2Digit Innovations, we specialize in developing comprehensive travel platforms with booking systems, itinerary planning, destination guides, and real-time navigation. Our portfolio includes successful apps like Traveler Tips and Pucón Traveler. From startups disrupting travel to tourism businesses enhancing visitor experiences, we deliver travel solutions that drive real business results across the UK, USA, and India.
        </p>

        <div className="flex justify-center mt-8">
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

        {/* Carousel Card */}
        <Logo />

        {/* Title Section */}
        <section className="py-8 md:py-16">
          <div className="relative z-10 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12">
Complete Travel & Tourism Solutions for Your Business Growth
            </h2>

            {/* Mobile: Horizontal scroll | Desktop: Wrap & Center */}
            <div className="overflow-x-auto md:overflow-visible -mx-4 md:mx-0 scrollbar-hide">
              <div
                className="
    flex flex-nowrap
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
                  const isActive = active === feature.title;

                  return (
                    <Link
                      key={feature.title}
                      href={feature.href}
                      onClick={() => setActive(feature.title)}
                      onMouseEnter={() =>
                        window.innerWidth >= 768 && setActive(feature.title)
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
            ${
              isActive
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }
          `}
                    >
                      {feature.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Dashboard Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#F4F0FF] to-white">
        {/* Purple Ellipse Background */}
        <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/40 rounded-full blur-[120px]" />
        <div className="absolute top-20 left-[-200px] w-[400px] h-[400px] bg-purple-300/30 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
Booking & Reservations
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">
Seamless Travel Booking at Your Fingertips: Enable effortless travel bookings with comprehensive reservation systems for flights, hotels, activities, and transportation. We build integrated booking platforms with real-time availability, secure payments, booking management, and instant confirmations, making it easy for travelers to plan and book their entire journey.
            </p>

            <div className="space-y-4">
              {[
                "Multi-service booking integration",
                "Real-time availability checking",
                "Secure payment processing",
                "Booking confirmation management",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-purple-300 rounded-full px-6 py-3 text-gray-800 bg-white/70 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard Image */}
          <div className="relative">
            <div className="relative rounded-3xl bg-[#B7A9FF] p-4 shadow-xl">
              <Image
                src="/images/dashboard.png"
                alt="Dashboard Preview"
                width={900}
                height={600}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl bg-[#B7A9FF] p-4 shadow-xl order-2 lg:order-1">
            <Image
              src="/images/dashboard.png"
              alt="Mobile App Dashboard"
              width={900}
              height={600}
              className="rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Itinerary Planning & Management
</h2>

            <p className="text-gray-600 mb-8 max-w-xl">
Smart Trip Planning That Organizes Every Detail: Empower travelers with intelligent itinerary planning tools that organize flights, accommodations, activities, and reservations in one place. Our systems include automatic itinerary generation, trip sharing, calendar synchronization, and offline access, helping travelers stay organized and make the most of every journey.
            </p>

            <div className="space-y-4">
              {[
                "Automatic itinerary creation",
                "Trip sharing features",
                "Calendar sync integration",
                "Offline itinerary access",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-purple-300 rounded-full px-6 py-3 text-gray-800 bg-white/70 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#F4F0FF] to-white">
        {/* Purple Ellipse Background */}
        <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/40 rounded-full blur-[120px]" />
        <div className="absolute top-20 left-[-200px] w-[400px] h-[400px] bg-purple-300/30 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Destination Guides & Recommendations</h2>

            <p className="text-gray-600 mb-8 max-w-xl">
Personalized Discovery for Authentic Experiences: Enhance travel experiences with comprehensive destination guides featuring attractions, restaurants, hidden gems, and local insights. We implement AI-powered recommendations, user reviews, photo galleries, and curated collections, helping travelers discover authentic experiences tailored to their interests and preferences.
            </p>

            <div className="space-y-4">
              {[
                "AI-powered recommendations",
                "User reviews & ratings",
                "Photo galleries",
                "Curated travel collections",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-purple-300 rounded-full px-6 py-3 text-gray-800 bg-white/70 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard Image */}
          <div className="relative">
            <div className="relative rounded-3xl bg-[#B7A9FF] p-4 shadow-xl">
              <Image
                src="/images/dashboard.png"
                alt="Dashboard Preview"
                width={900}
                height={600}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl bg-[#B7A9FF] p-4 shadow-xl order-2 lg:order-1">
            <Image
              src="/images/dashboard.png"
              alt="Mobile App Dashboard"
              width={900}
              height={600}
              className="rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
Navigation & Maps Integration
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">
Never Get Lost with Smart Navigation: Guide travelers confidently with integrated maps, GPS navigation, and location-based features. Our implementation includes offline maps, turn-by-turn directions, nearby attractions, and augmented reality navigation, ensuring travelers can explore destinations safely and discover points of interest effortlessly.
            </p>

            <div className="space-y-4">
              {[
                "Offline maps access",
                "Turn-by-turn navigation",
                "Nearby attractions discovery",
                "AR navigation features",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-purple-300 rounded-full px-6 py-3 text-gray-800 bg-white/70 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  Features Built Grow Business */}

      <section className="bg-[#fff] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0b1437] mb-14">
Our Travel & Tourism App Development Process
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-[#f7f7f2] border-[6px] border-[#6B5AFF] rounded-[32px] p-8 shadow-sm">
              <HandCoins size={34} className="text-[#0b1437] mb-6" />
              <h3 className="text-xl font-semibold text-[#4a4a4a] mb-4">
            Discovery & Travel Strategy 
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
We understand your target travelers, destinations, and service offerings to design travel platforms that inspire exploration and simplify booking.

              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#f7f7f2] border-[6px] border-[#6B5AFF] rounded-[32px] p-8 shadow-sm">
              <Smartphone size={34} className="text-[#0b1437] mb-6" />
              <h3 className="text-xl font-semibold text-[#4a4a4a] mb-4">
                Design & Development
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
Our designers create visually inspiring interfaces while developers build robust systems with booking integrations, itinerary management, destination content, and navigation features.

              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f7f7f2] border-[6px] border-[#6B5AFF] rounded-[32px] p-8 shadow-sm">
              <QrCode size={34} className="text-[#0b1437] mb-6" />
              <h3 className="text-xl font-semibold text-[#4a4a4a] mb-4">
             Testing & Launch
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
We conduct real-world testing with travelers, optimize booking flows and user journeys, then launch your platform on App Store and Google Play.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2Digit Innovations */}
      <section className="bg-[#fff]  px-4">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0b1437] mb-16">
Why Choose 2Digit Innovations for Travel & Tourism App Development?
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-[#6B5AFF] border-[6px] border-white rounded-[36px] p-10">
              <Rocket size={34} className="text-[#fff] mb-6" />
              <h3 className="text-xl font-semibold text-[#fff] mb-3">
Proven Travel Tech Expertise
              </h3>
              <p className="text-[#fff] leading-relaxed">
With successful projects like Traveler Tips and Pucón Traveler, plus 500+ completed projects and 450+ satisfied clients, we understand travel technology requirements deeply.

              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#6B5AFF] border-[6px] border-[#6B5AFF] rounded-[36px] p-10">
              <HandCoins size={34} className="text-[#fff] mb-6" />
              <h3 className="text-xl font-semibold text-[#fff] mb-3">
Inspiration-Driven Design 
              </h3>
              <p className="text-[#fff] leading-relaxed">
From stunning destination imagery to seamless booking flows, we create apps that inspire wanderlust and make travel planning enjoyable rather than overwhelming.

              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#6B5AFF] border-[6px] border-white rounded-[36px] p-10">
              <MonitorCog size={34} className="text-[#fff] mb-6" />
              <h3 className="text-xl font-semibold text-[#fff] mb-3">
Focus on Traveler Satisfaction 
              </h3>
              <p className="text-[#fff] leading-relaxed">
We build apps travelers rely on, every feature from itinerary planning to navigation is designed to enhance travel experiences and create loyal users.

              </p>
            </div>
          </div>
        </div>
      </section>

      <Crausel1 />

      {/* An Screen Shot View */}
      <section className="bg-gray-50 py-12 px-4 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            An Insight View Of Our Solution
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch an exclusive sneak peek of the homemade food selling app
            solution offering a user-centric design and easy navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="w-full max-w-[300px] md:max-w-[250px] shadow-lg rounded-xl overflow-hidden"
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={300}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Our Success */}
      <Crausel2 />

      <Ready />

      {/* FAQ */}

      <Faq />

      {/* Footer */}

      <Footer />
    </main>
  );
}
