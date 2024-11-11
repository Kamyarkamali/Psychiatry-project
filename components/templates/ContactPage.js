"use client";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data or send to the server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-r from-purple-50 to-purple-100 py-10 px-6 sm:px-12 md:px-24 flex items-center justify-center">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Get in touch with us! We are here to answer your questions and meet
          your needs. Send us a message, and we will get back to you soon.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Methods */}
        <div className="mt-10 text-center text-gray-600">
          <p>You can also reach us through the following methods:</p>
          <p className="flex items-center justify-center gap-2 mt-2 text-purple-700 font-medium">
            <FaPhoneAlt className="text-purple-600" /> +1 123 456 7890
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-purple-800 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-purple-800 text-2xl"
            >
              <FaTelegram />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-purple-800 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Kurdistan, Iran Map */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-purple-700 text-center mb-4">
            Our Location
          </h2>
          <div className="w-full h-64 md:h-80">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24125.222691637736!2d-0.1277584!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb04d184b55%3A0x3c0b6c25b5f3e1b1!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1696250548964!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Kurdistan, Iran"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
