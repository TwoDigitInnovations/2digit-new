"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse, GraduationCap, ShoppingCart, Utensils, Truck, Building2, Landmark, Plane, Car, Factory, Dumbbell, Film,
  Milk, Store, Rocket, Cloud, Package, Coffee, ShoppingBag,
  Apple, Smartphone, Layers, Globe, Ticket, Zap, Gift,
  Layout, Server, Edit, MousePointer, Briefcase, Grid, Monitor, Plug,
  ShoppingBag as ShoppingBagIcon, Settings, Boxes, Code, Shirt, Cpu, Sofa, Wrench,
  Map, Users, LocateFixed, Route, Wallet, PackageCheck, Link2, MapPin,
  Palette, Smile, TestTube, PenTool,
  Search, Share2, MousePointerClick, Mail, TrendingUp, BarChart3,
  CheckCircle, Gauge,
  Infinity, GitBranch, CreditCard, CloudUpload, Activity,
  Wrench as WrenchIcon, Headphones, ShieldCheck,
  Compass, ClipboardCheck, PieChart,
  Plug as PlugIcon, Handshake, HelpCircle, LayoutTemplate, BookOpen, Library, FileText
} from "lucide-react";

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

function Tab({ label, active, onHover, href }: { label: string; active: boolean; onHover: () => void; href?: string }) {
  return (
    <Link href={href || "#"} className="block">
      <div
        onMouseEnter={onHover}
        onClick={onHover}
        className={`flex justify-between items-center px-5 py-4 rounded-xl border cursor-pointer transition
          ${active ? "border-[#6B5AFF] bg-purple-50 text-[#6B5AFF]" : "border-gray-200 hover:border-[#6B5AFF] hover:bg-purple-50"}`}
      >
        {label}
        <span>›</span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeFeatureTab, setActiveFeatureTab] = useState("Mobile App Development");
  const [activeSolutionsTab, setActiveSolutionsTab] = useState("industry");
  const [activeTab, setActiveTab] = useState("About Us");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const featureTabs: Record<string, { title: string; icon: React.ReactNode }[]> = {
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
      { title: "E-commerce Website Development", icon: <ShoppingBagIcon size={22} /> },
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
      { title: "API Testing", icon: <PlugIcon size={22} /> },
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
      { title: "Application Maintenance", icon: <WrenchIcon size={22} /> },
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

  const resourceTabs: Record<string, { title: string; icon: React.ReactNode }[]> = {
    "About Us": [
      { title: "Who We Are", icon: <Users size={22} /> },
      { title: "Integrations", icon: <PlugIcon size={22} /> },
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

  return (
    <nav className="relative z-50 py-4 px-6 md:px-12 lg:px-16">
        {/* Purple Ellipse Dot - Fixed & Visible */}
      <div
        className="absolute pointer-events-none z-0 hidden md:block"
        style={{
          width: "600px",
          height: "600px",
          top: "40%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse at center, rgba(107,90,255,0.5) 0%, rgba(107,90,255,0.15) 40%, rgba(107,90,255,0) 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
        {/* Purple Dot */}
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

        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md shadow-md rounded-full px-8 py-3 gap-8">
          {/* Services */}
          <div className="relative" onMouseEnter={() => setActiveMenu("Services")} onMouseLeave={() => setActiveMenu(null)}>
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
                  <div className="w-80 space-y-3">
                    {Object.keys(featureTabs).map((tab) => {
                      const slug = tab.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
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
                    {featureTabs[activeFeatureTab] && featureTabs[activeFeatureTab].length < 15 &&
                      Array.from({ length: 15 - featureTabs[activeFeatureTab].length }).map((_, i) => (
                        <div key={`filler-${i}`} className="invisible" />
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions */}
          <div className="relative" onMouseEnter={() => setActiveMenu("Solutions")} onMouseLeave={() => setActiveMenu(null)}>
            <button className="flex items-center gap-1 font-medium hover:text-[#6B5AFF] transition">
              Solutions <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {activeMenu === "Solutions" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-14 left-1/2 -translate-x-1/2 w-[1100px] bg-white rounded-3xl shadow-2xl p-8 flex gap-8"
                  onMouseEnter={() => setActiveMenu("Solutions")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="w-1/4 space-y-4">
                    <Tab label="By Industry" active={activeSolutionsTab === "industry"} onHover={() => setActiveSolutionsTab("industry")} href="/solutions/by-industry" />
                    <Tab label="By Business" active={activeSolutionsTab === "business"} onHover={() => setActiveSolutionsTab("business")} href="/solutions/by-business" />
                  </div>
                  <div className="w-3/4 grid grid-cols-3 gap-5">
                    {(activeSolutionsTab === "industry" ? industryOptions : businessOptions).map((item) => (
                      <Link
                        key={item.title}
                        href={`/solutions/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group p-5 rounded-2xl border border-gray-200 hover:border-[#6B5AFF] hover:bg-purple-50 transition-all duration-300"
                        onClick={() => setActiveMenu(null)}
                      >
                        <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <div className="font-medium text-gray-800 group-hover:text-[#6B5AFF] transition">{item.title}</div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resources */}
          <div className="relative" onMouseEnter={() => setActiveMenu("Resources")} onMouseLeave={() => setActiveMenu(null)}>
            <button className="flex items-center gap-1 font-medium hover:text-[#6B5AFF] transition">
              Resources <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {activeMenu === "Resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
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
                        <span className="font-medium text-gray-800 group-hover:text-[#6B5AFF]">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/pricing" className="font-medium hover:text-[#6B5AFF] transition">
            Pricing
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#6B5AFF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8B7AFF] transition shadow-md">
              Contact Us
            </button>
          </Link>
        </div>

        <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden z-50">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

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
              <MobileAccordion title="Services">
                <div className="space-y-4 pl-4">
                  {Object.keys(featureTabs).map((tab) => {
                    const slug = tab.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <MobileAccordion key={tab} title={tab}>
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

              <div className="mt-8 space-y-4 border-t pt-6">
                <Link href="/pricing" className="block py-4 text-lg font-medium hover:text-[#6B5AFF] transition" onClick={() => setIsMobileMenuOpen(false)}>
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
  );
}