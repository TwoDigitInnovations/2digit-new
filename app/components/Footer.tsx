
import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaPinterestP,
} from "react-icons/fa";
import Link from 'next/link';


export const Footer = () => {
  return (
    <footer className="bg-[#6c5ce7] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Social */}
        <div>
          <img
            src="/assests/2Digit.png"
            alt="2Digit Innovations"
            className="w-44 mb-4"
          />
          <h4 className="text-lg font-semibold mb-3">Follow</h4>
          <div className="flex gap-3 flex-wrap">
            {[
              { icon: FaFacebookF, href: "https://www.facebook.com/2digitinnovations" },
              { icon: FaInstagram, href: "https://www.instagram.com/2digitinnovations" },
              { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/2digitinnovations" },
              { icon: FaDribbble, href: "https://dribbble.com/2digitinnovations" },
              { icon: FaBehance, href: "https://www.behance.net/2digitinnovations" },
              { icon: FaPinterestP, href: "https://www.pinterest.com/2digitinnovations" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white p-2 rounded-full hover:bg-white hover:text-[#6c5ce7] transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "App Development", href: "/services/mobile-app-development" },
              { name: "Web App Development", href: "/services/web-development" },
              { name: "Ecommerce Development", href: "/services/e-commerce-development" },
              { name: "Ready-Made App Solutions", href: "/services/ready-made-app-solutions" },
              { name: "UI And UX Designing", href: "/services/ui-ux-design" },
              { name: "Custom Mobile Software Development", href: "/services/custom-software-development" },
              { name: "Emerging Technologies", href: "/services/emerging-technologies" },
              { name: "Digital Marketing", href: "/services/digital-marketing" },
              { name: "Quality Assurance Testing", href: "/services/quality-assurance-and-testing" },
              { name: "Devops Cloud Services", href: "/services/devops-and-cloud-services" },
              { name: "Maintenance Support", href: "/services/maintenance-and-support" },
              { name: "Consulting Services", href: "/services/consulting-services" },
            ].map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="inline-block text-white hover:text-custom-yellow transition duration-300 transform hover:scale-105"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="inline-block text-white hover:text-custom-yellow transition duration-300 transform hover:scale-105"
              >
                Our Apps
              </Link>
            </li>

            <li>
              <a
                href="https://clutch.co/profile/2digit-innovations#highlights"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white hover:text-custom-yellow transition duration-300 transform hover:scale-105"
              >
                Find us on Clutch
              </a>
            </li>

            {[
              { name: "Privacy & Policy", href: "/privacy" },
              { name: "Shipping & Delivery Policy", href: "/shipping" },
              { name: "Return & Refund Policy", href: "/refund" },
              { name: "Terms & Condition", href: "/term" },
              { name: "FAQs", href: "/faq" },
              { name: "Legal", href: "/legal" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block text-white hover:text-custom-yellow transition duration-300 transform hover:scale-105"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p className="text-sm leading-relaxed">
            Hyde Park Crown First Floor, FF-14-21 Plot No GH-03 Sector-78,
            Noida, Uttar Pradesh 201306
          </p>

          <a
            href="mailto:info@2digitinnovations.com"
            className="mt-3 text-sm text-yellow-300 block hover:underline"
          >
            info@2digitinnovations.com
          </a>

          <p className="mt-1 text-sm text-yellow-300">+91 7814042409</p>

        
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
    </footer >

  )
}
