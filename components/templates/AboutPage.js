// فایل: pages/about.js

import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen mt-14 bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">درباره ما</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          ما اینجا هستیم تا به شما کمک کنیم آرامش و سلامت روانی خود را باز
          یابید. تیم ما از متخصصین روانپزشکی و روانشناسی تشکیل شده که با علم و
          تجربه، همراه شما هستند تا با رویکردی جامع به بهبود وضعیت شما بپردازند.
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
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              دکتر سامان رضایی
            </h2>
            <p className="text-gray-600 leading-relaxed">
              دکتر سامان رضایی با بیش از ۱۵ سال سابقه در زمینه روانپزشکی، به
              مراجعین خود کمک می‌کند تا چالش‌های زندگی خود را پشت سر بگذارند و
              با بهره‌گیری از جدیدترین متدهای علمی، به سمت زندگی آرام‌تر و
              باکیفیت‌تر قدم بردارند.
            </p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              تخصص‌های ما
            </h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>درمان اضطراب و افسردگی</li>
              <li>مشاوره روابط و ازدواج</li>
              <li>روان‌درمانی فردی و گروهی</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              روش‌های درمانی ما
            </h3>
            <p className="text-gray-600">
              تیم ما از ترکیب روش‌های مختلف درمانی شامل شناختی-رفتاری، دارو
              درمانی، و روان‌درمانی استفاده می‌کند. هر برنامه درمانی بر اساس
              نیازهای خاص هر مراجع به صورت فردی طراحی می‌شود.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
