  "use client";

  import { useEffect, useRef, useState } from "react";
  import { useParams } from "next/navigation";
  import {
    motion,
    useMotionValue,
    useSpring,
    AnimatePresence,
  } from "framer-motion";
  import {  Menu, X, ChevronRight } from "lucide-react";
  import Image from "next/image";
  import Link from "next/link"; // Add this import
  import PhoneInput from "react-phone-input-2";

import { ReactNode } from "react";
  import {
    Pizza,
    Twitter,
    Facebook,
    Linkedin,
    ArrowUp,  
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
    ChevronUp, ChevronDown ,
  } from "lucide-react";

  export default function Home() {
      const params = useParams();
      const slug = params?.slug as string;
      const [blog, setBlog] = useState<any>(null);
      const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [phone, setPhone] = useState("");
    const [isOpen, setIsOpen] = useState(false);
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const [activeSection, setActiveSection] = useState('introduction')
  const [visibleBlogs, setVisibleBlogs] = useState<Blog[]>([]);
  

      // Fetch blog data
      useEffect(() => {
        if (!slug) return;
        fetch(`https://api.2digitinnovations.com/v1/api/getBlogBySlug/${slug}`)
          .then((res) => res.json())
          .then((res) => setBlog(res.data))
          .catch((err) => console.error("Blog fetch error:", err));
      }, [slug]);


// useEffect for Intersection Observer
useEffect(() => {
  const sections = [
    'introduction',
    'ai-journey',
    'learn-phase',
    'buy-phase',
    'use-phase',
    'meeting-consumers',
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => ({
          id: entry.target.id,
          top: entry.boundingClientRect.top,
        }));

      if (visible.length > 0) {
        visible.sort((a, b) => a.top - b.top);
        setActiveSection(visible[0].id); // Yeh state update hoga
      }
    },
    {
      rootMargin: '-10% 0px -65% 0px',
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1.0],
    }
  );

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []); // Empty dependency array

const NavLink = ({ 
  href, 
  children, 
  indent = ''
}: { 
  href: string; 
  children: React.ReactNode; 
  indent?: string; 
}) => {
  const sectionId = href.replace('#', '');
  const isActive = activeSection === sectionId;

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.scrollBy(0, -120); // Apne header height ke hisaab se adjust
        }
      }}
      className={`
        relative block py-3 px-6 -mx-6 rounded-full
        transition-all duration-400 ease-in-out group
        ${indent}
        ${
          isActive
            ? 'text-white font-medium bg-indigo-600 shadow-lg translate-x-2'
            : 'text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 hover:translate-x-2'
        }
      `}
    >
      {/* Active Pill Background Effect */}
      {isActive && (
        <span className="absolute inset-0 bg-indigo-600 rounded-full -z-10" />
      )}

      {/* Left Indicator Dot */}
      <span className={`
        inline-block w-2.5 h-2.5 rounded-full mr-4 transition-all duration-400
        ${isActive ? 'bg-white scale-110' : 'bg-gray-400 group-hover:bg-indigo-500 group-hover:scale-110'}
      `} />

      <span className="relative">{children}</span>
    </a>
  );
};


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

    const sections = [
      "Introduction",
      "AI across the insurance consumer journey",
      "The Learn phase: Policy comparison capabilities bolster comfort with AI",
      "The Buy phase: Trust issues and high stakes force an AI inclination drop",
      "The Use phase: Big opportunities despite low AI interest",
      "Meeting consumers where they are in insurance",
    ];

    const authors = [
    {
      name: "Ramona Balaratnam",
      role: "Manager, Cognizant Research",
      img: "/authors/ramona.jpg",
      linkedin: "#",
    },
    {
      name: "Craig Weber",
      role: "Head of Strategy, Insurance",
      img: "/authors/craig.jpg",
      linkedin: "#",
    },
    {
      name: "Nageswar Cherukupalli",
      role: "Senior Vice President, Banking & Financial Services Head",
      img: "/authors/nageswar.jpg",
      linkedin: "#",
    },
    {
      name: "Pankesh Upadhyay",
      role: "VP – Head of Insurance, APJ",
      img: "/authors/pankesh.jpg",
      linkedin: "#",
    },
  ];

  

type Blog = {
  id: string;
  title: string;
  slug: string;
  image?: string;
  excerpt?: string;
  content?: string;
};

type BlogItem = {
  slug: string;
  blog_slug?: string;
  blog_title?: string;
  blog_image?: string;
  blog_content?: string;
};

const BLOGS_PER_PAGE = 6;

function MobileAccordion({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href?: string;
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

function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://api.2digitinnovations.com/v1/api/get-blog");
        const result = await res.json();

        if (result?.data) {
          const formattedBlogs: Blog[] = result.data.map((item: BlogItem) => ({
            id: item.slug,
            title: item.blog_title || "",
            image: item.blog_image || "/placeholder.jpg",
            excerpt:
              item.blog_content?.replace(/<[^>]*>/g, "").slice(0, 120) + "...",
            slug: item.slug,
            content: item.blog_content,
          }));
          setBlogs(formattedBlogs);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("API Error", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);

  const visibleBlogs = expanded
    ? filteredBlogs.slice(0, page * BLOGS_PER_PAGE)
    : filteredBlogs.slice(0, BLOGS_PER_PAGE);

  if (loading) return <p>Loading blogs...</p>;
  if (filteredBlogs.length === 0) return <p>No blogs found</p>;

  return null;
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

    {/*  Blog-1 */}

    {/* <main className="max-w-4xl mx-auto py-20 px-4"> */}
    
   

          {/* Blog Content (example sections) */}
    <section className="bg-white">
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-27">
            {/* Main Content */}
            <article className="lg:col-span-8 pr-2">
              <div className="space-y-10">
                <div className="text-sm text-gray-600 mb-6">August 21, 2025</div>

                <div className="flex gap-3 mb-10">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition">
                    <Twitter className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition">
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </button>
                </div>

                <h2 className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight mb-16">
                  What consumer preferences reveal about the future of AI in insurance
                </h2>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-20">
                  {/* Introduction */}
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-lg sm:text-xl font-semibold">
                      Our AI Inclination Index reveals which consumers are most open to using AI in their insurance journey—and how insurers can meet them where they are.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed mt-8">
                      Artificial intelligence is rapidly transforming the insurance industry. From personalized policy recommendations to automated claims processing, AI promises to make insurance more efficient, accessible, and customer-centric. But here's the critical question: Are consumers ready for AI-powered insurance?
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed mt-6">
                      Our latest research reveals a nuanced picture. While some consumers are enthusiastic about AI's potential to simplify their insurance experience, others remain skeptical or prefer traditional human interaction. Understanding these different attitudes is crucial for insurers looking to successfully integrate AI into their operations.
                    </p>
                  </div>

                  {/* AI across the insurance consumer journey */}
                  <div id="ai-journey" className="scroll-mt-32">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
                      AI across the insurance consumer journey
                    </h2>

                    <p className="text-base sm:text-lg leading-relaxed">
                      To understand consumer attitudes toward AI in insurance, we examined preferences across three critical phases of the insurance journey: Learn, Buy, and Use. Each phase presents unique opportunities for AI integration—and unique consumer concerns.
                    </p>
                  </div>

                  {/* Learn Phase */}
                  <div id="learn-phase" className="scroll-mt-32">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                      The Learn phase: Policy comparison capabilities bolster comfort with AI
                    </h3>

                    <p className="text-base sm:text-lg leading-relaxed">
                      During the Learn phase, consumers are researching insurance options, comparing policies, and trying to understand complex coverage terms. This is where AI chatbots, personalized recommendations, and educational content can shine.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed mt-6">
                      Our research found that 68% of consumers are comfortable using AI-powered tools to compare insurance policies, while 54% appreciate AI-generated explanations of coverage terms. However, trust remains a concern—consumers want transparency about how AI makes recommendations.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-8 my-12 rounded-lg">
                      <p className="text-base font-medium text-blue-900">
                        Key Insight: Younger consumers (ages 25-34) show 40% higher comfort with AI-powered learning tools compared to consumers over 55.
                      </p>
                    </div>
                  </div>

                  {/* Buy Phase */}
                  <div id="buy-phase" className="scroll-mt-32">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                      The Buy phase: Trust issues and high stakes force an AI inclination drop
                    </h3>

                    <p className="text-base sm:text-lg leading-relaxed">
                      The purchase decision is a critical moment. While AI can streamline the buying process through instant quotes and automated underwriting, consumers often want human reassurance before committing.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed mt-6">
                      Interestingly, 61% of consumers are comfortable with AI handling routine aspects of the buying process (like form filling and document verification), but 73% still prefer speaking with a human agent before finalizing their purchase. This suggests a hybrid approach may be most effective.
                    </p>
                  </div>

                  {/* Use Phase */}
                  <div id="use-phase" className="scroll-mt-32">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                      The Use phase: Big opportunities despite low AI interest
                    </h3>

                    <p className="text-base sm:text-lg leading-relaxed">
                      After purchase, consumers interact with their insurer primarily through claims, policy changes, and customer service inquiries. AI shows strong potential here, particularly for routine tasks.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed mt-6">
                      Our data shows 71% of consumers are willing to use AI for simple claims like windshield replacement or minor property damage. However, for major claims (accidents with injuries, total loss events), 89% want human involvement from the start.
                    </p>

                    <div className="overflow-x-auto my-12">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900">Task Type</th>
                            <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900">AI Acceptance</th>
                            <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900">Human Preference</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-8 py-5 text-sm text-gray-700">Simple claims</td>
                            <td className="px-8 py-5 text-sm text-green-600 font-medium">71%</td>
                            <td className="px-8 py-5 text-sm text-gray-600">29%</td>
                          </tr>
                          <tr>
                            <td className="px-8 py-5 text-sm text-gray-700">Policy changes</td>
                            <td className="px-8 py-5 text-sm text-green-600 font-medium">65%</td>
                            <td className="px-8 py-5 text-sm text-gray-600">35%</td>
                          </tr>
                          <tr>
                            <td className="px-8 py-5 text-sm text-gray-700">Complex claims</td>
                            <td className="px-8 py-5 text-sm text-red-600 font-medium">11%</td>
                            <td className="px-8 py-5 text-sm text-gray-600">89%</td>
                          </tr>
                          <tr>
                            <td className="px-8 py-5 text-sm text-gray-700">Billing inquiries</td>
                            <td className="px-8 py-5 text-sm text-green-600 font-medium">78%</td>
                            <td className="px-8 py-5 text-sm text-gray-600">22%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Meeting Consumers Section */}
                  <div id="meeting-consumers" className="scroll-mt-32">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
                      Meeting consumers where they are in insurance
                    </h2>

                    <p className="text-base sm:text-lg leading-relaxed">
                      The key to successful AI adoption in insurance isn't just about technology—it's about understanding consumer comfort levels and providing choice. Our research points to several strategic imperatives for insurers.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-10 sm:p-12 my-12">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Strategic Recommendations</h3>
                      <div className="space-y-8">
                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Offer hybrid experiences</h4>
                            <p className="text-gray-700">Let AI handle routine tasks while keeping humans available for complex situations and emotional support.</p>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Build transparency</h4>
                            <p className="text-gray-700">Clearly communicate when AI is being used and how it makes decisions.</p>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Segment your approach</h4>
                            <p className="text-gray-700">Younger, tech-savvy consumers may embrace AI more readily, while others prefer traditional service.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg leading-relaxed mt-8">
                      The future of insurance isn't about choosing between AI and human service—it's about creating intelligent systems that enhance both efficiency and empathy. Insurers who get this balance right will build stronger customer relationships while realizing the operational benefits of automation.
                    </p>
                  </div>

                  {/* About the Research */}
                  <div className="bg-[#272760] rounded-2xl my-20 p-10 sm:p-14">
                    <h2 className="text-white text-3xl sm:text-4xl font-light mb-8">About the research</h2>
                    <p className="text-white text-lg sm:text-2xl leading-relaxed">
                      This research is based on our <span className="text-teal-300 underline underline-offset-4 cursor-pointer">"New minds, new markets"</span> study, which surveyed 5,000 insurance consumers across North America about their attitudes toward AI and digital transformation in insurance services.
                    </p>
                  </div>

                  {/* Dropdown */}
                  <div className="my-20">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white border-2 border-gray-200 rounded-xl p-8 flex items-center justify-between hover:border-blue-500 transition group"
                    >
                      <span className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                        View full research methodology
                      </span>
                      {isDropdownOpen ? (
                        <ChevronUp className="w-7 h-7 text-gray-600 group-hover:text-blue-600" />
                      ) : (
                        <ChevronDown className="w-7 h-7 text-gray-600 group-hover:text-blue-600" />
                      )}
                    </button>

                    {isDropdownOpen && (
                      <div className="mt-6 bg-gray-50 rounded-2xl p-8 sm:p-10 space-y-6">
                        <p className="text-gray-700">
                          <strong>Sample Size:</strong> 5,000 insurance consumers across the United States and Canada
                        </p>
                        <p className="text-gray-700">
                          <strong>Survey Period:</strong> June - July 2025
                        </p>
                        <p className="text-gray-700">
                          <strong>Methodology:</strong> Online quantitative survey with demographic weighting to ensure representative sample
                        </p>
                        <p className="text-gray-700">
                          <strong>Key Demographics:</strong> Ages 18-65+, diverse income levels, mix of insurance types (auto, home, life, health)
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* RIGHT: Sticky Sidebar */}
            <aside className="hidden lg:block col-span-4">
              <div className="sticky top-24">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-600 rounded-full inline-block" />
                    Jump to a section
                  </h2>

                  <nav className="space-y-3">
                    <NavLink href="#introduction">Introduction</NavLink>
                    <NavLink href="#ai-journey">AI across the insurance consumer journey</NavLink>
                    <NavLink href="#learn-phase" indent="pl-8">The Learn phase: Policy comparison capabilities bolster comfort with AI</NavLink>
                    <NavLink href="#buy-phase" indent="pl-8">The Buy phase: Trust issues and high stakes force an AI inclination drop</NavLink>
                    <NavLink href="#use-phase" indent="pl-8">The Use phase: Big opportunities despite low AI interest</NavLink>
                    <NavLink href="#meeting-consumers">Meeting consumers where they are in insurance</NavLink>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>

  {/* Author Section */}
  <section className="bg-[#6B5AFF] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-3xl font-semibold mb-12">Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {authors.map((author, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-4"
              >
                {/* <Image
                  src={author.img}
                  alt={author.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                /> */}
                <div className="text-center md:text-left">
                  <h3 className="text-white text-xl font-semibold">
                    {author.name}
                  </h3>
                  <p className="text-gray-300">{author.role}</p>
                  {/* <Link href={author.linkedin}> */}
                    <a className="mt-2 inline-block text-cyan-400 font-bold">
                      Follow <span className="ml-1">in</span>
                    </a>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Blog Section

      <section className="bg-[#f8f7f3] py-24 px-4">
        <div className="max-w-7xl mx-auto mb-16 text-center">
      <h2 className="text-4xl font-semibold text-gray-900">
        Recent Blogs
      </h2>
    </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {visibleBlogs.length > 0 ? (
              visibleBlogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-3xl overflow-hidden">
                  <div className="relative h-56">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                  </div>
                  

                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                  <Link
    href={`/resources/blog/${blog.slug}`}
    className="mt-auto text-orange-500 font-medium"
  >
    Read More →
  </Link>

                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No blogs found
              </p>
            )}
          </div>

          {/* CONTROLS */}
          {/* <div className="text-center mt-16 space-x-4">
            
            {!expanded && filteredBlogs.length > BLOGS_PER_PAGE && (
              <button
                onClick={() => setExpanded(true)}
                className="bg-orange-500 text-white px-10 py-3 rounded-full"
              >
                See More
              </button>
            )}

            {expanded && (
              <>
                {page < totalPages && (
                  <button
                    onClick={() => setPage(page + 1)}
                    className="bg-orange-500 text-white px-8 py-3 rounded-full"
                  >
                    Load More
                  </button>
                )}

                <button
                  onClick={() => {
                    setExpanded(false);
                    setPage(1);
                  }}
                  className="border border-orange-500 text-orange-500 px-8 py-3 rounded-full"
                >
                  See Less
                </button>
              </>
            )}
          </div> 
        </section> */}


        {/*  */}
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

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";

// export default function BlogPage() {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!slug) return;

//     fetch(`https://api.2digitinnovations.com/v1/api/getBlogBySlug/${slug}`)
//       .then((res) => res.json())
//       .then((res) => setBlog(res.data))
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, [slug]);

//   if (loading) return <p>Loading...</p>;
//   if (!blog) return <p>Blog not found</p>;

//   const imageSrc =
//     typeof blog.image === "string" && blog.image.trim() !== ""
//       ? blog.image
//       : "/placeholder.jpg";

//   return (
//     <main className="max-w-4xl mx-auto py-20 px-4">
//       <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>

//  <img
//   src={blog?.blog_image || "/placeholder.jpg"} // agar blog_image undefined ho to placeholder
//   alt={blog?.blog_title || "Blog Image"}
// />



//       <div
//         className="prose"
//         dangerouslySetInnerHTML={{ __html: blog.content }}
//       />
//     </main>
//   );
// }

