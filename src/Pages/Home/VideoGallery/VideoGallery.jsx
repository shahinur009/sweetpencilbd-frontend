import React from "react";

function VideoGallery() {
  return (
    <section
      style={{ padding: "50px", textAlign: "center", background: "#f9f9f9" }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
        ভিডিও গ্যালারি
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VideoGallery;
