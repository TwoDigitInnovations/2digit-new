"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt?: string;
};

const BLOGS_PER_PAGE = 6;

export default function Blog() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://api.2digitinnovations.com/v1/api/get-blog");
        const result = await res.json();

        if (result?.data) {
          const formattedBlogs = (result.data as any[]).map((item) => ({
            id: item.slug,
            title: item.blog_title || "Untitled Blog",
            image: item.blog_image || "/placeholder.jpg",
            excerpt: (item.blog_content?.replace(/<[^>]*>/g, "") || "").slice(0, 120) + "...",
            slug: item.slug,
          }));

          setBlogs(formattedBlogs);
        }
      } catch (error) {
        console.error("API Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const visibleBlogs = expanded
    ? filteredBlogs.slice(0, page * BLOGS_PER_PAGE)
    : filteredBlogs.slice(0, BLOGS_PER_PAGE);

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
  
      <section className="bg-gradient-to-b from-white to-purple-50 py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-8"
          >
            2DigitInnovations Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 mb-10"
          >
            Insights, tips, and updates from our team
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative max-w-3xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search blogs by title..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setExpanded(false);
                setPage(1);
              }}
              className="w-full px-8 py-5 rounded-full shadow-2xl outline-none text-lg border border-gray-200 focus:border-[#6B5AFF] focus:ring-4 focus:ring-purple-100 transition"
            />
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-[#6B5AFF]"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#f8f7f3] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl text-gray-500"
              >
                Loading amazing blogs...
              </motion.div>
            </div>
          ) : visibleBlogs.length > 0 ? (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" layout>
              <AnimatePresence>
                {visibleBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -12 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <Link href={`/resources/blog/${blog.slug}`}>
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {blog.excerpt}
                        </p>

                        <span className="text-[#6B5AFF] font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                          Read More
                          <motion.svg
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-2xl text-gray-500">No blogs found matching your search.</p>
            </motion.div>
          )}

          {/* Buttons - Orange ko Blue se replace kiya */}
          <div className="text-center mt-20 space-x-6">
            {!expanded && filteredBlogs.length > BLOGS_PER_PAGE && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpanded(true)}
                className="bg-[#6B5AFF] hover:bg-[#5948CC] text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl transition"
              >
                See More Blogs
              </motion.button>
            )}

            {expanded && (
              <>
                {page < totalPages && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPage(page + 1)}
                    className="bg-[#6B5AFF] hover:bg-[#5948CC] text-white px-10 py-4 rounded-full font-bold shadow-xl transition"
                  >
                    Load More
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setExpanded(false);
                    setPage(1);
                  }}
                  className="border-2 border-[#6B5AFF] text-[#6B5AFF] hover:bg-[#6B5AFF] hover:text-white px-10 py-4 rounded-full font-bold transition"
                >
                  Show Less
                </motion.button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Already Blue */}
      <section className="py-20 px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 md:p-20 shadow-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute top-0 left-0 w-96 h-96 bg-[#6B5AFF]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
            />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Ready to Work Together <br /> on Your Next Project?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-700 mb-10"
              >
                Have a project in mind? Let's bring it to life. Whether you need a new website, mobile app, or complete digital transformation — we're here to help.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(107,90,255,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#6B5AFF] hover:bg-[#5948CC] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl flex items-center gap-4 transition"
                  >
                    Start Your Project Today
                    <motion.svg
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
                    </motion.svg>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

       
              <div className="w-96 h-96 bg-white rounded-full shadow-2xl p-12 flex items-center justify-center">
                <img src="/assests/2digit.png" alt="2Digit Logo" className="w-full h-full object-contain" />
              </div>
          </div>
        </motion.div>
      </section>

   
    </main>
  );
}