import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

export const Ready = () => {
  return (
    <div>
         <section className="relative bg-white py-20 px-4 mb-16">
                <div className="max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6B5AFF]/20 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
                    </div>
        
                    <div className="relative z-10 flex-1 text-center md:text-left">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ready to Work Together <br /> on Your Next Project?
                      </h2>
                      <p className="text-gray-700 text-lg mb-8 max-w-2xl">
                        Have a project in mind? Let's bring it to life. Whether you need a new website,
                        mobile app, or complete digital transformation, we're here to help.
                        Get a free consultation and project quote within 24 hours.
                      </p>
        
                      <Link href="/contact">
                        <button className="bg-[#6B5AFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5948CC] transition shadow-lg inline-flex items-center gap-3 hover:scale-105">
                          Start Your Project Today
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </button>
                      </Link>
                    </div>
        
                    <div className="relative z-10">
                      <div className="w-80 h-80 bg-white rounded-full shadow-2xl p-8 flex items-center justify-center">
                        <img src="/assests/2digit.png" alt="2Digit Logo" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
    </div>
  )
}
