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
import PhoneInput from "react-phone-input-2";
import React , {ReactNode} from "react";

import {
  Workflow,
  Bug,
  BrainCircuit,
  Flag,
  Eye,
  Target,
  Award,
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
  Lightbulb,
  Brain,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [phone, setPhone] = useState("");


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
      href, // ✅ add this

  }: {
    title: string;
    children: React.ReactNode;
      href?: string; // optional

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
{/* Image */}
 <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      {/* Logo Section */}
      <div className="mb-10 flex items-center space-x-4">
        <div className="bg-white p-4 rounded-full shadow-lg">
          <span className="text-3xl font-bold text-gray-800">➡️</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900">2digitinnovations </h1>
      </div>

      {/* Team Image */}
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-lg">
        {/* <Image
          src={teamImage}
          alt="Deonde Team"
          className="object-cover"
          priority
        /> */}
      </div>

      {/* Optional Footer */}
      <p className="mt-6 text-gray-600">
        Proud to be part of the 2Digit team!
      </p>
    </div>

    {/* What we do */}
        <section className="bg-[#f7f7f4] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b3b] mb-6">
            What We Do
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
           We build digital solutions that help businesses grow. Whether you're a startup launching your first app or an established company looking to transform digitally, we have the expertise to make it happen. Our team specializes in mobile apps, web development, UI/UX design, and digital marketing, everything you need to succeed online.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We have a solution if you want to deliver food, groceries, or
            anything else online. Start a trial now to see how we can help.
          </p>
        </div>

        {/* Right Image Stack */}
        <div className="flex-1 relative w-full max-w-lg">
          
          {/* Background Cards */}
          <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-[#eaeaea] z-0"></div>
          <div className="absolute -top-8 -right-8 w-full h-full rounded-3xl bg-[#f0f0f0] z-0"></div>

          {/* Main Image */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/team.jpg" // place image in public folder
              alt="Team"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>


    {/* Our Vision */}

      <section className="bg-[#f7f7f4] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Vision */}
          <div className="bg-[#fff] border-2 border-white rounded-3xl p-8">
            <div className="w-12 h-12 flex items-center justify-center border rounded-xl mb-6">
              <Eye className="text-blue-500" />
            </div>

            <h3 className="text-3xl font-bold text-[#0b1b3b] mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
             We see a future where technology empowers every business to reach its full potential. Our vision is to become the most trusted software development partner globally, known for creating innovative solutions that are not just technically excellent but also easy to use and truly beneficial for businesses and their customers.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <Target className="text-blue-500" />
            </div>

            <h3 className="text-3xl font-bold text-[#0b1b3b] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
            At 2Digit Innovations, we are dedicated to providing cutting-edge technology solutions tailored to meet the evolving needs of businesses in the digital landscape. By combining innovation with excellence, we aim to empower our clients with impactful solutions that drive growth, streamline operations, enhance profitability, and foster lasting relationships with their customers.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-[#fff] border-2 border-white rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl  font-bold text-[#0b1b3b] mb-10 text-center">
            Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Integrity */}
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="text-white" />
              </div>

              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-gray-600 leading-relaxed">
              We always believe in strong integrity and moral principles. For that reason, all our organization is derived from the integrity of our leadership team.
              </p>
            </div>

            {/* Quality */}
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Award className="text-white" />
              </div>

              <h4 className="text-xl font-semibold mb-2">Quality</h4>
              <p className="text-gray-600 leading-relaxed">
          We deliver high-quality services as well as software. For this success is possible. Greater customer service leads to superior quality and trust.
              </p>
            </div>

            {/* Respect */}
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Handshake className="text-white" />
              </div>

              <h4 className="text-xl font-semibold mb-2">Respect</h4>
              <p className="text-gray-600 leading-relaxed">
We offer and receive the seed of soul whether it is defined such as their beliefs, mutual respect, values, hard. If, We remaining represent challenges with a balance.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>




{/* Our services */}

<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="bg-[#fff] border-2 border-white rounded-3xl p-8 md:p-12 shadow-lg">
      <h3 className="text-3xl font-bold text-[#0b1b3b] mb-10 text-center">
        Our Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Row 1 - 4 services */}
        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Code className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Custom Software Development</h4>
          <p className="text-gray-600 leading-relaxed">
            We build tailored software solutions that perfectly align with your business needs, ensuring scalability and efficiency.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Globe className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Web Application Development</h4>
          <p className="text-gray-600 leading-relaxed">
            Creating responsive and modern web applications using the latest technologies to deliver seamless user experiences.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Smartphone className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Mobile App Development</h4>
          <p className="text-gray-600 leading-relaxed">
            Developing native and cross-platform mobile applications for iOS and Android to reach your audience on the go.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Cloud className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Cloud Solutions & Migration</h4>
          <p className="text-gray-600 leading-relaxed">
            Helping businesses migrate to the cloud and implement scalable cloud-based solutions for better performance and cost savings.
          </p>
        </div>

        {/* Row 2 - 4 services */}
        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Palette className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
          <p className="text-gray-600 leading-relaxed">
            Crafting intuitive and visually appealing user interfaces and experiences that engage and delight your users.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Workflow className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">DevOps & Automation</h4>
          <p className="text-gray-600 leading-relaxed">
            Streamlining development and operations with automated pipelines, CI/CD, and infrastructure as code.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Lightbulb className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">IT Consulting & Strategy</h4>
          <p className="text-gray-600 leading-relaxed">
            Providing expert guidance on technology strategy, digital transformation, and optimizing your IT infrastructure.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <BrainCircuit className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">AI & Machine Learning</h4>
          <p className="text-gray-600 leading-relaxed">
            Integrating artificial intelligence and machine learning capabilities to make your applications smarter and more innovative.
          </p>
        </div>

        {/* Row 3 - Only 2 services in column 2 and 3 */}
        {/* Empty column 1 */}
        <div className="flex flex-col invisible">
          {/* Invisible placeholder to maintain grid structure */}
          <div className="w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold mb-2 opacity-0">Placeholder</h4>
          <p className="text-gray-600 leading-relaxed opacity-0">
            Placeholder
          </p>
        </div>

        {/* Quality Assurance & Testing - Column 2 */}
        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Bug className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Quality Assurance & Testing</h4>
          <p className="text-gray-600 leading-relaxed">
            Ensuring your software is bug-free and performs optimally through rigorous testing and quality assurance processes.
          </p>
        </div>

        {/* Maintenance & Support - Column 3 */}
        <div className="flex flex-col">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Wrench className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Maintenance & Support</h4>
          <p className="text-gray-600 leading-relaxed">
            Offering ongoing maintenance, updates, and 24/7 support to keep your software running smoothly.
          </p>
        </div>

        {/* Empty column 4 */}
        <div className="flex flex-col invisible">
          {/* Invisible placeholder */}
          <div className="w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold mb-2 opacity-0">Placeholder</h4>
          <p className="text-gray-600 leading-relaxed opacity-0">
            Placeholder
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


    {/* Online Order */}

        <section className="bg-[#f7f7f4] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1b3b] mb-14">
       Trusted by 500+ Businesses Worldwide for Digital Innovation
 <br className="hidden md:block" />
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 text-left">
            <div className="flex justify-end mb-6">
              <Calendar className="w-8 h-8 text-[#2c2c2c]" />
            </div>

            <h3 className="text-4xl font-bold text-[#4b4f5c] mb-3">
              140K
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Orders Delivering every month by our Solution
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8">
            <div className="flex justify-end mb-6">
              <Flag className="w-8 h-8 text-[#2c2c2c]" />
            </div>

            <h3 className="text-4xl font-bold text-[#4b4f5c] mb-3">
              48+
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Countries using our solution and Growing
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8">
            <div className="flex justify-end mb-6">
              <Store className="w-8 h-8 text-[#2c2c2c]" />
            </div>

            <h3 className="text-4xl font-bold text-[#4b4f5c] mb-3">
              20K+
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Business Onboarded on our solution
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-8">
            <div className="flex justify-end mb-6">
              <Users className="w-8 h-8 text-[#2c2c2c]" />
            </div>

            <h3 className="text-4xl font-bold text-[#4b4f5c] mb-3">
              1B+
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Revenue made with this solution and growing.
            </p>
          </div>

        </div>
      </div>
    </section>
  
  {/* 2Digit Innovations  */}
 <section className="bg-[#f7f7f4] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1b3b] mb-14">
        Award-Winning Software Development Company: Recognized by Industry Leaders

        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Capterra */}
          <div className="bg-[#f9f9f6] border-2 border-white rounded-3xl overflow-hidden">
            <div className="flex items-center justify-center h-40">
              <h3 className="text-3xl font-bold text-[#004b87]">Capterra</h3>
            </div>

            <div className="bg-white flex items-center justify-center gap-3 py-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold text-[#0b1b3b]">
                5.0
              </span>
            </div>
          </div>

          {/* Software Advice */}
          <div className="bg-[#f9f9f6] border-2 border-white rounded-3xl overflow-hidden">
            <div className="flex items-center justify-center h-40">
              <h3 className="text-3xl font-bold text-[#2d2a4a]">
                Software <span className="text-orange-500">Advice</span>
              </h3>
            </div>

            <div className="bg-white flex items-center justify-center gap-3 py-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold text-[#0b1b3b]">
                5.0
              </span>
            </div>
          </div>

          {/* GetApp */}
          <div className="bg-[#f9f9f6] border-2 border-white rounded-3xl overflow-hidden">
            <div className="flex items-center justify-center h-40">
              <h3 className="text-3xl font-bold text-[#00a99d]">GetApp</h3>
            </div>

            <div className="bg-white flex items-center justify-center gap-3 py-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold text-[#0b1b3b]">
                5.0
              </span>
            </div>
          </div>

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