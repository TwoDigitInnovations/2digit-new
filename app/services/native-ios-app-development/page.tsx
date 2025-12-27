"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Add this import
// import styles from "./features.module.css";
import { ReactNode  } from "react";

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
  HandCoins,
  MonitorCog,
  
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
const [active, setActive] = useState<string | null>(null);

  const closeMobileMenu = () => {
  setIsMobileMenuOpen(false);
};
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

  function Tab({ label, active, onHover }: any) {
    return (
      <div
        onMouseEnter={onHover}
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
  { title: "Native Android App Development", icon: <Smartphone size={22} /> },
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
  { title: "E-commerce Website Development", icon: <ShoppingBag size={22} /> },
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
  { title: "Grocery Delivery App Solution", icon: <ShoppingCart size={22} /> },
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
    { title: "Workforce Management Software", icon: <PackageCheck size={22} /> },
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
  { title: "Artificial Intelligence (AI) & Machine Learning", icon: <Palette size={22} /> },
  { title: "Internet of Things (IoT)", icon: <Smile size={22} /> },
  { title: "Blockchain Development", icon: <Smartphone size={22} /> },
  { title: "Augmented Reality (AR) & Virtual Reality (VR)", icon: <Layout size={22} /> },
  { title: "Chatbots & Conversational AI", icon: <TestTube size={22} /> },
  { title: "Cloud Computing", icon: <Layers size={22} /> },

],


"DIGITAL MARKETING": [
  { title: "Search Engine Optimization (SEO)", icon: <Search size={22} /> },
  { title: "Social Media Marketing (SMM/SMO)", icon: <Share2 size={22} /> },
  { title: "Pay-Per-Click (PPC) Advertising", icon: <MousePointerClick size={22} /> },
  { title: "Content Marketing", icon: <PenTool size={22} /> },
  { title: "Email Marketing", icon: <Mail size={22} /> },
  { title: "Conversion Rate Optimization (CRO)", icon: <TrendingUp size={22} /> },
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
  function MobileAccordion({ title, children, href }: 
    { title: string; 
    children: React.ReactNode
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
    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-white/95 backdrop-blur-md shadow-md rounded-full px-8 py-3 gap-8">
      
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
                        const slug = tab.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
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
      href={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
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
  {featureTabs[activeFeatureTab] && featureTabs[activeFeatureTab].length < 15 && (
    Array.from({ length: 15 - featureTabs[activeFeatureTab].length }).map((_, i) => (
      <div key={`filler-${i}`} className="invisible" />
    ))
  )}
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
                {(activeSolutionsTab === "industry" ? industryOptions : businessOptions).map((item) => (
                  <Link
                    key={item.title}
                    href={`/solutions/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
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
                    href={`/resources/${tab.toLowerCase().replace(/\s+/g, "-")}`}
                  />
                ))}
              </div>

              <div className="w-3/4 grid grid-cols-3 gap-5">
                {resourceTabs[activeTab]?.map((item) => (
                  <Link
                    key={item.title}
                    href={`/resources/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
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
      <Link href="/pricing" className="font-medium hover:text-[#6B5AFF] transition">
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
{/* Services */}
<MobileAccordion title="Services">
  <div className="space-y-4 pl-4">
    {Object.keys(featureTabs).map((tab) => {
      const slug = tab.toLowerCase().replace(/\s+/g, "-");
      return (
       <MobileAccordion
      key={tab}
      title={tab}
      href={`/services/${slug}`}   // ← Yeh link banayega
    >
          {/* Children (sub-items) */}
          <div className="grid gap-3 pl-4">
            {featureTabs[tab].map((item) => (
              <Link
                key={item.title}
                href={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-purple-50 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
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
                      href={`/solutions/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
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
                      href={`/solutions/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
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
                        href={`/resources/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
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
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
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



          {/*  Features Built Grow Business */}

           <section className="bg-[#fff] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0b1437] mb-14">
          Features Built to Grow Your Business
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-[#f7f7f2] border-[6px] border-[#6B5AFF] rounded-[32px] p-8 shadow-sm">
            <HandCoins size={34} className="text-[#0b1437] mb-6" />
            <h3 className="text-xl font-semibold text-[#4a4a4a] mb-4">
              Start Direct Orders on Your Website
            </h3>
            <p className="text-[#6b6b6b] leading-relaxed">
              Launch a branded, commission-free food ordering website that’s
              mobile-ready and fully under your control.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#f7f7f2] border-[6px] border-[#6B5AFF] rounded-[32px] p-8 shadow-sm">
            <Smartphone size={34} className="text-[#0b1437] mb-6" />
            <h3 className="text-xl font-semibold text-[#4a4a4a] mb-4">
              Offer App Convenience to Customers
            </h3>
            <p className="text-[#6b6b6b] leading-relaxed">
              Let your customers order from anywhere with your own white-label
              food ordering app for iOS and Android.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#f7f7f2] border-[6px] border-[#6B5AFF] rounded-[32px] p-8 shadow-sm">
            <QrCode size={34} className="text-[#0b1437] mb-6" />
            <h3 className="text-xl font-semibold text-[#4a4a4a] mb-4">
              Enable QR Code Table Ordering
            </h3>
            <p className="text-[#6b6b6b] leading-relaxed">
              Dine-in customers can scan, browse your menu, order, and pay —
              fast and contact-free.
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
          Why Choose 2DigitInnovations?
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-[#6B5AFF] border-[6px] border-white rounded-[36px] p-10">
            <Rocket size={34} className="text-[#fff] mb-6" />
            <h3 className="text-xl font-semibold text-[#fff] mb-3">
              Launch Fast
            </h3>
            <p className="text-[#fff] leading-relaxed">
              Get your branded platform live in just 3–5 days
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#6B5AFF] border-[6px] border-[#6B5AFF] rounded-[36px] p-10">
            <HandCoins size={34} className="text-[#fff] mb-6" />
            <h3 className="text-xl font-semibold text-[#fff] mb-3">
              Keep 100% Profits
            </h3>
            <p className="text-[#fff] leading-relaxed">
              Say goodbye to commission fees forever
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#6B5AFF] border-[6px] border-white rounded-[36px] p-10">
            <MonitorCog size={34} className="text-[#fff] mb-6" />
            <h3 className="text-xl font-semibold text-[#fff] mb-3">
              One Platform, Total Control
            </h3>
            <p className="text-[#fff] leading-relaxed">
              Website, app, delivery, and orders in one place
            </p>
          </div>

        </div>
      </div>
    </section>      



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
                    // src={item.image}
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
        {/* Who is 2Digit Innovations  */}
   {/* <section className="bg-[#fff] py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0b1437]">
      Who Is Deonde For?
    </h2>
    <p className="mt-4 text-gray-600">
      We support all kinds of food delivery models – local or global:
    </p>
  </div> */}

  {/* CAROUSEL */}
  {/* <div className="relative w-full overflow-hidden">
    <div className="flex gap-6 animate-scroll whitespace-nowrap px-6">
      {[...items, ...items].map((item, i) => (
        <div
          key={i}
          className="inline-block min-w-[280px] sm:min-w-[340px] lg:min-w-[380px] h-[420px] rounded-[28px] overflow-hidden relative shadow-lg"
        >
          <Image src={item.img} alt={item.title} fill className="object-cover" /> */}

          {/* DARK GRADIENT */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" /> */}

          {/* TEXT */}
          {/* <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm leading-relaxed text-gray-200">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}


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


            {/* FAQ */}

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