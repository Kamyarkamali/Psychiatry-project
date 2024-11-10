// فایل: pages/about.js

import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen mt-14 bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6"> AboutUs</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We are here to help you regain peace and mental well-being. Our team
          consists of psychiatry and psychology professionals who, with
          knowledge and experience, are by your side to comprehensively support
          your improvements
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/doctor.png"
            alt="روانپزشک"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
          <div className="text-left max-w-lg">
            <h2 className="text-2xl text-center font-semibold text-gray-700 mb-4">
              Dr. Saman Rezaei
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With over 15 years of experience in psychiatry, Dr. Saman Rezaei
              helps his clients overcome life’s challenges and move toward a
              calmer, higher-quality life using the latest scientific methods.
            </p>
          </div>
        </div>

        <h3 className="text-gray-600 font-bold text-2xl leading-relaxed mt-5">
          HuMAP: Your Partner in Workplace Well-being
        </h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Why HuMAP
            </h3>

            <ul className="text-gray-600 list-disc list-inside">
              <li className="list-none">
                HuMAP is a cutting-edge platform designed to monitor and prevent
                workplace stress. By combining advanced analytics with a human-
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Take Proactive Action
            </h3>
            <p className="text-gray-600">
              We provide actionable insights to help you address stress before
              it escalates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Optimize Workforce Performance
            </h3>
            <p className="text-gray-600">
              By reducing stress and improving employee satisfaction, we help
              you boost productivity and retention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
