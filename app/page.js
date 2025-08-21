"use client";
import { useState } from "react";
import EverythingYouNeedSection from "@/components/everything-you-need-section";
import Footer from "@/components/Footer";
import LovedByPeople from "@/components/loved-by-people.jsx";
import TheToolsSection from "@/components/the-tools-section";
import { Button } from "@/components/ui/button";
import WhatMakesAccurascoreDifferent from "@/components/WhatMakesAccurascoreDifferent";
import { Menu, X } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close menu after click
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/Hero-bg.png')",
          height: "50rem",
        }}
      >
        {/* Header */}
        <header className="px-6 py-4">
          <nav
            className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border border-white/20"
            style={{ backgroundColor: "#51607d", padding: "5px 30px" }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/Logos/Accuracore/accuraCore-logo.png"
                alt="AccuraCore Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "Why", id: "why-section" },
                { label: "How It Works", id: "how-section" },
                { label: "FAQs", id: "faq-section" },
                { label: "Contact Us", id: "contact-section" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-white hover:text-blue-200 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center"
                style={{ color: "#0061A4",                     padding: "25px 15px",
 }}
              >
                <img
                  src="/Icons/Vector.svg"
                  alt="Login Icon"
                  className="w-4 h-4 mr-2"
                />
                Login
              </Button>

              <Button
                className="text-white rounded-full text-sm flex items-center"
                style={{
                  backgroundColor: "#0061A4",
                  padding: "25px 15px",
                }}
              >
                Book Demo
                <img
                  src="/Icons/Vector.png"
                  alt="Arrow Icon"
                  className="w-3 h-4 ml-2"
                />
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="text-white w-8 h-8" />
                ) : (
                  <Menu className="text-white w-8 h-8" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-[#51607d] px-6 py-4 space-y-4 rounded-lg mt-2">
              <div className="flex flex-col space-y-4 text-white text-sm text-center">
                <span onClick={() => handleScroll("why-section")}>Why</span>
                <span onClick={() => handleScroll("how-section")}>
                  How It Works
                </span>
                <span onClick={() => handleScroll("faq-section")}>FAQs</span>
                <span onClick={() => handleScroll("contact-section")}>
                  Contact Us
                </span>
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-3 mt-4">
                <Button
                  className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center"
                  style={{ color: "#0061A4",                     padding: "25px 15px",
 }}
                >
                  <img
                    src="/Icons/Vector.svg"
                    alt="Login Icon"
                    className="w-4 h-4 mr-2"
                  />
                  Login
                </Button>

                <Button
                  className="text-white rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#0061A4",
                    padding: "25px 15px",
                  }}
                >
                  Book Demo
                  <img
                    src="/Icons/Vector.png"
                    alt="Arrow Icon"
                    className="w-3 h-4 ml-2"
                  />
                </Button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-4xl text-white mb-6 leading-tight">
                Simplify Your Business with Precision
              </h1>
              <p className="text-md text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Accuracore is a powerful platform that brings everything you
                need into one dashboard — manage your team, track work orders,
                handle finances, and stay in control of every detail.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="text-white rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#0061A4",
                    border: "2px solid #4485b2",
                    padding: "25px 15px",
                  }}
                >
                  Book Demo
                  <img
                    src="/Icons/Vector.png"
                    alt="Arrow Icon"
                    className="w-3 h-4 ml-2"
                  />
                </Button>

                <Button
                  className="rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0061A4",
                    padding: "27px 15px",
                    border: "none",
                  }}
                >
                  Get Started Free
                  <img
                    src="/Icons/Vector2.png"
                    alt="Arrow Icon"
                    className="w-3 h-4 ml-2"
                  />
                </Button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-3xl mx-auto">
              <div
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl"
                style={{ border: "2px solid white" }}
              >
                <img
                  src="/Images/Hero-image.png"
                  alt="Hero"
                  className="h-auto rounded-3xl"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <WhatMakesAccurascoreDifferent id="why-section" />
      <EverythingYouNeedSection />
      <TheToolsSection />
      <LovedByPeople id="faq-section" />
      <Footer id="contact-section" />
    </>
  );
}
