import React from "react";

function Pricing() {
  return (
    <section
      style={{ padding: "50px", textAlign: "center", background: "#f9f9f9" }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
        মূল্য তালিকা
      </h2>
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "20px",
          background: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ fontSize: "24px", marginBottom: "10px", color: "#222" }}>
          বেসিক প্ল্যান
        </h3>
        <p style={{ fontSize: "20px", fontWeight: "bold", color: "#007bff" }}>
          সকল পণ্যে-
        </p>
        <p style={{ fontSize: "16px", color: "#666" }}>কমিশন: ১০%</p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "15px",
            color: "#444",
          }}
        >
          <li>✅ ২৪/৭ সাপোর্ট</li>
          <li>✅ ফ্রি আপডেট</li>
          <li>✅ ফ্রি দ্রুত ডেলিভারি</li>
        </ul>
        <button
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          অর্ডার করুন
        </button>
      </div>
    </section>
  );
}

export default Pricing;
