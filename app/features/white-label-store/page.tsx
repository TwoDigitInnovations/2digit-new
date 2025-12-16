"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Add this import

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
  const [activeFeatureTab, setActiveFeatureTab] = useState("Ordering Software");
  const [activeSolutionsTab, setActiveSolutionsTab] = useState("industry");

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

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("industry");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const pricingMenu = ["Plans", "Compare Plans", "Enterprise"];

  /* ---------------- SMALL COMPONENTS ---------------- */

  function NavItem({ label, menu, activeMenu, setActiveMenu, simple }: any) {
    return (
      <div
        className="relative"
        // onMouseEnter={() => setActiveMenu(label)}
        // onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center gap-1 font-medium hover:text-purple-600 transition">
          {label} <ChevronDown size={16} />
        </button>

        <AnimatePresence>
          {activeMenu === label && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-12 left-1/2 -translate-x-1/2
                ${simple ? "w-44" : "w-[520px]"}
                bg-white rounded-2xl shadow-xl p-4`}
            >
              {simple ? (
                menu.map((item: string) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition"
                  >
                    {item}
                  </a>
                ))
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {menu.map((item: any) => (
                    <a
                      key={item.title}
                      href="#"
                      className="flex gap-4 p-4 rounded-xl hover:bg-purple-50 transition"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  function Tab({ label, active, onHover }: any) {
    return (
      <div
        onMouseEnter={onHover}
        className={`flex justify-between items-center px-5 py-4 rounded-xl border cursor-pointer transition
          ${
            active
              ? "border-purple-500 bg-purple-50 text-purple-700"
              : "border-gray-200 hover:border-purple-500 hover:bg-purple-50"
          }`}
      >
        {label}
        <span>›</span>
      </div>
    );
  }

  /* ---------------- DATA ---------------- */

  const pricingMenu = ["Plans", "Compare Plans", "Enterprise"];

  const industryOptions = [
    { title: "Food Delivery", icon: "🍔" },
    { title: "Grocery Delivery", icon: "🍎" },
    { title: "Milk Delivery", icon: "🥛" },
    { title: "Meat Delivery", icon: "🍖" },
    { title: "Pizza Delivery", icon: "🍕" },
    { title: "Tiffin Delivery", icon: "🍱" },
    { title: "Courier Delivery", icon: "📦" },
    { title: "Liquor Delivery", icon: "🍾" },
    { title: "Pharmacy Delivery", icon: "💊" },
    { title: "Flower Delivery", icon: "🌸" },
  ];

  const businessOptions = [
    { title: "Restaurants", icon: "🍽️" },
    { title: "Dairy Business", icon: "🥛" },
    { title: "Super Market", icon: "🏬" },
    { title: "Quick E-commerce", icon: "🛒" },
    { title: "Hyperlocal Delivery", icon: "🚚" },
    { title: "Cloud Kitchen", icon: "☁️" },
    { title: "Startups", icon: "🚀" },
    { title: "Enterprise", icon: "🏢" },
    { title: "Delivery Business", icon: "📦" },
    { title: "Cafe & Bakery", icon: "🥐" },
  ];

  const featureTabs: Record<string, { title: string; icon: string }[]> = {
    "Ordering Software": [
      { title: "White Label Store", icon: "🏪" },
      { title: "Ordering Features", icon: "🛎️" },
      { title: "Rating Reviews", icon: "⭐" },
      { title: "Chat/Notifications", icon: "💬" },
      { title: "Payments", icon: "💳" },
      { title: "Contact Less Ordering", icon: "🤲" },
      { title: "Subscriptions", icon: "📅" },
    ],
    "Delivery Software": [
      { title: "Delivery Zones", icon: "🗺️" },
      { title: "Delivery Management", icon: "📦" },
      { title: "Driver Settlement", icon: "🏎️" },
      { title: "Third Party Integration", icon: "🔗" },
      { title: "Route Optimization", icon: "🛣️" },
    ],
    "Marketing Automation": [
      { title: "Coupons & Promocodes", icon: "🏷️" },
      { title: "Loyalty Points", icon: "🎁" },
      { title: "Promotions", icon: "📢" },
      { title: "Restaurant Marketing Software", icon: "📈" },
    ],
    "Business Intelligence": [
      { title: "Analytics", icon: "📊" },
      { title: "Merchant Management", icon: "👔" },
      { title: "Payment Settlement", icon: "💰" },
      { title: "Call Center Dashboard", icon: "☎️" },
      { title: "Merchant Panel", icon: "🖥️" },
      { title: "Reports", icon: "📄" },
      { title: "Customer Management", icon: "🧑‍💼" },
      { title: "Menu Management", icon: "📋" },
    ],
    "Platform": [
      { title: "Ordering App", icon: "📱" },
      { title: "Driver App", icon: "🚗" },
      { title: "Partner App", icon: "🤝" },
      { title: "Admin Dashboard", icon: "🖥️" },
    ],
  };

  const resourceTabs: Record<string, { title: string; icon: string }[]> = {
    "About Us": [
      { title: "Who We Are", icon: "👋" },
      { title: "Integrations", icon: "🔗" },
      { title: "Become A Partner", icon: "🤝" },
    ],
    "Learn & Grow": [
      { title: "Blog", icon: "📝" },
      { title: "FAQ", icon: "❓" },
      { title: "Templates", icon: "📄" },
      { title: "Glossary", icon: "📚" },
      { title: "Knowledge Base", icon: "📖" },
      { title: "Deonde Vs Others", icon: "⚡" },
    ],
  };

  // Mobile Accordion Component
  function MobileAccordion({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center py-4 text-lg font-medium text-left"
        >
          {title}
          <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden px-4 pb-4"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

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

      {/* NAVBAR WITH MOBILE MENU */}
{/* NAVBAR WITH MOBILE MENU */}
      <nav className="relative z-50 py-4 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Image
              src="/assests/2digit.png"
              alt="Logo"
              width={150}
              height={60}
              className="w-28 md:w-36"
              priority
            />
          </div>

          {/* DESKTOP MENU - Centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                          bg-white/95 backdrop-blur-md shadow-md rounded-full px-8 py-3 gap-8">
            {/* Features */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("Features")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-purple-600 transition">
                Features <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {activeMenu === "Features" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 w-[1100px] bg-white rounded-3xl shadow-2xl p-8 flex gap-8"
                    onMouseEnter={() => setActiveMenu("Features")}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="w-1/4 space-y-4">
                      {Object.keys(featureTabs).map((tab) => (
                        <Tab
                          key={tab}
                          label={tab}
                          active={activeFeatureTab === tab}
                          onHover={() => setActiveFeatureTab(tab)}
                        />
                      ))}
                    </div>
                    <div className="w-3/4 grid grid-cols-3 gap-5">
                      {featureTabs[activeFeatureTab].map((item) => (
                        <Link
                          key={item.title}
                          href={`/features/${item.title.toLowerCase().replace(/\s+/g, '-')}`} // Example route
                          className="p-5 rounded-2xl border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition cursor-pointer"
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <div className="font-medium mt-2">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("Solutions")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-purple-600 transition">
                Solutions <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {activeMenu === "Solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 w-[1100px] bg-white rounded-3xl shadow-2xl p-8 flex gap-8"
                    onMouseEnter={() => setActiveMenu("Solutions")}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="w-1/4 space-y-4">
                      <Tab
                        label="By Industry"
                        active={activeSolutionsTab === "industry"}
                        onHover={() => setActiveSolutionsTab("industry")}
                      />
                      <Tab
                        label="By Business"
                        active={activeSolutionsTab === "business"}
                        onHover={() => setActiveSolutionsTab("business")}
                      />
                    </div>
                    <div className="w-3/4 grid grid-cols-3 gap-5">
                      {(activeSolutionsTab === "industry" ? industryOptions : businessOptions).map((item) => (
                        <Link
                          key={item.title}
                          href={`/solutions/${item.title.toLowerCase().replace(/\s+/g, '-')}`} // Example route
                          className="p-5 rounded-2xl border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition cursor-pointer"
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <div className="font-medium mt-2">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("Resources")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-purple-600 transition">
                Resources <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {activeMenu === "Resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-3xl shadow-2xl p-8 flex gap-8"
                    onMouseEnter={() => setActiveMenu("Resources")}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="w-1/4 space-y-4">
                      {Object.keys(resourceTabs).map((tab) => (
                        <Tab
                          key={tab}
                          label={tab}
                          active={activeTab === tab}
                          onHover={() => setActiveTab(tab)}
                        />
                      ))}
                    </div>
                    <div className="w-3/4 grid grid-cols-3 gap-5">
                      {resourceTabs[activeTab]?.map((item) => (
                        <Link
                          key={item.title}
                          href={`/resources/${item.title.toLowerCase().replace(/\s+/g, '-')}`} // Example route
                          className="p-5 rounded-2xl border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition cursor-pointer flex items-center gap-3"
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing */}
            <Link href="/pricing" className="font-medium hover:text-purple-600 transition">
              Pricing
            </Link>
          </div>

          {/* CONTACT US BUTTON */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition shadow-md">
                Contact Us
              </button>
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU WITH DARK OVERLAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Slide-in Mobile Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 overflow-y-auto pt-20 px-6 shadow-2xl md:hidden"
              >
                <div className="space-y-4">
                  {/* Features */}
                  <MobileAccordion title="Features">
                    {Object.keys(featureTabs).map((tab) => (
                      <div key={tab} className="py-3">
                        <div className="font-semibold text-purple-700 mb-2">{tab}</div>
                        <div className="grid grid-cols-2 gap-3 pl-2">
                          {featureTabs[tab].map((item) => (
                            <Link
                              key={item.title}
                              href={`/features/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-center gap-2 text-gray-700 hover:text-purple-600"
                            >
                              <span className="text-xl">{item.icon}</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </MobileAccordion>

                  {/* Solutions */}
                  <MobileAccordion title="Solutions">
                    <div className="space-y-6 pl-2">
                      <div>
                        <div className="font-semibold text-purple-700 mb-2">By Industry</div>
                        <div className="grid grid-cols-2 gap-3">
                          {industryOptions.map((item) => (
                            <Link
                              key={item.title}
                              href={`/solutions/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-center gap-2 text-gray-700 hover:text-purple-600"
                            >
                              <span className="text-xl">{item.icon}</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-purple-700 mb-2">By Business</div>
                        <div className="grid grid-cols-2 gap-3">
                          {businessOptions.map((item) => (
                            <Link
                              key={item.title}
                              href={`/solutions/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-center gap-2 text-gray-700 hover:text-purple-600"
                            >
                              <span className="text-xl">{item.icon}</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </MobileAccordion>

                  {/* Resources */}
                  <MobileAccordion title="Resources">
                    {Object.keys(resourceTabs).map((tab) => (
                      <div key={tab} className="py-3">
                        <div className="font-semibold text-purple-700 mb-2">{tab}</div>
                        <div className="grid grid-cols-2 gap-3 pl-2">
                          {resourceTabs[tab].map((item) => (
                            <Link
                              key={item.title}
                              href={`/resources/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-center gap-2 text-gray-700 hover:text-purple-600"
                            >
                              <span className="text-xl">{item.icon}</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </MobileAccordion>

                  {/* Pricing */}
                  <Link href="/pricing" className="block py-4 text-lg font-medium border-b border-gray-200">
                    Pricing
                  </Link>

                  {/* Contact Us Button */}
                  <Link href="/contact">
                    <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-medium mt-6 hover:bg-purple-700 transition">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>


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
                  const isActive = active === feature;

                  return (
                    <button
                      key={feature}
                      onClick={() => setActive(feature)}
                      // Optional hover effect only on desktop
                      onMouseEnter={() =>
                        window.innerWidth >= 768 && setActive(feature)
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
                      aria-pressed={isActive}
                    >
                      {feature}
                    </button>
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
              <div className="h-40 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 font-medium">
                Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whom we serve */}
      <section className="relative py-20 md:py-32 bg-white">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Industries We Serve – From Startups to Enterprises
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Discover Who Can Benefit from 2DigitInnovations
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden px-4 md:px-6">
          <div className="flex animate-marquee gap-4 md:gap-6">
            {industries.concat(industries).map((item, i) => (
              <div
                key={i}
                className="
            flex-shrink-0
            w-64 md:w-80
            rounded-3xl
            bg-[#CFCFCF]
            overflow-hidden
          "
              >
                {/* Image */}
                <div className="h-36 md:h-44 bg-gray-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
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
      </section>

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

      {/* Footer */}

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

        {/* Bottom Copyright */}
        {/* <div className="mt-12 text-center text-purple-200 text-sm">
    &copy; {new Date().getFullYear()} 2digitinnovations. All rights reserved.
  </div> */}
      </footer>
    </main>
  );
}
