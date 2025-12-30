"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import BlogSection from "../../../components/BlogSection";

import {
  Mail,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

type RelatedBlog = {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
};

const RELATED_BLOGS_PER_PAGE = 3;

export default function BlogDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<any>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<RelatedBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("introduction");
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(1);

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "ai-journey", label: "AI across the insurance consumer journey" },
    { id: "learn-phase", label: "The Learn phase" },
    { id: "buy-phase", label: "The Buy phase" },
    { id: "use-phase", label: "The Use phase" },
    { id: "meeting-consumers", label: "Meeting consumers where they are" },
  ];

  // Fetch Single Blog
  useEffect(() => {
    if (!slug) return;

    fetch(`https://api.2digitinnovations.com/v1/api/getBlogBySlug/${slug}`)
      .then((res) => res.json())
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  // Fetch Related Blogs
  useEffect(() => {
    fetch("https://api.2digitinnovations.com/v1/api/get-blog")
      .then((res) => res.json())
      .then((result) => {
        if (result?.data) {
          const formatted = (result.data as any[])
            .filter((item) => item.slug !== slug)
            .map((item) => ({
              id: item.slug,
              title: item.blog_title || "Untitled",
              slug: item.slug,
              image: item.blog_image || "/placeholder.jpg",
              excerpt: (item.blog_content?.replace(/<[^>]*>/g, "") || "").slice(0, 120) + "...",
            }));
          setRelatedBlogs(formatted);
        }
        setRelatedLoading(false);
      });
  }, [slug]);

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blog]);

  const totalPages = Math.ceil(relatedBlogs.length / RELATED_BLOGS_PER_PAGE);
  const visibleRelated = expanded
    ? relatedBlogs.slice(0, page * RELATED_BLOGS_PER_PAGE)
    : relatedBlogs.slice(0, RELATED_BLOGS_PER_PAGE);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-2xl">Loading...</p></div>;
  if (!blog) return <div className="min-h-screen flex items-center justify-center"><p className="text-2xl">Blog not found</p></div>;

  // Share URL & Title
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(blog.blog_title || "Check out this blog");
  const shareUrl = encodeURIComponent(currentUrl);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* <BlogSection /> */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <article className="lg:col-span-3 space-y-20">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
            {blog.blog_title}
          </h1>

          {/* Featured Image */}
          <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={blog.blog_image || "/placeholder.jpg"}
              alt={blog.blog_title}
              fill
              className="object-cover"
            />
          </div>

          {/* Social Share Icons - Image ke neeche */}
          <div className="flex flex-wrap justify-center items-center gap-8 py-10 border-b border-gray-200">
            <span className="text-gray-700 font-medium text-lg">Share this article:</span>
            <div className="flex gap-4">
              {/* Email */}
              <a
                href={`mailto:?subject=${shareTitle}&body=Read this article: ${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-100 rounded-full hover:bg-[#6B5AFF] transition-all duration-300"
                aria-label="Share via Email"
              >
                <Mail className="w-6 h-6 text-gray-700 group-hover:text-white transition" />
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-100 rounded-full hover:bg-[#1877F2] transition-all duration-300"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-6 h-6 text-gray-700 group-hover:text-white transition" />
              </a>

              {/* Twitter / X */}
              <a
                href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-100 rounded-full hover:bg-black transition-all duration-300"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-6 h-6 text-gray-700 group-hover:text-white transition" />
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-100 rounded-full hover:bg-[#0A66C2] transition-all duration-300"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-white transition" />
              </a>
            </div>
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 mt-12"
            dangerouslySetInnerHTML={{ __html: blog.blog_content }}
          />

          {/* Manual Sections for TOC */}
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32 mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.label}</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>Content for {section.label}...</p>
              </div>
            </section>
          ))}
        </article>

        {/* Table of Contents Sidebar */}
        <aside className="hidden lg:block sticky top-24 self-start">
          <div className="bg-purple-50/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-200">
            <h3 className="font-bold text-xl text-gray-900 mb-8">On this page</h3>
            <nav className="space-y-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block py-3 px-6 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-[#6B5AFF] text-white shadow-lg"
                      : "text-gray-700 hover:bg-purple-100 hover:text-[#6B5AFF]"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      {/* Authors Section */}
      <section className="bg-[#6B5AFF] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-white text-4xl font-bold mb-12">Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {["Ramona Balaratnam", "Craig Weber", "Nageswar Cherukupalli", "Pankesh Upadhyay"].map((name) => (
              <div key={name} className="text-center">
                <div className="w-40 h-40 mx-auto bg-white/20 rounded-full mb-6" />
                <h3 className="text-white text-xl font-semibold">{name}</h3>
                <p className="text-purple-200 mt-2">Senior Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Related Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visibleRelated.map((b) => (
              <Link key={b.id} href={`/resources/blog/${b.slug}`}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <div className="relative h-56">
                    <Image src={b.image} alt={b.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">{b.excerpt}</p>
                    <span className="text-[#6B5AFF] font-semibold">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            {!expanded && relatedBlogs.length > RELATED_BLOGS_PER_PAGE && (
              <button
                onClick={() => setExpanded(true)}
                className="bg-[#6B5AFF] hover:bg-[#5948CC] text-white px-12 py-5 rounded-full font-bold shadow-2xl"
              >
                See More Blogs
              </button>
            )}
            {expanded && page < totalPages && (
              <button
                onClick={() => setPage(page + 1)}
                className="bg-[#6B5AFF] hover:bg-[#5948CC] text-white px-10 py-5 rounded-full font-bold shadow-2xl"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#6B5AFF]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Work Together <br /> on Your Next Project?
              </h2>
              <p className="text-lg text-gray-700 mb-10">
                Have a project in mind? Let's bring it to life. Get a free consultation within 24 hours.
              </p>
              <Link href="/contact">
                <button className="bg-[#6B5AFF] hover:bg-[#5948CC] text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl flex items-center gap-4">
                  Start Your Project Today →
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-white rounded-full shadow-2xl p-12 flex items-center justify-center">
                <img src="/assests/2digit.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

// type Blog = {
//   blog_title: string;
//   blog_image: string;
//   blog_content: string;
// };

// const sections = [
//   { id: "introduction", label: "Introduction" },
//   { id: "learn", label: "AI across the insurance consumer journey" },
//   { id: "learn-phase", label: "The Learn phase" },
//   { id: "buy-phase", label: "The Buy phase" },
//   { id: "use-phase", label: "The Use phase" },
// ];

// export default function BlogPage() {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState<Blog | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState("introduction");

//   /* ---------------- BLOG FETCH ---------------- */
//   useEffect(() => {
//     if (!slug) return;

//     fetch(`https://api.2digitinnovations.com/v1/api/getBlogBySlug/${slug}`)
//       .then((res) => res.json())
//       .then((res) => setBlog(res.data))
//       .catch(() => setBlog(null))
//       .finally(() => setLoading(false));
//   }, [slug]);

//   /* ---------------- SCROLL SPY (FINAL FIX – NO NEVER ERROR) ---------------- */
//   useEffect(() => {
//     const handleScroll = () => {
//       const viewportCenter = window.innerHeight / 2;

//       let nearestSectionId = "introduction";
//       let smallestDistance = Infinity;

//       for (const section of sections) {
//         const el = document.getElementById(section.id);
//         if (!el) continue;

//         const rect = el.getBoundingClientRect();
//         const sectionCenter = rect.top + rect.height / 2;
//         const distance = Math.abs(sectionCenter - viewportCenter);

//         if (distance < smallestDistance) {
//           smallestDistance = distance;
//           nearestSectionId = section.id;
//         }
//       }

//       setActiveSection(nearestSectionId);
//     };

//     handleScroll(); // initial run
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ---------------- SECTION COMPONENT ---------------- */
//   function Section({ id, title }: { id: string; title: string }) {
//     return (
//       <section id={id} className="scroll-mt-32 space-y-4">
//         <h2 className="text-2xl font-bold">{title}</h2>
//         <p className="text-gray-600">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, autem.
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
//           eligendi. Corrupti laudantium id pariatur libero soluta doloremque
//           eaque repudiandae aliquid iusto praesentium exercitationem et nobis
//           dolores reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi autem est tempora expedita blanditiis repudiandae esse facere voluptatibus, quod alias vero eveniet soluta veniam dolorem aperiam et. Animi minima similique consequatur illum est earum ex rem voluptatem? Quos odio rem aut consequatur obcaecati voluptatem perferendis cumque ab veritatis temporibus voluptas consequuntur aliquid asperiores expedita amet dolorum, atque quia. Dicta voluptas doloremque nobis dolorem, molestiae commodi quod totam est sapiente, quia consequuntur rem officiis? Perferendis molestias aliquid est veniam nam. Dicta eaque sunt optio! Blanditiis, omnis laboriosam numquam ut itaque adipisci corrupti eius inventore autem quia harum enim labore iure aperiam, libero dolorem sit quam aliquam error beatae, ad delectus! Nulla, inventore assumenda, velit, iusto minima quia adipisci error eaque temporibus ullam ipsum quae dignissimos eum suscipit facere odit ab nemo consequuntur quo. Maiores, rem beatae? Vitae ducimus a officiis deleniti cum dolores beatae explicabo dignissimos perspiciatis aliquam, voluptas reiciendis et quis minus omnis voluptatem id sint laboriosam magnam quibusdam obcaecati placeat deserunt? Voluptatem, officia odit molestias esse iure alias ipsa fuga iusto quia nam quod eveniet! Voluptatem ipsa, explicabo a, aut sit dolor tempora nisi quas, accusantium quis praesentium recusandae. Eligendi commodi tempore a veritatis at accusantium ducimus dignissimos blanditiis eius reprehenderit iusto nobis quam, nemo quia unde excepturi quis ipsa pariatur perferendis mollitia maiores id quos! Recusandae perferendis sapiente quod consequuntur nesciunt quis temporibus, reiciendis error rem itaque dignissimos mollitia voluptatem eveniet, nam voluptates quae aspernatur repellendus rerum officia fuga. Eos, a nostrum. Sit quisquam suscipit itaque tenetur assumenda ut dicta at aliquid optio neque mollitia quibusdam molestias eaque cumque quas, dolor cum, rerum ratione officia nesciunt voluptates. Maxime nam excepturi, adipisci voluptatum similique voluptatem incidunt? Eius, corrupti? Et dolore vel quos suscipit cum? Deleniti non vero cupiditate tenetur, autem fugiat debitis praesentium magni modi ab doloremque distinctio nemo nostrum dolorum vitae eos, cum voluptatum, iusto aspernatur corporis at facilis voluptates consequatur? Praesentium ut enim quidem ratione debitis accusantium ea earum saepe ipsum commodi tenetur voluptates tempore dolorem distinctio atque, consequatur quaerat veniam ducimus sunt error! Placeat repellat dicta blanditiis quaerat eaque nisi error inventore rem, suscipit minima, similique repudiandae fugiat aut eius distinctio? Voluptatibus ullam, quidem, expedita sunt ab voluptas, corrupti quis minima consectetur cupiditate assumenda fugit possimus quaerat quibusdam numquam rerum non illum nemo totam! Commodi exercitationem quod ex! At quibusdam non soluta maiores ipsa nihil culpa modi dolor deserunt, repellendus quod itaque ratione perspiciatis animi omnis deleniti accusamus? Inventore tempora vitae quisquam nemo commodi accusantium dicta, reprehenderit recusandae, distinctio quia odit quas laboriosam similique earum tenetur omnis? Suscipit iste deleniti saepe, voluptates fugiat, eveniet voluptatum recusandae nulla maxime, aliquam perspiciatis asperiores facilis. Facilis veniam blanditiis quas deleniti magnam veritatis sequi cum eligendi nobis. Quis animi placeat incidunt nemo corrupti beatae libero a! Odit rerum excepturi placeat, consequatur modi ad harum cum ducimus nulla! Ipsum aliquid error earum autem eum cupiditate natus soluta in aliquam. Voluptatem qui similique in suscipit tempora quibusdam. Minus similique, odit neque atque architecto quisquam consequuntur quia, eaque facilis cum error culpa!
//         </p>
//       </section>
//     );
//   }

//   /* ---------------- GUARDS ---------------- */
//   if (loading) return <p className="text-center py-20">Loading…</p>;
//   if (!blog) return <p className="text-center py-20">Blog not found</p>;

//   /* ---------------- RENDER ---------------- */
//   return (
//     <main className="mx-auto max-w-7xl px-4 py-20 grid grid-cols-1 lg:grid-cols-4 gap-10">
//       {/* ================= LEFT CONTENT ================= */}
//       <article className="lg:col-span-3 space-y-20">
//         <h1 className="text-3xl font-bold">{blog.blog_title}</h1>

//         <img
//           src={blog.blog_image || "/placeholder.jpg"}
//           alt={blog.blog_title}
//           className="rounded-lg"
//         />

//         {/* CMS CONTENT */}
//         <div
//           className="prose max-w-none"
//           dangerouslySetInnerHTML={{ __html: blog.blog_content }}
//         />

//         {/* SCROLL SECTIONS */}
//         <Section id="introduction" title="Introduction" />
//         <Section
//           id="learn"
//           title="AI across the insurance consumer journey"
//         />
//         <Section id="learn-phase" title="The Learn phase" />
//         <Section id="buy-phase" title="The Buy phase" />
//         <Section id="use-phase" title="The Use phase" />
//       </article>

//       {/* ================= RIGHT ASIDE ================= */}
//       <aside className="hidden lg:block sticky top-28 h-fit">
//         <p className="font-semibold mb-4">Jump to a section</p>

//         <ul className="space-y-2 border-l pl-4">
//           {sections.map((s) => (
//             <li key={s.id}>
//               <a
//                 href={`#${s.id}`}
//                 className={`block text-sm transition ${
//                   activeSection === s.id
//                     ? "text-indigo-600 font-semibold"
//                     : "text-gray-500 hover:text-gray-800"
//                 }`}
//               >
//                 {s.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>
//     </main>
//   );
// }
