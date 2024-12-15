import Header from "@/components/common/Header";
import React from "react";

const Connect = () => {
  return (
    <div>
      <Header />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-accent custom-font mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Have questions or want to collaborate? We’d love to hear from you!
          </p>
          <form className="max-w-lg mx-auto space-y-6" action="#" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
