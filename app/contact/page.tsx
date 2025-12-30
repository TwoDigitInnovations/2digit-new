
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FormEvent } from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

type Country = {
  name: string;
  code: string;
  flag: string;
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

export default function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Country>(countries[0]); // Default: India

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Auto-focus search when dropdown opens
  useEffect(() => {
    if (open && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [open]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) ||
      country.code.includes(search)
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !message) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://api.2digitinnovations.com/v1/api/create-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: `${selected.code}${phoneNumber}`,
          message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Submission failed");
      }

      alert("Enquiry submitted successfully! ✅");

      // Reset form
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setSelected(countries[0]);
    } catch (error: any) {
      alert(error.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />

      {/* Hero Contact Section with Animation */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Contact Us: Reach Out for Seamless Communication and Support
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 mb-12 max-w-xl"
            >
              Experience effortless communication and dedicated support through our platform. Your satisfaction is our priority.
            </motion.p>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              src="/assests/image.png"
              alt="Contact Illustration"
              className="w-full max-w-2xl rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Animated "CALL" background text */}
            <motion.span
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 left-0 text-[120px] font-black text-purple-100 select-none -z-10"
            >
              CALL
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-10"
            >
              Ready to Work Together In <br /> New Projects?
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#6B5AFF" }}
                transition={{ type: "spring", stiffness: 300 }}
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 outline-none focus:ring-4 focus:ring-purple-100 transition"
              />

              {/* Phone with Country Selector */}
              <div className="relative" ref={dropdownRef}>
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-[#6B5AFF] transition"
                >
                  <span className="text-3xl">{selected.flag}</span>
                  <span className="font-semibold">{selected.code}</span>
                  <span className="text-gray-300">|</span>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                    required
                    className="flex-1 bg-transparent outline-none"
                  />
                  <motion.svg
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.div>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 mt-3 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search country..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-6 py-4 border-b border-gray-100 outline-none text-gray-700"
                        onClick={(e) => e.stopPropagation()}
                      />

                      <div className="max-h-64 overflow-y-auto">
                        {filteredCountries.length === 0 ? (
                          <p className="text-center py-6 text-gray-500">No countries found</p>
                        ) : (
                          filteredCountries.map((country) => (
                            <motion.div
                              key={country.code}
                              whileHover={{ backgroundColor: "#f5f0ff" }}
                              onClick={() => {
                                setSelected(country);
                                setOpen(false);
                                setSearch("");
                              }}
                              className="flex items-center gap-4 px-6 py-4 cursor-pointer transition"
                            >
                              <span className="text-2xl">{country.flag}</span>
                              <span className="flex-1 font-medium">{country.name}</span>
                              <span className="text-sm text-gray-500">{country.code}</span>
                            </motion.div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 outline-none focus:ring-4 focus:ring-purple-100 transition"
              />

              {/* Message */}
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message *"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 outline-none resize-none focus:ring-4 focus:ring-purple-100 transition"
              />

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full bg-[#6B5AFF] hover:bg-[#5948CC] text-white font-bold py-5 rounded-xl shadow-xl transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Glowing Effects */}
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
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 left-0 w-96 h-96 bg-[#6B5AFF]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
            />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Ready to Work Together <br /> on Your Next Project?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-700 mb-10 max-w-2xl"
              >
                Have a project in mind? Let's bring it to life. Whether you need a new website, mobile app, or complete digital transformation — we're here to help.
              </motion.p>
<Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6B5AFF] hover:bg-[#5948CC] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl flex items-center gap-4 transition"
              >
                Start Your Project Today
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
                </svg>
              </motion.button>
              </Link>
            </div>

           
              <div className="w-96 h-96 bg-white rounded-full shadow-2xl p-12 flex items-center justify-center">
                <img src="/assests/2digit.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
          
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}