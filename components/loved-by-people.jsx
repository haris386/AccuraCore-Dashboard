"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Malik",
    image:
      "/Images/Trusted-by-teams-who-value-clarity-control-and-results..png",
    feedback:
      "AccuraCore Transformed How We Manage Our Daily Operations. Everything Is In One Place - From Tasks To Invoices. It's Like Having A Full Operations Team Inside One Dashboard.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    image:
      "/Images/Trusted-by-teams-who-value-clarity-control-and-results..png",
    feedback:
      "The workflow automation has saved us countless hours. What used to take our team days now happens automatically. AccuraCore is a game-changer for our business.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image:
      "/Images/Trusted-by-teams-who-value-clarity-control-and-results..png",
    feedback:
      "Finally, a platform that understands our business needs. The financial intelligence features have given us insights we never had before. Highly recommended!",
    rating: 5,
  },
];

const faqs = [
  {
    id: 1,
    question: "Is AccuraCore Suitable For Small Companies Too?",
    answer:
      "Yes! AccuraCore is suitable for small teams of people, as well as medium sized businesses.",
  },
  {
    id: 2,
    question: "Can I Assign Different Roles To My Team Members?",
    answer:
      "Yes, roles are fully customizable, and can be assigned to everyone.",
  },
  {
    id: 3,
    question: "Does AccuraCore Automatically Calculate Financials?",
    answer:
      "Yes, financial calculations are handled automatically, and displayed for easy review.",
  },
  {
    id: 4,
    question: "Is AccuraCore Cloud-Based?",
    answer:
      "Yes, AccuraCore is a SaaS platform that exists in the cloud, and requires internet access to use.",
  },
  {
    id: 5,
    question: "Can I Export My Data From The System?",
    answer:
      "The only data we support exporting is reports.",
  },
];


export default function LovedByPeople({ id }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };
  return (
    <section
      className="py-20 relative overflow-hidden custom-padding"
      style={{
        background: "linear-gradient(312deg, #faefe9 -17%, #ffffff 100%)",
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl mb-5">
        {/* First Row - Hero Section */}
        <div className="text-center mb-16">
          <img
            src="/Images/Loved-by-people.png"
            alt="Loved by People"
            className="mx-auto rounded-3xl custom-width"
            style={{ width: "70%" }}
          />
        </div>

        <div id={id} className="mt-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - FAQ Heading */}
            <div>
              <h3 className="text-2xl  text-gray-900 mb-2">
                Frequently
                <br />
                <strong>Asked</strong> Questions
              </h3>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white p-[25px] rounded-[10px] border-none"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center text-left hover:text-blue-600 transition-colors duration-200"
                    style={{cursor:"pointer"}}
                  >
                    <span className="text-sm font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                        openFaq === faq.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* FAQ Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === faq.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                    
                  >
                    <div className="pb-4 text-gray-600 leading-relaxed text-sm" style={{marginTop:"15px"}}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
