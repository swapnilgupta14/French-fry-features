import emailjs from "@emailjs/browser";
import Header from "@/components/common/Header";
import React, { useState } from "react";
import { Send } from "lucide-react";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState({
    isLoading: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-center px-4 w-full max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-accent custom-font mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>

          {submitStatus.success && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
              Your message has been sent successfully! We'll get back to you
              soon.
            </div>
          )}

          {submitStatus.error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
              Oops! There was an error sending your message. Please try again.
            </div>
          )}

          <form className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
              required
              disabled={submitStatus.isLoading}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
              required
              disabled={submitStatus.isLoading}
            />
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
              required
              disabled={submitStatus.isLoading}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-opacity-90 transition flex items-center justify-center"
              disabled={submitStatus.isLoading}
            >
              {submitStatus.isLoading ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <Send className="mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
