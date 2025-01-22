import React from "react";

function FAQ() {
  return (
    <div className="container w-[90%] mx-auto">
      <h1 className="py-2 text-md md:text-3xl flex justify-center items-center font-bold">
        আপনার সকল প্রশ্নের উত্তর{" "}
      </h1>
      <div className="join join-vertical w-full bg-[#F8F8EC] flex justify-center items-center mb-5">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-sm md:text-xl font-medium">
            আমি কিভাবে আমার সমস্যা নিয়ে কথা বলবো ?
          </div>
          <div className="collapse-content bg-white pt-3">
            <p>
              আমাদের কাস্টমার কেয়ার প্রতিনিধির সাথে আপনার সমস্যা নিয়ে কথা বলুন-
              আপনার সমস্যার কথা শুনে আপনাকে আমাদের ডাক্তারের সাথে কথা বলার
              ব্যবস্থা করে দিবেন।
            </p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href="tel:+8801622604352"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-2 py-2 font-semibold text-white rounded bg-blue-600 hover:bg-blue-800 text-center"
              >
                Call: +880 1622-604352
              </a>
              <a
                href="https://wa.me/+8801622604352"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-2 py-2 font-semibold text-white rounded bg-green-600 hover:bg-green-800 text-center"
              >
                WhatsApp: +880 1622-604352
              </a>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-sm md:text-xl font-medium">
            আপনাদের এই প্রোডাক্টগুলো কি কোন সাইড ইফেক্ট আছে?
          </div>
          <div className="collapse-content bg-white pt-3">
            <p>
              আমাদের এই প্রোডাক্টগুলো পৃথিবীর বিভিন্ন দেশ থেকে আদমানিকৃত একদম
              অরিজিনাল হওয়ায় কোন সাইড ইফেক্ট নাই। আপনি নিশ্চিন্তে সেবন করতে
              পারেন ।
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-sm md:text-xl font-medium">
            আপনাদের প্রোডাক্টগুলো ডেলিভারির নিয়ম?
          </div>
          <div className="collapse-content bg-white pt-3">
            <p>
              আপনাকে এক টাকাও অগ্রিম প্রদান করতে হবে না। আপনি প্রডাক্ট হাতে পেয়ে
              কুরিয়ার সার্ভিসেস ডেলিভারিম্যানকে টাকা বুঝিয়ে দিবেন।
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-sm md:text-xl font-medium">
            আমার পরিচয় কি গোপন রাখা হবে?
          </div>
          <div className="collapse-content bg-white pt-3">
            <p>
              আমরা আমাদের মূল্যবান কাস্টমারের তথ্য কারো সাথে শেয়ার করি না। আপনি
              নিশ্চিন্তে থাকতে পারেন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
