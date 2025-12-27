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
import { ReactNode } from "react";
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
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaPinterestP,
} from "react-icons/fa";

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
  const countries = [
    { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
    { name: "Albania", code: "+355", flag: "🇦🇱" },
    { name: "Algeria", code: "+213", flag: "🇩🇿" },
    { name: "Andorra", code: "+376", flag: "🇦🇩" },
    { name: "Angola", code: "+244", flag: "🇦🇴" },
    { name: "Antigua and Barbuda", code: "+1 268", flag: "🇦🇬" },
    { name: "Argentina", code: "+54", flag: "🇦🇷" },
    { name: "Armenia", code: "+374", flag: "🇦🇲" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "Austria", code: "+43", flag: "🇦🇹" },
    { name: "Azerbaijan", code: "+994", flag: "🇦🇿" },
    { name: "Bahamas", code: "+1 242", flag: "🇧🇸" },
    { name: "Bahrain", code: "+973", flag: "🇧🇭" },
    { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
    { name: "Barbados", code: "+1 246", flag: "🇧🇧" },
    { name: "Belarus", code: "+375", flag: "🇧🇾" },
    { name: "Belgium", code: "+32", flag: "🇧🇪" },
    { name: "Belize", code: "+501", flag: "🇧🇿" },
    { name: "Benin", code: "+229", flag: "🇧🇯" },
    { name: "Bhutan", code: "+975", flag: "🇧🇹" },
    { name: "Bolivia", code: "+591", flag: "🇧🇴" },
    { name: "Bosnia & Herzegovina", code: "+387", flag: "🇧🇦" },
    { name: "Botswana", code: "+267", flag: "🇧🇼" },
    { name: "Brazil", code: "+55", flag: "🇧🇷" },
    { name: "Brunei", code: "+673", flag: "🇧🇳" },
    { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
    { name: "Burkina Faso", code: "+226", flag: "🇧🇫" },
    { name: "Burundi", code: "+257", flag: "🇧🇮" },
    { name: "Cambodia", code: "+855", flag: "🇰🇭" },
    { name: "Cameroon", code: "+237", flag: "🇨🇲" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "Cape Verde", code: "+238", flag: "🇨🇻" },
    { name: "Central African Republic", code: "+236", flag: "🇨🇫" },
    { name: "Chad", code: "+235", flag: "🇹🇩" },
    { name: "Chile", code: "+56", flag: "🇨🇱" },
    { name: "China", code: "+86", flag: "🇨🇳" },
    { name: "Colombia", code: "+57", flag: "🇨🇴" },
    { name: "Comoros", code: "+269", flag: "🇰🇲" },
    { name: "Congo (Brazzaville)", code: "+242", flag: "🇨🇬" },
    { name: "Congo (Kinshasa)", code: "+243", flag: "🇨🇩" },
    { name: "Costa Rica", code: "+506", flag: "🇨🇷" },
    { name: "Croatia", code: "+385", flag: "🇭🇷" },
    { name: "Cuba", code: "+53", flag: "🇨🇺" },
    { name: "Cyprus", code: "+357", flag: "🇨🇾" },
    { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
    { name: "Denmark", code: "+45", flag: "🇩🇰" },
    { name: "Djibouti", code: "+253", flag: "🇩🇯" },
    { name: "Dominica", code: "+1 767", flag: "🇩🇲" },
    { name: "Dominican Republic", code: "+1 849", flag: "🇩🇴" },
    { name: "Ecuador", code: "+593", flag: "🇪🇨" },
    { name: "Egypt", code: "+20", flag: "🇪🇬" },
    { name: "El Salvador", code: "+503", flag: "🇸🇻" },
    { name: "Equatorial Guinea", code: "+240", flag: "🇬🇶" },
    { name: "Eritrea", code: "+291", flag: "🇪🇷" },
    { name: "Estonia", code: "+372", flag: "🇪🇪" },
    { name: "Eswatini", code: "+268", flag: "🇸🇿" },
    { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
    { name: "Fiji", code: "+679", flag: "🇫🇯" },
    { name: "Finland", code: "+358", flag: "🇫🇮" },
    { name: "France", code: "+33", flag: "🇫🇷" },
    { name: "Gabon", code: "+241", flag: "🇬🇦" },
    { name: "Gambia", code: "+220", flag: "🇬🇲" },
    { name: "Georgia", code: "+995", flag: "🇬🇪" },
    { name: "Germany", code: "+49", flag: "🇩🇪" },
    { name: "Ghana", code: "+233", flag: "🇬🇭" },
    { name: "Greece", code: "+30", flag: "🇬🇷" },
    { name: "Grenada", code: "+1 473", flag: "🇬🇩" },
    { name: "Guatemala", code: "+502", flag: "🇬🇹" },
    { name: "Guinea", code: "+224", flag: "🇬🇳" },
    { name: "Guinea-Bissau", code: "+245", flag: "🇬🇼" },
    { name: "Guyana", code: "+592", flag: "🇬🇾" },
    { name: "Haiti", code: "+509", flag: "🇭🇹" },
    { name: "Honduras", code: "+504", flag: "🇭🇳" },
    { name: "Hungary", code: "+36", flag: "🇭🇺" },
    { name: "Iceland", code: "+354", flag: "🇮🇸" },
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "Indonesia", code: "+62", flag: "🇮🇩" },
    { name: "Iran", code: "+98", flag: "🇮🇷" },
    { name: "Iraq", code: "+964", flag: "🇮🇶" },
    { name: "Ireland", code: "+353", flag: "🇮🇪" },
    { name: "Israel", code: "+972", flag: "🇮🇱" },
    { name: "Italy", code: "+39", flag: "🇮🇹" },
    { name: "Jamaica", code: "+1 876", flag: "🇯🇲" },
    { name: "Japan", code: "+81", flag: "🇯🇵" },
    { name: "Jordan", code: "+962", flag: "🇯🇴" },
    { name: "Kazakhstan", code: "+7 7", flag: "🇰🇿" },
    { name: "Kenya", code: "+254", flag: "🇰🇪" },
    { name: "Kiribati", code: "+686", flag: "🇰🇮" },
    { name: "Kuwait", code: "+965", flag: "🇰🇼" },
    { name: "Kyrgyzstan", code: "+996", flag: "🇰🇬" },
    { name: "Laos", code: "+856", flag: "🇱🇦" },
    { name: "Latvia", code: "+371", flag: "🇱🇻" },
    { name: "Lebanon", code: "+961", flag: "🇱🇧" },
    { name: "Lesotho", code: "+266", flag: "🇱🇸" },
    { name: "Liberia", code: "+231", flag: "🇱🇷" },
    { name: "Libya", code: "+218", flag: "🇱🇾" },
    { name: "Liechtenstein", code: "+423", flag: "🇱🇮" },
    { name: "Lithuania", code: "+370", flag: "🇱🇹" },
    { name: "Luxembourg", code: "+352", flag: "🇱🇺" },
    { name: "Madagascar", code: "+261", flag: "🇲🇬" },
    { name: "Malawi", code: "+265", flag: "🇲🇼" },
    { name: "Malaysia", code: "+60", flag: "🇲🇾" },
    { name: "Maldives", code: "+960", flag: "🇲🇻" },
    { name: "Mali", code: "+223", flag: "🇲🇱" },
    { name: "Malta", code: "+356", flag: "🇲🇹" },
    { name: "Marshall Islands", code: "+692", flag: "🇲🇭" },
    { name: "Mauritania", code: "+222", flag: "🇲🇷" },
    { name: "Mauritius", code: "+230", flag: "🇲🇺" },
    { name: "Mexico", code: "+52", flag: "🇲🇽" },
    { name: "Micronesia", code: "+691", flag: "🇫🇲" },
    { name: "Moldova", code: "+373", flag: "🇲🇩" },
    { name: "Monaco", code: "+377", flag: "🇲🇨" },
    { name: "Mongolia", code: "+976", flag: "🇲🇳" },
    { name: "Montenegro", code: "+382", flag: "🇲🇪" },
    { name: "Morocco", code: "+212", flag: "🇲🇦" },
    { name: "Mozambique", code: "+258", flag: "🇲🇿" },
    { name: "Myanmar", code: "+95", flag: "🇲🇲" },
    { name: "Namibia", code: "+264", flag: "🇳🇦" },
    { name: "Nauru", code: "+674", flag: "🇳🇷" },
    { name: "Nepal", code: "+977", flag: "🇳🇵" },
    { name: "Netherlands", code: "+31", flag: "🇳🇱" },
    { name: "New Zealand", code: "+64", flag: "🇳🇿" },
    { name: "Nicaragua", code: "+505", flag: "🇳🇮" },
    { name: "Niger", code: "+227", flag: "🇳🇪" },
    { name: "Nigeria", code: "+234", flag: "🇳🇬" },
    { name: "North Macedonia", code: "+389", flag: "🇲🇰" },
    { name: "Norway", code: "+47", flag: "🇳🇴" },

    { name: "Oman", code: "+968", flag: "🇴🇲" },

    { name: "Pakistan", code: "+92", flag: "🇵🇰" },
    { name: "Palau", code: "+680", flag: "🇵🇼" },
    { name: "Panama", code: "+507", flag: "🇵🇦" },
    { name: "Papua New Guinea", code: "+675", flag: "🇵🇬" },
    { name: "Paraguay", code: "+595", flag: "🇵🇾" },
    { name: "Peru", code: "+51", flag: "🇵🇪" },
    { name: "Philippines", code: "+63", flag: "🇵🇭" },
    { name: "Poland", code: "+48", flag: "🇵🇱" },
    { name: "Portugal", code: "+351", flag: "🇵🇹" },

    { name: "Qatar", code: "+974", flag: "🇶🇦" },

    { name: "Romania", code: "+40", flag: "🇷🇴" },
    { name: "Russia", code: "+7", flag: "🇷🇺" },
    { name: "Rwanda", code: "+250", flag: "🇷🇼" },

    { name: "Saint Kitts and Nevis", code: "+1 869", flag: "🇰🇳" },
    { name: "Saint Lucia", code: "+1 758", flag: "🇱🇨" },
    { name: "Saint Vincent & Grenadines", code: "+1 784", flag: "🇻🇨" },
    { name: "Samoa", code: "+685", flag: "🇼🇸" },
    { name: "San Marino", code: "+378", flag: "🇸🇲" },
    { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
    { name: "Senegal", code: "+221", flag: "🇸🇳" },
    { name: "Serbia", code: "+381", flag: "🇷🇸" },
    { name: "Seychelles", code: "+248", flag: "🇸🇨" },
    { name: "Singapore", code: "+65", flag: "🇸🇬" },
    { name: "Slovakia", code: "+421", flag: "🇸🇰" },
    { name: "Slovenia", code: "+386", flag: "🇸🇮" },
    { name: "South Africa", code: "+27", flag: "🇿🇦" },
    { name: "South Korea", code: "+82", flag: "🇰🇷" },
    { name: "Spain", code: "+34", flag: "🇪🇸" },
    { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
    { name: "Sudan", code: "+249", flag: "🇸🇩" },
    { name: "Sweden", code: "+46", flag: "🇸🇪" },
    { name: "Switzerland", code: "+41", flag: "🇨🇭" },

    { name: "Thailand", code: "+66", flag: "🇹🇭" },
    { name: "Turkey", code: "+90", flag: "🇹🇷" },
    { name: "Tunisia", code: "+216", flag: "🇹🇳" },

    { name: "Ukraine", code: "+380", flag: "🇺🇦" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    // { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "Uruguay", code: "+598", flag: "🇺🇾" },

    { name: "Uzbekistan", code: "+998", flag: "🇺🇿" },

    { name: "Vatican City", code: "+379", flag: "🇻🇦" },
    { name: "Venezuela", code: "+58", flag: "🇻🇪" },
    { name: "Vietnam", code: "+84", flag: "🇻🇳" },

    { name: "Yemen", code: "+967", flag: "🇾🇪" },

    { name: "Zambia", code: "+260", flag: "🇿🇲" },
    { name: "Zimbabwe", code: "+263", flag: "🇿🇼" },
    // add more similarly if needed
  ];

  // API

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  

  // Mobile Accordion Component
  function MobileAccordion({
    title,
    children,
      href, // ✅ Add this

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

      {/* Section On TERMS */}




     

     <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
         <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20">
      Shipping Policy
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          We combine technical expertise with creative thinking to deliver
          solutions that actually work for your business. Our team has
          successfully completed over 500 projects across various industries,
          from small startups to large enterprises. We focus on understanding
          your specific needs and building custom solutions that solve real
          problems and drive measurable results.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis tempore eius molestiae quod architecto quos quasi ducimus mollitia aliquid impedit harum consequuntur voluptatem esse sit, veritatis excepturi aspernatur cum.

        </p>
</div>



 {/* Footer */}

      <footer className="bg-[#6c5ce7] text-white pt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Social */}
          <div>
            <img
              src="/logo.png"
              alt="2Digit Innovations"
              className="w-44 mb-4"
            />
            <h4 className="text-lg font-semibold mb-3">Follow</h4>
            <div className="flex gap-3 flex-wrap">
              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaDribbble,
                FaBehance,
                FaPinterestP,
              ].map((Icon, i) => (
                <span
                  key={i}
                  className="border border-white p-2 rounded-full hover:bg-white hover:text-[#6c5ce7] transition"
                >
                  <Icon size={14} />
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>App Development</li>
              <li>Web App Development</li>
              <li>Eccomerce Development</li>
              <li>Ready-Made App Solutions</li>
              <li>UI And UX Designing</li>
              <li>Custom Mobile Software Development</li>
              <li>Emerging Technologies</li>
              <li>Digital Marketing</li>
              <li>Quality Assurance Testing</li>
              <li>Devops Cloud Services</li>
              <li>Maintanence Support </li>
              <li>Consulting Services</li>
            </ul>
          </div>

          {/* Quick Links */}
               <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Our Apps</Link>
              </li>
              <li>
                <Link href="/clutch">Find us on Clutch</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy & Policy</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping & Delivery Policy</Link>
              </li>
              <li>
                <Link href="/refund">Return & Refund Policy</Link>
              </li>
              <li>
                <Link href="/term">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/legal">Legal</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-sm leading-relaxed">
              Hyde Park Crown First Floor, FF-14-21 Plot No GH-03 Sector-78,
              Noida, Uttar Pradesh 201306
            </p>

            <p className="mt-3 text-sm text-yellow-300">
              info@2digitinnovations.com
            </p>
            <p className="mt-1 text-sm text-yellow-300">+91 7814042409</p>

            <div className="mt-4 flex items-center gap-2 border-b border-white pb-1">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent outline-none text-sm placeholder:text-white flex-1"
              />
              <button className="text-sm font-semibold">Send</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 mt-12 py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright © 2025{" "}
            <span className="text-yellow-400 font-semibold">
              2Digit Innovations PVT LTD.
            </span>{" "}
            All Rights Reserved
          </p>

          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium"
          >
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
