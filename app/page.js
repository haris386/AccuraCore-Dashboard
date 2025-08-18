"use client"; 
import EverythingYouNeedSection from "@/components/everything-you-need-section";
import Footer from "@/components/Footer";
import LovedByPeople from "@/components/loved-by-people.jsx";
import TheToolsSection from "@/components/the-tools-section";
import { Button } from "@/components/ui/button";
import WhatMakesAccurascoreDifferent from "@/components/WhatMakesAccurascoreDifferent";
import { ChevronDown, ArrowRight, LogIn } from "lucide-react";

export default function HomePage() {
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

           {/* Navigation Menu */}
<div className="hidden md:flex items-center space-x-8">
  <button
    onClick={() =>
      document.getElementById("why-section")?.scrollIntoView({ behavior: "smooth" })
    }
    className="flex items-center space-x-1 text-white hover:text-blue-200 cursor-pointer text-sm"
  >
    <span>Why</span>
  </button>

  <button
    onClick={() =>
      document.getElementById("how-section")?.scrollIntoView({ behavior: "smooth" })
    }
    className="flex items-center space-x-1 text-white hover:text-blue-200 cursor-pointer text-sm"
  >
    <span>How It Works</span>
  </button>

  <button
    onClick={() =>
      document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" })
    }
    className="flex items-center space-x-1 text-white hover:text-blue-200 cursor-pointer text-sm"
  >
    <span>FAQs</span>
  </button>

  <button
    onClick={() =>
      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
    }
    className="flex items-center space-x-1 text-white hover:text-blue-200 cursor-pointer text-sm"
  >
    <span>Contact Us</span>
  </button>
</div>


            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center"
                style={{
                  padding: "25px 15px",
                  color: "#0061A4",
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
          </nav>
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
                {/* Book Demo Button */}
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

                {/* Get Started Free Button */}
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
                {/* <div className="bg-white rounded-xl overflow-hidden flex items-center justify-center p-4"> */}
                <img
                  src="/Images/Hero-image.png"
                  alt="Hero"
                  className="h-auto rounded-3xl"
                  style={{ maxHeight: "500px" }}
                />
                {/* </div> */}
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
