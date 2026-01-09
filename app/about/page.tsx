"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

// import "./globals.css";
import { Section } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Logo carousel auto-scroll
  useEffect(() => {
    const carousel = document.getElementById("logo-carousel");
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollCarousel = () => {
      scrollAmount += 1;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      carousel.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scrollCarousel, 25);
    return () => clearInterval(interval);
  }, []);

  // Mouse-following purple dot
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const moveDot = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

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
  const [active, setActive] = useState("");

  const features = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Custom Solutions",
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
  const industries = [
    {
      title: "Technology Companies",
      description:
        "We help tech companies build scalable web applications, SaaS platforms, and enterprise solutions. From startups launching their MVP to established companies scaling their infrastructure, we deliver cutting-edge development services that drive innovation.",
    },
    {
      title: "E-commerce Businesses",
      description:
        "Launch and grow your online store with custom e-commerce solutions. We build fast, secure shopping experiences with payment integration, inventory management, and marketing tools that increase sales and customer satisfaction.",
    },
    {
      title: "Fintech & Financial Services",
      description:
        "Build secure, compliant financial applications with our expert development team. From payment gateways to banking apps and investment platforms, we understand the unique requirements of the financial industry.",
    },
    {
      title: "Healthcare & Medical Services",
      description:
        "Develop HIPAA-compliant healthcare applications that improve patient care. We create telemedicine platforms, patient portals, appointment systems, and medical record management solutions. ",
    },
    {
      title: "Education & E-learning",
      description:
        "Transform education with digital learning platforms. We build learning management systems, online course platforms, and educational apps that make learning accessible and engaging.",
    },
  ];

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Mouse-following purple dot */}
      <motion.div
        className="w-6 h-6 bg-purple-400 rounded-full fixed pointer-events-none z-50 shadow-lg"
        style={{ x: springX, y: springY }}
      />
      <div
        className="absolute rounded-full blur-3xl z-0"
        style={{
          width: "889px",
          height: "489px",
          top: "-1px",
          left: "164px",
          background:
            "radial-gradient(ellipse at center, rgba(107,90,255,0.6) 0%, rgba(107,90,255,0) 70%)",
          opacity: 0.45,
        }}
      ></div>

      <nav className="relative flex justify-between items-center px-6 md:px-16 py-4 z-50">
        <div className="flex items-center mr-6 md:mr-10">
          <Image
            src="/assests/2digit.png"
            alt="Company Logo"
            width={150}
            height={60}
            priority
            className="w-28 md:w-36 ml-16"
          />
        </div>

        {/* Desktop Menu - same as your original upper menu */}
        <div className="hidden md:flex gap-6 bg-white shadow-md rounded-full px-6 py-3">
          {["Home", "Features", "Pricing", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-black font-medium hover:text-purple-600 transition cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none z-50"
        >
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
          <div className="space-y-10 text-3xl font-medium">
            {["Home", "Features", "Pricing", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-900 hover:text-purple-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

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
      <section className="text-center mt-20 px-6 md:px-4 relative z-10">
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
      <div className="relative mt-32 px-6">
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
        <div className="relative z-10 flex justify-center">
          <div
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 w-full max-w-5xl border border-white/20"
            style={{
              boxShadow:
                "0 -8px 20px -8px #00000040, 0 20px 30px -10px rgba(0,0,0,0.15)",
            }}
          >
            <h2 className="text-center text-lg md:text-xl font-semibold mb-10 md:mb-12 text-gray-900">
              Trusted by 250+ Global Partners & Delivery Startups Globally
              Across UK, USA & India .Building Seamless Digital Experiences:
              Your Vision, Our Expertise
            </h2>

            <div
              id="logo-carousel"
              className="flex gap-16 md:gap-32 items-center overflow-x-auto whitespace-nowrap no-scrollbar"
            >
              {[...Array(16)].map((_, i) => (
                <span
                  key={i}
                  className="text-yellow-500 text-3xl md:text-4xl font-bold opacity-70 inline-block min-w-max"
                >
                  Logo
                </span>
              ))}
            </div>
          </div>
        </div>
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
              One Platform. Endless Possibilities.
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">
              Whether you run a single branded outlet or multiple store locations,
              our all-in-one ordering solution has you covered. Add and manage
              unlimited stores or restaurants — all under a single subscription.
              One Subscription. Unlimited Growth.
            </p>

            <div className="space-y-4">
              {[
                "Seamless Management for One or Many Locations",
                "Centralized Dashboard for Multiple Stores",
                "Cost-Effective & Scalable",
                "Reach More Customers, Effortlessly",
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
              Website & Mobile Apps – Your Brand, Everywhere
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">
              Deliver a seamless and personalized ordering experience through your
              white-label mobile app or branded website. Expand your reach by
              accepting orders directly from social platforms like Instagram,
              Facebook, Twitter, and more.
            </p>

            <div className="space-y-4">
              {[
                "Build a Strong Multi-Platform Presence",
                "Attract New Customers with Ease",
                "Keep Existing Customers Coming Back",
                "Expand Your Digital Reach",
                "Grow Your Brand Across Channels",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One Platform. Endless Possibilities.
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">
              Whether you run a single branded outlet or multiple store locations,
              our all-in-one ordering solution has you covered. Add and manage
              unlimited stores or restaurants — all under a single subscription.
              One Subscription. Unlimited Growth.
            </p>

            <div className="space-y-4">
              {[
                "Seamless Management for One or Many Locations",
                "Centralized Dashboard for Multiple Stores",
                "Cost-Effective & Scalable",
                "Reach More Customers, Effortlessly",
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
              Website & Mobile Apps – Your Brand, Everywhere
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">
              Deliver a seamless and personalized ordering experience through your
              white-label mobile app or branded website. Expand your reach by
              accepting orders directly from social platforms like Instagram,
              Facebook, Twitter, and more.
            </p>

            <div className="space-y-4">
              {[
                "Build a Strong Multi-Platform Presence",
                "Attract New Customers with Ease",
                "Keep Existing Customers Coming Back",
                "Expand Your Digital Reach",
                "Grow Your Brand Across Channels",
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


      {/* Our Success */}
      <section className="relative py-20 md:py-32 bg-white">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12 px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            What Our Clients Say About Our Development Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Discover the experiences of our clients that inspire
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden px-4 md:px-6">
          <div className="flex animate-marquee gap-4 md:gap-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 sm:w-80 md:w-[400px] bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6"
              >
                {/* Testimonial */}
                <p className="mb-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  <span className="text-xl md:text-2xl font-bold">“</span>I had
                  the pleasure of working with 2 Digit Innovations for a
                  React-Native development project, and I must say that his
                  performance was exceptional. His skills in React-Native
                  development were outstanding, and he demonstrated a strong
                  understanding of the principles and best practices of mobile
                  application development.{" "}
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="font-bold text-sm md:text-lg">Jayen Ashar</p>
                    <div className="flex gap-3 md:gap-4 mt-1">
                      <div className="text-center">
                        <p className="font-bold text-sm md:text-base">22</p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Number Metrics
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-sm md:text-base">22</p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Number Metrics
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/assests/client.jpg"
                    alt="Client"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate cards for seamless loop */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`dup-${i}`}
                className="flex-shrink-0 w-72 sm:w-80 md:w-[400px] bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6"
              >
                <p className="mb-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  <span className="text-xl md:text-2xl font-bold">“</span>
                  The testimonial will go here. The testimonial will go here.
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="font-bold text-sm md:text-lg">Client Name</p>
                    <div className="flex gap-3 md:gap-4 mt-1">
                      <div className="text-center">
                        <p className="font-bold text-sm md:text-base">22</p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Number Metrics
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-sm md:text-base">22</p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Number Metrics
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/assests/client.jpg"
                    alt="Client"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 shadow-lg mb-16 overflow-hidden max-w-7xl mx-auto">
        {/* Inner Purple Glow inside card */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#6B5AFF]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl"></div>
        </div>

        {/* Text Content */}
        <div className="relative flex-1 z-10">
          {/* Ellipse behind "Online" text */}
          <div
            className="pointer-events-none absolute z-0"
            style={{
              width: "373px",
              height: "148px",
              top: "-93px",
              left: "590px",
              backgroundColor: "rgba(183, 161, 255, 0.45)",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          ></div>

          <h2 className="relative text-3xl md:text-4xl font-bold mb-4 z-10">
            Ready to Work Together <br /> on Your Next Project?
          </h2>

          <p className="text-gray-700 text-lg mb-6 z-10">
            Have a project in mind? Let's bring it to life. Whether you need a
            new website, mobile app, or complete digital transformation, we're
            here to help. Get a free consultation and project quote within 24
            hours.
          </p>

          {/* Ellipse behind the button */}
          <div
            className="pointer-events-none absolute z-0"
            style={{
              width: "148px",
              height: "148px",
              top: "246px",
              left: "394px",
              backgroundColor: "rgba(183, 161, 255, 0.45)",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          ></div>

          {/* Button on top */}
          <button className="relative bg-[#6B5AFF] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#5948CC] transition z-10">
            Start Your Project Today
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

        {/* Image / Logo */}
        <div className="relative z-10 flex-shrink-0 w-72 h-72 flex items-center justify-center">
          <div className="w-72 h-72 bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="/assests/2digit.png"
              alt="Logo"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      </section>

    

      <footer className="relative bg-[#6B5AFF] text-white py-16 overflow-hidden rounded-t-3xl">
        {/* Decorative Ellipse */}
        {/* <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-300 rounded-full opacity-40"></div> */}

        {/* Footer Content */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              2digitinnovations
            </h3>
            <p className="text-purple-200">
              Helping businesses launch their online ordering & delivery systems
              quickly and efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-purple-200">
              <li>
                <a
                  href="#features"
                  className="hover:text-yellow-300 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-yellow-300 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-yellow-300 transition"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>
            <p>
              Email:{" "}
              <span className="text-yellow-300">
                support@2digitinnovations.com
              </span>
            </p>
            <p className="mt-2">
              Phone: <span className="text-yellow-300">+1 (555) 123-4567</span>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-yellow-300 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>


      </footer>
    </main>
  );
}
