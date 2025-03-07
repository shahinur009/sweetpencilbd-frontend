import React from "react";

function Rules() {
  return (
    <div className="bg-[#f8f8ec] p-4 mt-4 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-pink-600 text-center mb-4">
        📌 অর্ডার করার নিয়ম
      </h2>
      <ul className="list-none space-y-3 text-gray-700 md:text-2xl text-sm">
        <li>✅ আপনার সিলেক্ট করা প্রোডাক্টে ক্লিক করে বিস্তারিত পড়ুন।</li>
        <li>
          ✅ পছন্দ হলে নিচে থাকা <b>অর্ডার ফর্ম</b> পূরণ করুন।
        </li>
        <li>
          ✅ সঠিক তথ্য দিয়ে <b>নাম, মোবাইল নম্বর, ঠিকানা</b> লিখুন।
        </li>
        <li>
          ✅ <b>সকল প্রোডাক্ট ক্যাশ অন ডেলিভারি</b>
        </li>
        <li>✅ ২৪-৪৮ ঘণ্টার মধ্যে ডেলিভারি পাবেন।</li>
      </ul>
    </div>
  );
}

export default Rules;
