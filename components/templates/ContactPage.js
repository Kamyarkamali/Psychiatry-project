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
    // پردازش اطلاعات فرم یا ارسال به سرور
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-r from-purple-50 to-purple-100 py-10 px-6 sm:px-12 md:px-24 flex items-center justify-center">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-4">
          تماس با ما
        </h1>
        <p className="text-gray-600 text-center mb-6">
          با ما در تماس باشید! ما اینجا هستیم تا به سؤالات و نیازهای شما پاسخ
          دهیم. پیام خود را ارسال کنید و به زودی با شما تماس خواهیم گرفت.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              نام شما
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
              ایمیل شما
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
              پیام شما
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
            ارسال پیام
          </button>
        </form>

        {/* بخش راه‌های ارتباطی */}
        <div className="mt-10 text-center text-gray-600">
          <p>همچنین می‌توانید از طریق روش‌های زیر با ما در ارتباط باشید:</p>
          <p className="flex items-center justify-center gap-2 mt-2 text-purple-700 font-medium">
            <FaPhoneAlt className="text-purple-600" /> 091222222222
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
      </div>
    </div>
  );
}
