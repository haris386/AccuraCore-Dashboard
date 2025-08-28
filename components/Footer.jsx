"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Footer({ id }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer
      id={id}
      className="bg-slate-900 py-16 relative overflow-hidden"
      style={{ paddingBottom: "unset" }}
    >
      <div className="mx-auto relative z-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          style={{ width: "100%" }}
        >
          {/* Left Column */}
          <div
            className="space-y-6"
            style={{ paddingBottom: "76px", paddingLeft: "70px" }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/Logos/Accuracore/accuraCore-logo.png"
                alt="AccuraCore Logo"
                className="object-contain"
                style={{ width: "100px" }}
              />
            </div>

            {/* Description */}
            <p className="text-white text-md leading-relaxed max-w-md">
              Accuracore a complete, enterprise ready platform to manage your
              business from start to finish, absolutely free.
            </p>

            {/* Book Demo Button */}
            <Button
              className="text-white rounded-full text-sm flex items-center"
              style={{
                backgroundColor: "#0061A4",
                padding: "25px 15px",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(true)}
            >
              Book Demo
              <img
                src="/Icons/Vector.png"
                alt="Arrow Icon"
                className="w-2 h-3 ml-2"
              />
            </Button>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-[#04213f] to-[#072b4a] border-t-2 border-l-2 border-[#0061A4] rounded-tl-[30px] p-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                CONTACT
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 cursor-pointer hover:text-[#0061A4]">
                  <img
                    src="/Icons/call-add.png"
                    alt="Call Icon"
                    className="w-4 h-4"
                  />
                  <span className="text-white text-sm">999-999-999</span>
                </div>
                <div className="flex items-center space-x-3 cursor-pointer hover:text-[#0061A4]">
                  <img
                    src="/Icons/mail-at-sign-01.png"
                    alt="Mail Icon"
                    className="w-4 h-4"
                  />
                  <span className="text-white text-sm">Accuracore@.com</span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-4">
              <img
                src="/Icons/Spiral.png"
                alt="Spiral Background"
                className="absolute w-[350px] h-[350px] top-[-110px] left-[70%] z-20 pointer-events-none select-none"
              />
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                FOLLOW US
              </h3>
              <div className="flex space-x-4">
                {/* Instagram */}
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <img
                    src="/Icons/Instagram.svg"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </div>

                {/* WhatsApp */}
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <img
                    src="/Icons/whatsapp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                </div>

                {/* Telegram */}
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <img
                    src="/Icons/telegram.svg"
                    alt="Telegram"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl w-[90%] max-w-[600px] max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h3 className="text-md lg:text-md text-center text-gray-900 mb-2">
              Registration Form
            </h3>
            <p className="text-gray-500 text-sm mb-6 text-center">
              Please fill out this form with the required information
            </p>

            <form
              action="https://formspree.io/f/mnnbqejn"
              method="POST"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Software of Interest */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Software of Interest
                </p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCore"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700" style={{fontSize:'13px'}}>AccuraCore</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="ClaimCore"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700" style={{fontSize:'13px'}}>ClaimCore</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCam"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700" style={{fontSize:'13px'}}>AccuraCam</span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white font-bold py-3 rounded-full transition-colors duration-300 shadow-md"
                style={{ backgroundColor: "#0061A4", padding: "10px 15px", cursor:"pointer", fontSize:"15px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}
