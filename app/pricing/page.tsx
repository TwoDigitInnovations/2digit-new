"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Add this import
import React, { ReactNode } from "react";
import {
  Pizza,
  ShoppingCart,
  Milk,
  Beef,
  Apple,
  Car,
  HeartPulse,
  Plane,
  Ticket,
  Package,
  Wine,
  Settings,
  Shirt,
  Cpu,
  Sofa,
  Wrench,
  Boxes,
  Code,
  PillBottle,
  Flower,
  Utensils,
  Building2,
  Rocket,
  Cloud,
  Coffee,
  ShoppingBag,
  Store,
  Smartphone,
  Palette,
  PenTool,
  Smile,
  Search,
  Share2,
  MousePointerClick,
  Mail,
  TrendingUp,
  CheckCircle,
  Gauge,
  GitBranch,
  CloudUpload,
  Activity,
  Headphones,
  ShieldCheck,
  Compass,
  ClipboardCheck,
  PieChart,
  Infinity,
  TestTube,
  Star,
  QrCode,
  CreditCard,
  Layers,
  Calendar,
  MessageCircle,
  Globe,
  Send,
  Layout,
  Server,
  Edit,
  MousePointer,
  Grid,
  Map,
  Users,
  LocateFixed,
  Route,
  Wallet,
  Truck,
  Link2,
  MapPin,
  PackageCheck,
  Tag,
  Gift,
  Megaphone,
  // CreditCard,
  // Star,
  BarChart3,
  Briefcase,
  // Wallet,
  Phone,
  Monitor,
  FileText,
  // Users,
  ClipboardList,
  LayoutDashboard,
  // Layers,
  MapPinned,
  // Users,
  Plug,
  Handshake,
  // FileText,
  HelpCircle,
  LayoutTemplate,
  BookOpen,
  Library,
  Zap,
  GraduationCap,
  Landmark,
  Factory,
  Dumbbell,
  Film,
} from "lucide-react";

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
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const [activeFeatureTab, setActiveFeatureTab] = useState("features");
  const [activeSolutionsTab, setActiveSolutionsTab] = useState("industry");
  const [activePlan, setActivePlan] = useState<number | null>(null);

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
        <button className="flex items-center gap-1 font-medium hover:text-[#6B5AFF] transition">
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
                    className="block px-4 py-2 rounded-lg hover:bg-purple-50 hover:text-[#6B5AFF] transition"
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

  // Tab component ko update karein (clickable + link)
  // Tab component ko update karein (clickable + link)
  function Tab({
    label,
    active,
    onHover,
    href,
  }: {
    label: string;
    active: boolean;
    onHover: () => void;
    href?: string; // optional href
  }) {
    return (
      <Link href={href || "#"} className="block">
        {" "}
        {/* Link wrap kiya */}
        <div
          onMouseEnter={onHover}
          onClick={onHover} // Click par bhi tab change ho
          className={`flex justify-between items-center px-5 py-4 rounded-xl border cursor-pointer transition
          ${
            active
              ? "border-[#6B5AFF] bg-purple-50 text-[#6B5AFF]"
              : "border-gray-200 hover:border-[#6B5AFF] hover:bg-purple-50"
          }`}
        >
          {label}
          <span>›</span>
        </div>
      </Link>
    );
  }
  /* ---------------- DATA ---------------- */

  const pricingMenu = ["Plans", "Compare Plans", "Enterprise"];

 const industryOptions = [
  { title: "Healthcare", icon: <HeartPulse size={22} /> },
  { title: "Education & E-Learning", icon: <GraduationCap size={22} /> },
  { title: "Retail & E-commerce", icon: <ShoppingCart size={22} /> },
  { title: "Food & Beverage", icon: <Utensils size={22} /> },
  { title: "Transportation & Logistics", icon: <Truck size={22} /> },
  { title: "Real Estate", icon: <Building2 size={22} /> },
  { title: "Finance & Banking", icon: <Landmark size={22} /> },
  { title: "Travel & Hospitality", icon: <Plane size={22} /> },
  { title: "Automotive", icon: <Car size={22} /> },
  { title: "Manufacturing", icon: <Factory size={22} /> },
  { title: "Sports & Fitness", icon: <Dumbbell size={22} /> },
  { title: "Entertainment & Media", icon: <Film size={22} /> },
];


  const businessOptions = [
    { title: "Restaurants", icon: <Utensils size={22} /> },
    { title: "Dairy Business", icon: <Milk size={22} /> },
    { title: "Super Market", icon: <Store size={22} /> },
    { title: "Quick Commerce", icon: <ShoppingCart size={22} /> },
    { title: "Hyperlocal Delivery", icon: <Truck size={22} /> },
    { title: "Cloud Kitchen", icon: <Cloud size={22} /> },
    { title: "Startups", icon: <Rocket size={22} /> },
    { title: "Enterprise", icon: <Building2 size={22} /> },
    { title: "Delivery Business", icon: <Package size={22} /> },
    { title: "Cafe", icon: <Coffee size={22} /> },
    { title: "Bakery", icon: <ShoppingBag size={22} /> },
  ];

  const featureTabs: Record<string, { title: string; icon: ReactNode }[]> = {
    "Mobile App Development": [
      { title: "Native iOS App Development", icon: <Apple size={22} /> },
      {
        title: "Native Android App Development",
        icon: <Smartphone size={22} />,
      },
      { title: "Cross-Platform App Development", icon: <Layers size={22} /> },
      { title: "Progressive Web Apps (PWA)", icon: <Globe size={22} /> },
      { title: "Ride-Sharing & Transportation Apps", icon: <Car size={22} /> },
      { title: "E-commerce & Shopping Apps", icon: <ShoppingCart size={22} /> },
      { title: "Food & Meal Planning Apps", icon: <Utensils size={22} /> },
      { title: "Healthcare & Wellness Apps", icon: <HeartPulse size={22} /> },
      { title: "Education & Learning Apps", icon: <BookOpen size={22} /> },
      { title: "Travel & Tourism Apps", icon: <Plane size={22} /> },
      { title: "Logistics & Fleet Management Apps", icon: <Truck size={22} /> },
      { title: "On-Demand Service Apps", icon: <Zap size={22} /> },
      { title: "Survey & Rewards Apps", icon: <Gift size={22} /> },
      { title: "Event & Ticketing Apps", icon: <Ticket size={22} /> },
    ],

    "WEB DEVELOPMENT": [
      { title: "Frontend Development", icon: <Layout size={22} /> },
      { title: "Backend Development", icon: <Server size={22} /> },
      { title: "Full-Stack Development", icon: <Layers size={22} /> },
      { title: "CMS Development", icon: <Edit size={22} /> },
      { title: "Corporate Websites", icon: <Building2 size={22} /> },
      { title: "Landing Page Development", icon: <MousePointer size={22} /> },
      { title: "Business Websites", icon: <Briefcase size={22} /> },
      { title: "Portal Development", icon: <Grid size={22} /> },
      { title: "Web Applications", icon: <Monitor size={22} /> },
      { title: "API Development & Integration", icon: <Plug size={22} /> },
    ],

    "E-COMMERCE DEVELOPMENT": [
      {
        title: "E-commerce Website Development",
        icon: <ShoppingBag size={22} />,
      },
      { title: "E-commerce App Development", icon: <Smartphone size={22} /> },
      { title: "Multi-Vendor Marketplace", icon: <Store size={22} /> },
      { title: "Custom E-commerce Solutions", icon: <Settings size={22} /> },
      { title: "Shopify Development", icon: <ShoppingCart size={22} /> },
      { title: "WooCommerce Development", icon: <Package size={22} /> },
      { title: "Magento Development", icon: <Boxes size={22} /> },
      { title: "Custom E-commerce Platform", icon: <Code size={22} /> },
      { title: "Fashion & Apparel E-commerce", icon: <Shirt size={22} /> },
      { title: "Electronics & Gadgets Store", icon: <Cpu size={22} /> },
      { title: "Home & Furniture E-commerce", icon: <Sofa size={22} /> },
      { title: "Food & Beverage E-commerce", icon: <Coffee size={22} /> },
      { title: "Health & Wellness Store", icon: <HeartPulse size={22} /> },
    ],

    "READY-MADE APP SOLUTIONS": [
      { title: "Food Delivery App Solution", icon: <Utensils size={22} /> },
      {
        title: "Grocery Delivery App Solution",
        icon: <ShoppingCart size={22} />,
      },
      { title: "Taxi Booking App Solution", icon: <Car size={22} /> },
      { title: "E-commerce App Solution", icon: <Store size={22} /> },
      { title: "Clothing Store App Solution", icon: <Shirt size={22} /> },
      { title: "Car Repair Service App", icon: <Wrench size={22} /> },
      { title: "Truck Booking App - WheelsEyes", icon: <Truck size={22} /> },
      { title: "Lottery Ticket App Solution", icon: <Ticket size={22} /> },
    ],

    "CUSTOM SOFTWARE DEVELOPMENT": [
      { title: "Enterprise Software Development", icon: <Map size={22} /> },
      { title: "SaaS Application Development", icon: <Users size={22} /> },
      { title: "Cloud-Based Solutions", icon: <LocateFixed size={22} /> },
      { title: "Legacy System Modernization", icon: <Route size={22} /> },
      { title: "System Integration", icon: <Wallet size={22} /> },
      { title: "Workflow Automation", icon: <Truck size={22} /> },
      {
        title: "Workforce Management Software",
        icon: <PackageCheck size={22} />,
      },
      { title: "Visitor Management Systems", icon: <Link2 size={22} /> },
      { title: "Property Management Software", icon: <MapPin size={22} /> },
    ],

    "UI/UX DESIGN": [
      { title: "User Interface (UI) Design", icon: <Palette size={22} /> },
      { title: "User Experience (UX) Design", icon: <Smile size={22} /> },
      { title: "Mobile App Design", icon: <Smartphone size={22} /> },
      { title: "Web Design", icon: <Layout size={22} /> },
      { title: "Prototyping & Testing", icon: <TestTube size={22} /> },
      { title: "Design Systems", icon: <Layers size={22} /> },
      { title: "Graphic Design", icon: <PenTool size={22} /> },
    ],

    "EMERGING TECHNOLOGIES": [
      {
        title: "Artificial Intelligence (AI) & Machine Learning",
        icon: <Palette size={22} />,
      },
      { title: "Internet of Things (IoT)", icon: <Smile size={22} /> },
      { title: "Blockchain Development", icon: <Smartphone size={22} /> },
      {
        title: "Augmented Reality (AR) & Virtual Reality (VR)",
        icon: <Layout size={22} />,
      },
      { title: "Chatbots & Conversational AI", icon: <TestTube size={22} /> },
      { title: "Cloud Computing", icon: <Layers size={22} /> },
    ],

    "DIGITAL MARKETING": [
      { title: "Search Engine Optimization (SEO)", icon: <Search size={22} /> },
      { title: "Social Media Marketing (SMM/SMO)", icon: <Share2 size={22} /> },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        icon: <MousePointerClick size={22} />,
      },
      { title: "Content Marketing", icon: <PenTool size={22} /> },
      { title: "Email Marketing", icon: <Mail size={22} /> },
      {
        title: "Conversion Rate Optimization (CRO)",
        icon: <TrendingUp size={22} />,
      },
      { title: "Analytics & Reporting", icon: <BarChart3 size={22} /> },
      { title: "Influencer Marketing", icon: <Users size={22} /> },
    ],
    "QUALITY ASSURANCE & TESTING": [
      { title: "Manual Testing", icon: <CheckCircle size={22} /> },
      { title: "Automated Testing", icon: <Settings size={22} /> },
      { title: "Mobile App Testing", icon: <Smartphone size={22} /> },
      { title: "Web Application Testing", icon: <Monitor size={22} /> },
      { title: "Performance Testing", icon: <Gauge size={22} /> },
      { title: "API Testing", icon: <Plug size={22} /> },
    ],

    "DEVOPS & CLOUD SERVICES": [
      { title: "DevOps Consulting", icon: <Infinity size={22} /> },
      { title: "CI/CD Implementation", icon: <GitBranch size={22} /> },
      { title: "Payment Settlement", icon: <CreditCard size={22} /> },
      { title: "Cloud Migration", icon: <CloudUpload size={22} /> },
      { title: "Infrastructure as Code (IaC)", icon: <Code size={22} /> },
      { title: "Container Orchestration", icon: <Boxes size={22} /> },
      { title: "Monitoring & Logging", icon: <Activity size={22} /> },
    ],

    "MAINTENANCE & SUPPORT": [
      { title: "Application Maintenance", icon: <Wrench size={22} /> },
      { title: "Dedicated Development Team", icon: <Users size={22} /> },
      { title: "Technical Support", icon: <Headphones size={22} /> },
      { title: "Performance Optimization", icon: <Zap size={22} /> },
      { title: "Security Updates", icon: <ShieldCheck size={22} /> },
    ],

    "CONSULTING SERVICES": [
      { title: "IT Strategy Consulting", icon: <Compass size={22} /> },
      { title: "Software Architecture Consulting", icon: <Layers size={22} /> },
      { title: "Technology Selection", icon: <Cpu size={22} /> },
      { title: "Project Management", icon: <ClipboardCheck size={22} /> },
      { title: "Business Analysis", icon: <PieChart size={22} /> },
    ],
  };
  //   Plans

  const plans = [
    {
      name: "Free",
      desc: "Perfect to test drive Ressto and see how it works for your restaurant",
      price: "₹0",
      period: "forever",
      button: "Get Started",
      link: "/signup/free",
      
      features: [
        "Online ordering website",
        "100 orders per month",
        "Single outlet",
        "Admin dashboard",
        "Menu management",
      ],
    popular: false, // optional

    },
    {
      name: "Basic",
      desc: "Ideal for single-location restaurants ready to go online",
      price: "₹1,999",
      period: "/ Month",
      button: "Get Started",
      link: "/signup/basic",
      features: [
        "Everything in Free, plus:",
        "Unlimited orders",
        "QR code ordering",
        "Custom domain",
        "Promotion codes & coupons",
        "Advanced reports",
        "Online Payments",
      ],
    },
    {
      name: "Pro",
      desc: "For restaurants scaling to multiple locations with delivery",
      price: "₹3,999",
      period: "/ Month",
      button: "Get Started",
      link: "/signup/pro",
      features: [
        "Everything in Basic, plus:",
        "Up to 3 outlets",
        "Delivery management system",
        "Driver app & tracking",
        "Loyalty & rewards program",
        "Table Booking",
      ],
    },
    {
      name: "Premium",
      desc: "Enterprise solution for restaurant chains and franchises",
      price: "₹8,999",
      period: "/ Month",
      button: "Get Started",
      link: "/signup/premium",
      features: [
        "Everything in Pro, plus:",
        "Up to 5 outlets",
        "Branded Mobile Apps",
        "POS integration",
        "Advanced analytics",
        "Priority Support",
      ],
    },
  ];
  // Custom

  const custom = [
    {
      title: "0% Commission",
      desc: "Keep 100% of your order revenue. No hidden fees, no commission – just a simple monthly subscription.",
      icon: "🚀",
    },
    {
      title: "Live in 24 Hours",
      desc: "Get your online ordering system up and running in just one day. Start taking orders immediately.",
      icon: "💰",
    },
    {
      title: "Your Brand, Your Way",
      desc: "Fully customizable website that matches your restaurant's brand and style perfectly.",
      icon: "🖥️",
    },
    {
      title: "Dedicated Support",
      desc: "Get help whenever you need it. Our team is always ready to assist you with setup and ongoing support.",
      icon: "🏪",
    },
  ];
  // Comparison Table
  //    function PricingComparisonTable() {
  const table = [
    {
      feature: "Online Ordering Website",
      free: "✓",
      basic: "✓",
      pro: "✓",
      premium: "✓",
    },
    {
      feature: "Monthly Orders",
      free: "100",
      basic: "Unlimited",
      pro: "Unlimited",
      premium: "Unlimited",
    },
    {
      feature: "Number of Outlets",
      free: "1",
      basic: "1",
      pro: "Up to 3",
      premium: "Up to 5",
    },
    {
      feature: "Admin Dashboard",
      free: "✓",
      basic: "✓",
      pro: "✓",
      premium: "✓",
    },
    {
      feature: "Menu Management",
      free: "✓",
      basic: "✓",
      pro: "✓",
      premium: "✓",
    },
    {
      feature: "QR Code Ordering",
      free: "✕",
      basic: "✓",
      pro: "✓",
      premium: "✓",
    },
    {
      feature: "Custom Domain",
      free: "✕",
      basic: "✓",
      pro: "✓",
      premium: "✓",
    },
    {
      feature: "Promotion Codes & Coupons",
      free: "✕",
      basic: "✓",
      pro: "✓",
      premium: "✓",
    },
    {
      feature: "Online Payments",
      free: "✕",
      basic: "✓",
      pro: "✓",
      premium: "✓",
    },
    {
      feature: "Delivery Management System",
      free: "✕",
      basic: "✕",
      pro: "✓",
      premium: "✓",
    },
  ];

//   Trusted Section
//   function TrustedSection() {
  const stats = [
    {
      value: "500+",
      label: "Restaurants",
      icon: "📅",
    },
    {
      value: "50K+",
      label: "Monthly Orders",
      icon: "🚩",
    },
    {
      value: "15+",
      label: "Countries",
      icon: "🏪",
    },
    {
      value: "4.8/5",
      label: "Customer Rating",
      icon: "👥",
    },
  ];
//   }
  // }
  // }
  const resourceTabs: Record<string, { title: string; icon: ReactNode }[]> = {
    "About Us": [
      { title: "Who We Are", icon: <Users size={22} /> },
      { title: "Integrations", icon: <Plug size={22} /> },
      { title: "Become A Partner", icon: <Handshake size={22} /> },
    ],

    "Learn & Grow": [
      { title: "Blog", icon: <FileText size={22} /> },
      { title: "FAQ", icon: <HelpCircle size={22} /> },
      { title: "Templates", icon: <LayoutTemplate size={22} /> },
      { title: "Glossary", icon: <BookOpen size={22} /> },
      { title: "Knowledge Base", icon: <Library size={22} /> },
      { title: "Deonde Vs Others", icon: <Zap size={22} /> },
    ],
  };

  // Mobile Accordion Component
  function MobileAccordion({
    title,
    children,
  }: {
    title: string;
      href?: string;          // ✅ Add this
    children: React.ReactNode;
  }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center py-4 text-lg font-medium text-left"
        >
          {title}
          <ChevronDown
            className={`w-6 h-6 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
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
      {/* <div
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
      ></div> */}

      {/* NAVBAR WITH MOBILE MENU */}
      {/* NAVBAR WITH FULL MOBILE RESPONSIVENESS */}
      <nav className="relative z-50 py-4 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assests/2digit.png"
                alt="Logo"
                width={150}
                height={60}
                className="w-28 md:w-36"
                priority
              />
            </Link>
          </div>

          {/* DESKTOP MENU - Centered */}
          <div
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-white/95 backdrop-blur-md shadow-md rounded-full px-8 py-3 gap-8"
          >
            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("Services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-[#6B5AFF] transition-colors">
                Services <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {activeMenu === "Services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 w-[1000px] bg-white rounded-3xl shadow-2xl p-10 flex gap-12"
                    onMouseEnter={() => setActiveMenu("Services")}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {/* Left Tabs */}
                    <div className="w-80 space-y-3">
                      {Object.keys(featureTabs).map((tab) => {
                        const slug = tab
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/&/g, "and");
                        return (
                          <Tab
                            key={tab}
                            label={tab}
                            active={activeFeatureTab === tab}
                            onHover={() => setActiveFeatureTab(tab)}
                            href={`/services/${slug}`}
                          />
                        );
                      })}
                    </div>

                    {/* Right Grid - Perfect Line-wise Alignment */}
                    <div className="flex-1 grid grid-cols-3 gap-6 grid-rows-5 auto-rows-fr">
                      {featureTabs[activeFeatureTab]?.map((item) => (
                        <Link
                          key={item.title}
                          href={`/services/${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 hover:border-[#6B5AFF] hover:bg-purple-50 transition-all duration-300 text-center bg-white shadow-sm hover:shadow-md"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="mb-5 text-[#000] group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <div className="text-sm font-medium text-gray-800 group-hover:text-[#6B5AFF] line-clamp-3 leading-relaxed">
                            {item.title}
                          </div>
                        </Link>
                      ))}

                      {/* Empty fillers to maintain grid structure if needed (optional) */}
                      {/* You can remove this if you don't want empty cards */}
                      {featureTabs[activeFeatureTab] &&
                        featureTabs[activeFeatureTab].length < 15 &&
                        Array.from({
                          length: 15 - featureTabs[activeFeatureTab].length,
                        }).map((_, i) => (
                          <div key={`filler-${i}`} className="invisible" />
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
              <button className="flex items-center gap-1 font-medium hover:text-[#6B5AFF] transition">
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
                        href="/solutions/by-industry"
                      />
                      <Tab
                        label="By Business"
                        active={activeSolutionsTab === "business"}
                        onHover={() => setActiveSolutionsTab("business")}
                        href="/solutions/by-business"
                      />
                    </div>

                    <div className="w-3/4 grid grid-cols-3 gap-5">
                      {(activeSolutionsTab === "industry"
                        ? industryOptions
                        : businessOptions
                      ).map((item) => (
                        <Link
                          key={item.title}
                          href={`/solutions/${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="group p-5 rounded-2xl border border-gray-200 hover:border-[#6B5AFF] hover:bg-purple-50 transition-all duration-300"
                          onClick={() => setActiveMenu(null)}
                        >
                          <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">
                            {item.icon}
                          </span>
                          <div className="font-medium text-gray-800 group-hover:text-[#6B5AFF] transition">
                            {item.title}
                          </div>
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
              <button className="flex items-center gap-1 font-medium hover:text-[#6B5AFF] transition">
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
                          href={`/resources/${tab
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        />
                      ))}
                    </div>

                    <div className="w-3/4 grid grid-cols-3 gap-5">
                      {resourceTabs[activeTab]?.map((item) => (
                        <Link
                          key={item.title}
                          href={`/resources/${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="group p-5 rounded-2xl border border-gray-200 hover:border-[#6B5AFF] hover:bg-purple-50 transition-all duration-300 flex items-center gap-3"
                          onClick={() => setActiveMenu(null)}
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <span className="font-medium text-gray-800 group-hover:text-[#6B5AFF]">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="font-medium hover:text-[#6B5AFF] transition"
            >
              Pricing
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-[#6B5AFF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8B7AFF] transition shadow-md">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden z-50"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE FULL-SCREEN MENU (Accordion Style) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto md:hidden"
            >
              <div className="max-w-3xl mx-auto pb-10">
                {/* Services Accordion */}
                <MobileAccordion title="Services">
                  <div className="space-y-4 pl-4">
                    {Object.keys(featureTabs).map((tab) => {
                      const slug = tab.toLowerCase().replace(/\s+/g, "-");
                      return (
                        <MobileAccordion
                          key={tab}
                          title={tab}
                          href={`/services/${slug}`} // ← Yeh link banayega
                        >
                          {/* Children (sub-items) */}
                          <div className="grid gap-3 pl-4">
                            {featureTabs[tab].map((item) => (
                              <Link
                                key={item.title}
                                href={`/services/${item.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-purple-50 transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="font-medium">
                                  {item.title}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </MobileAccordion>
                      );
                    })}
                  </div>
                </MobileAccordion>

                {/* Solutions Accordion */}
                <MobileAccordion title="Solutions">
                  <div className="space-y-4 pl-4">
                    <MobileAccordion title="By Industry">
                      <div className="space-y-2 pl-4">
                        {industryOptions.map((item) => (
                          <Link
                            key={item.title}
                            href={`/solutions/${item.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-purple-50 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </MobileAccordion>

                    <MobileAccordion title="By Business">
                      <div className="space-y-2 pl-4">
                        {businessOptions.map((item) => (
                          <Link
                            key={item.title}
                            href={`/solutions/${item.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-purple-50 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </MobileAccordion>
                  </div>
                </MobileAccordion>

                {/* Resources Accordion */}
                <MobileAccordion title="Resources">
                  <div className="space-y-4 pl-4">
                    {Object.keys(resourceTabs).map((tab) => (
                      <MobileAccordion key={tab} title={tab}>
                        <div className="grid gap-3 pl-4">
                          {resourceTabs[tab].map((item) => (
                            <Link
                              key={item.title}
                              href={`/resources/${item.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-purple-50 transition"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="text-2xl">{item.icon}</span>
                              <span className="font-medium">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </MobileAccordion>
                    ))}
                  </div>
                </MobileAccordion>

                {/* Pricing & Contact */}
                <div className="mt-8 space-y-4 border-t pt-6">
                  <Link
                    href="/pricing"
                    className="block py-4 text-lg font-medium hover:text-[#6B5AFF] transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <button className="w-full bg-[#6B5AFF] text-white py-4 rounded-full font-medium hover:bg-[#8B7AFF] transition shadow-md">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Price */}

      <section className="bg-[#fff] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Simple, Transparent Pricing
          </h1>

          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Stop paying 15–30% commission to third-party apps. Own your orders,
            keep 100% of your profits, and grow your restaurant with our
            commission-free platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-3xl p-8 shadow-sm flex flex-col ${
                  plan.popular ? "ring-2 ring-blue-400" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-sm font-medium px-4 py-1 rounded-full">
                    🔥 Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.desc}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>

                <button
                  className={`mb-8 w-full py-3 rounded-full font-medium transition ${
                    plan.popular
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "border border-blue-400 text-blue-500 hover:bg-orange-50"
                  }`}
                >
                  {plan.button} →
                </button>

                <ul className="space-y-4 mt-auto">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="bg-[#fff] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Need Custom Solutions?
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've got you covered with tailored enterprise plans
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {custom.map((item, index) => (
              <div
                key={index}
                className="bg-[#f9f8f3] border-2 border-white rounded-3xl p-8 hover:shadow-md transition"
              >
                <div className="text-3xl mb-6">{item.icon}</div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Heading */}
          <div className="text-center mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              See What's Included in Each Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every feature you need to run and grow your restaurant's online
              ordering
            </p>

            {/* Table Wrapper (Scrollable on Mobile) */}
            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                      Features
                    </th>
                    <th className="px-6 py-4 font-semibold text-gray-700">
                      Free
                    </th>
                    <th className="px-6 py-4 font-semibold text-gray-700">
                      Basic
                    </th>
                    <th className="px-6 py-4 font-semibold text-gray-700">
                      Pro
                    </th>
                    <th className="px-6 py-4 font-semibold text-gray-700">
                      Premium
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {table.map((row, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-6 py-5 text-gray-700 font-medium">
                        {row.feature}
                      </td>

                      {[row.free, row.basic, row.pro, row.premium].map(
                        (value, i) => (
                          <td
                            key={i}
                            className="px-6 py-5 text-center text-gray-700"
                          >
                            {value === "✓" ? (
                              <span className="text-green-600 text-lg font-bold">
                                ✓
                              </span>
                            ) : value === "✕" ? (
                              <span className="text-red-500 text-lg font-bold">
                                ✕
                              </span>
                            ) : (
                              value
                            )}
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted  */}

 <section className="bg-[#6B5AFF] py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#0f172a] mb-16">
          Trusted by restaurants worldwide
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[180px]"
            >
              <div className="text-2xl self-end">{item.icon}</div>

              <div>
                <h3 className="text-4xl font-bold text-gray-700 mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-500 text-lg">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* Ready to work Together */}
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
