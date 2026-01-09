"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Workflow,
  Bug,
  BrainCircuit,
  Flag,
  Eye,
  Target,
  Award,
  Wrench,
  Code,
  Cloud,
  Store,
  Smartphone,
  Palette,
  ShieldCheck,
  Star,
  Calendar,
  Globe,
  Users,
  Handshake,
  Lightbulb,
} from "lucide-react";


import { Ready } from "@/app/components/Ready";


export default function About() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Image - Full Section */}
        <Image
          src="/assests/images/about1.png"
          alt="2Digit Innovations Team"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-6 md:px-10">
          <motion.div
            initial={{ scale: 0.6, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 1.4,
              type: "spring",
              stiffness: 90,
              damping: 12,
            }}
            className="flex flex-col items-center max-w-4xl mx-auto"
          >
            {/* Text and Description */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
              Welcome to 2Digit Innovations
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
              We create digital solutions that help businesses grow, from custom
              software to mobile apps, web development, and AI-powered innovations.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What We Do */}
      <section className="bg-[#f7f7f4] py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b3b] mb-6">
              What We Do
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We build digital solutions that help businesses grow. Whether
              you're a startup launching your first app or an established company
              looking to transform digitally, we have the expertise to make it
              happen. Our team specializes in mobile apps, web development,
              UI/UX design, and digital marketing — everything you need to
              succeed online.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We have a solution if you want to deliver food, groceries, or
              anything else online. Start a trial now to see how we can help.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full max-w-lg"
          >
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-[#eaeaea] z-0"></div>
            <div className="absolute -top-8 -right-8 w-full h-full rounded-3xl bg-[#f0f0f0] z-0"></div>

            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/assests/images/about2.png" // Collaboration image
                alt="Our Team Collaborating"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
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
                We see a future where technology empowers every business to
                reach its full potential. Our vision is to become the most
                trusted software development partner globally, known for
                creating innovative solutions that are not just technically
                excellent but also easy to use and truly beneficial for
                businesses and their customers.
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
                At 2Digit Innovations, we are dedicated to providing
                cutting-edge technology solutions tailored to meet the evolving
                needs of businesses in the digital landscape. By combining
                innovation with excellence, we aim to empower our clients with
                impactful solutions that drive growth, streamline operations,
                enhance profitability, and foster lasting relationships with
                their customers.
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
                  We always believe in strong integrity and moral principles.
                  For that reason, all our organization is derived from the
                  integrity of our leadership team.
                </p>
              </div>

              {/* Quality */}
              <div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-white" />
                </div>

                <h4 className="text-xl font-semibold mb-2">Quality</h4>
                <p className="text-gray-600 leading-relaxed">
                  We deliver high-quality services as well as software. For this
                  success is possible. Greater customer service leads to
                  superior quality and trust.
                </p>
              </div>

              {/* Respect */}
              <div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="text-white" />
                </div>

                <h4 className="text-xl font-semibold mb-2">Respect</h4>
                <p className="text-gray-600 leading-relaxed">
                  We offer and receive the seed of soul whether it is defined
                  such as their beliefs, mutual respect, values, hard. If, We
                  remaining represent challenges with a balance.
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
                <h4 className="text-xl font-semibold mb-2">
                  Custom Software Development
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We build tailored software solutions that perfectly align with
                  your business needs, ensuring scalability and efficiency.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Web Application Development
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Creating responsive and modern web applications using the
                  latest technologies to deliver seamless user experiences.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="text-white w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Mobile App Development
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Developing native and cross-platform mobile applications for
                  iOS and Android to reach your audience on the go.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Cloud className="text-white w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Cloud Solutions & Migration
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Helping businesses migrate to the cloud and implement scalable
                  cloud-based solutions for better performance and cost savings.
                </p>
              </div>

              {/* Row 2 - 4 services */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Palette className="text-white w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
                <p className="text-gray-600 leading-relaxed">
                  Crafting intuitive and visually appealing user interfaces and
                  experiences that engage and delight your users.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Workflow className="text-white w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  DevOps & Automation
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Streamlining development and operations with automated
                  pipelines, CI/CD, and infrastructure as code.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="text-white w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  IT Consulting & Strategy
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Providing expert guidance on technology strategy, digital
                  transformation, and optimizing your IT infrastructure.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <BrainCircuit className="text-white w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  AI & Machine Learning
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Integrating artificial intelligence and machine learning
                  capabilities to make your applications smarter and more
                  innovative.
                </p>
              </div>

              {/* Row 3 - Only 2 services in column 2 and 3 */}
              {/* Empty column 1 */}
              <div className="flex flex-col invisible">
                {/* Invisible placeholder to maintain grid structure */}
                <div className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-semibold mb-2 opacity-0">
                  Placeholder
                </h4>
                <p className="text-gray-600 leading-relaxed opacity-0">
                  Placeholder
                </p>
              </div>

              {/* Quality Assurance & Testing - Column 2 */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Bug className="text-white w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Quality Assurance & Testing
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Ensuring your software is bug-free and performs optimally
                  through rigorous testing and quality assurance processes.
                </p>
              </div>

              {/* Maintenance & Support - Column 3 */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="text-white w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Maintenance & Support
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Offering ongoing maintenance, updates, and 24/7 support to
                  keep your software running smoothly.
                </p>
              </div>

              {/* Empty column 4 */}
              <div className="flex flex-col invisible">
                {/* Invisible placeholder */}
                <div className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-semibold mb-2 opacity-0">
                  Placeholder
                </h4>
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

              <h3 className="text-4xl font-bold text-[#4b4f5c] mb-3">140K</h3>

              <p className="text-gray-600 leading-relaxed">
                Orders Delivering every month by our Solution
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8">
              <div className="flex justify-end mb-6">
                <Flag className="w-8 h-8 text-[#2c2c2c]" />
              </div>

              <h3 className="text-4xl font-bold text-[#4b4f5c] mb-3">48+</h3>

              <p className="text-gray-600 leading-relaxed">
                Countries using our solution and Growing
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8">
              <div className="flex justify-end mb-6">
                <Store className="w-8 h-8 text-[#2c2c2c]" />
              </div>

              <h3 className="text-4xl font-bold text-[#4b4f5c] mb-3">20K+</h3>

              <p className="text-gray-600 leading-relaxed">
                Business Onboarded on our solution
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8">
              <div className="flex justify-end mb-6">
                <Users className="w-8 h-8 text-[#2c2c2c]" />
              </div>

              <h3 className="text-4xl font-bold text-[#4b4f5c] mb-3">1B+</h3>

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
            Award-Winning Software Development Company: Recognized by Industry
            Leaders
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
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
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
                  Software <span className="text-blue-500">Advice</span>
                </h3>
              </div>

              <div className="bg-white flex items-center justify-center gap-3 py-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
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
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
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

      <Ready />

    </main>
  );
}
