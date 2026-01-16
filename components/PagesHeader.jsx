"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function PagesHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-6 py-4">
      <nav
        className="flex items-center justify-between max-w-7xl mx-auto rounded-full px-8 py-4 border border-white/20"
        style={{ backgroundColor: "white", padding: "5px 30px" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Logos/Accuracore/AC2025.png"
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
              className="text-black hover:text-blue-200 text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center shadow-md"
            style={{ color: "#0061A4", padding: "25px 15px" }}
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
            onClick={() => setIsOpen(true)}
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
              <X className="text-black w-8 h-8" />
            ) : (
              <Menu className="text-black w-8 h-8" />
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
              style={{ color: "#0061A4", padding: "25px 15px" }}
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
              onClick={() => setIsOpen(true)}
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
  );
}
