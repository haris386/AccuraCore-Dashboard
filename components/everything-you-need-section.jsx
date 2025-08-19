"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Define all available images globally
const allImages = [
  {
    id: "Work-Order-Management",
    src: "/Images/Work-Order-Management.png",
    alt: "Work Order Management",
  },
  {
    id: "smart-dashboard",
    src: "/Images/Smart-Dashboard.png",
    alt: "Smart Dashboard",
  },
  {
    id: "boards",
    src: "/Images/Boards.png",
    alt: "Boards",
  },
  {
    id: "Contact-Profiles",
    src: "/Images/Contact-Profiles.png",
    alt: "Contact Profiles Section",
  },
  { id: "calendar", src: "/Images/Calendar.png", alt: "Calendar View" },
];

// Define tabs, linking to the central image ID
const tabs = [
  { id: "Work-Order-Management", label: "Work Order Management" },
  { id: "smart-dashboard", label: "Smart Dashboard" },
  { id: "boards", label: "Boards" },
  { id: "Contact-Profiles", label: "Contact Profiles" },
  { id: "calendar", label: "Calendar" },
];

export default function EverythingYouNeedSection() {
  const [activeTab, setActiveTab] = useState("Work-Order-Management");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  // When active tab changes, scroll carousel to that slide
  const scrollTo = (id) => {
    const index = allImages.findIndex((img) => img.id === id);
    if (emblaApi && index !== -1) {
      emblaApi.scrollTo(index);
      setActiveTab(id);
    }
  };

  return (
    <section
      className="py-16 lg:py-20"
      style={{ paddingBottom: 0, backgroundColor: "#f4f0ed" }}
    >
      <div className="w-full">
        <div
          className="p-8 lg:p-12"
          style={{
            background: "radial-gradient(circle, #2f5071 0%, #162c44 100%)",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          {/* Heading */}
          <div className="text-center mb-8 lg:mb-12 px-4 lg:px-12">
            <h2
              className="text-white font-bold leading-tight"
              style={{ fontSize: "1.5rem", lineHeight: "1.75rem" }}
            >
              Everything You Need To
              <br />
              Run And Grow Your Business
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12 px-4 lg:px-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap text-white`}
                style={{
                  background:
                    activeTab === tab.id
                      ? "radial-gradient(circle at center, #0061A4 0%, #004b82 100%)"
                      : "#1f344a",
                  border:
                    activeTab === tab.id
                      ? "1px solid #3380c6"
                      : "1px solid gray",
                  boxShadow:
                    activeTab === tab.id
                      ? "0 0 15px rgba(0, 97, 164, 0.6)"
                      : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Embla Carousel */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {allImages.map((img) => (
                <div
                  key={img.id}
                  className="embla__slide flex-[0_0_55%] flex justify-center items-center px-1"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`h-[500px] object-contain rounded-xl transition-transform duration-500 ${
                      activeTab === img.id
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-50"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
