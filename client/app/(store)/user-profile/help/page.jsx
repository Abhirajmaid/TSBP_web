"use client";
import { Button } from "@src/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const HelpPage = () => {
  const [faq, setFaq] = useState([
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking the 'Sign Up' button on the top right of the page.",
      open: false,
    },
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click 'Forgot Password' on the login page and follow the instructions.",
      open: false,
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact customer support by filling out the form below or calling our hotline.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Help & Support</h1>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 rounded-lg"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span>{item.open ? "-" : "+"}</span>
                </div>
                {item.open && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-gray-300 p-6 bg-white rounded-lg mb-6">
          <h2 className="text-lg font-bold mb-4">Contact Us Any Queries</h2>
          <div className="text-sm text-gray-600 mb-4">
            <p>
              Join us and start selling your products to millions of customers.
            </p>
          </div>
          <Link href="/contact-us">
            <Button>Contact Us</Button>
          </Link>
        </div>

        {/* Resource Links Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <div className="space-y-2">
            <a href="#" className="block text-blue-500 hover:underline">
              How to update your account details
            </a>
            <a href="#" className="block text-blue-500 hover:underline">
              Shipping and delivery information
            </a>
            <a href="#" className="block text-blue-500 hover:underline">
              Refund policy and returns
            </a>
            <a href="#" className="block text-blue-500 hover:underline">
              Privacy and data security
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
