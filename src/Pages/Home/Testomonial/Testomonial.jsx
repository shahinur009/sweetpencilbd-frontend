import React from "react";

function Testimonial() {
  return (
    <section
      style={{ padding: "50px", textAlign: "center", background: "#f9f9f9" }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
        গ্রাহকদের মতামত
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "300px",
            padding: "20px",
            background: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <p>“চমৎকার সেবা! আমি খুবই সন্তুষ্ট।”</p>
          <strong>- রাজিব হাসান</strong>
        </div>
        <div
          style={{
            maxWidth: "300px",
            padding: "20px",
            background: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <p>“এক কথায় অসাধারণ! আমি আবারও ব্যবহার করব।”</p>
          <strong>- সুমন আহমেদ</strong>
        </div>
        <div
          style={{
            maxWidth: "300px",
            padding: "20px",
            background: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <p>“গুণগত মান খুব ভালো, দারুণ অভিজ্ঞতা।”</p>
          <strong>- তানভীর ইসলাম</strong>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
