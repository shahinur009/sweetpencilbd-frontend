import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Videos() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/videos");
        setVideos(response.data);
        console.log("videos:", response.data);
      } catch (err) {
        setError("Failed to fetch videos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const swiper = document.querySelector(".mySwiper")?.swiper;
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [videos]);
  return (
    <>
      <h1 className="text-red-500 flex mx-auto justify-center text-2xl md:text-5xl">
        ---ভিডিও ---
      </h1>
      <div className="relative pt-20">
        {loading && <p>Loading ভিডিও ...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && videos.length === 0 && (
          <p className="text-gray-500 text-center">ভিডিও নাই </p>
        )}
        {!loading && !error && videos.length > 0 && (
          <>
            <Swiper
              loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              className="mySwiper"
            >
              {videos.map((video) => (
                <SwiperSlide key={video._id}>
                  <div className="flex justify-center items-center mx-auto">
                    <img
                      className="md:w-[50%] w-full md:h-[500px] h-[300px]"
                      src={video.videos}
                      alt="videos"
                    />
                  </div>
                  <a
                    href="tel:+8801622604352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-3 flex mx-auto justify-center items-center w-96 btn btn-warning font-bold text-xl"
                  >
                    অর্ডার করতে চাইঃ +880 1623503666
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button
              ref={prevRef}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10"
            >
              <FaChevronCircleLeft className="text-[#bd1616]" size={40} />
            </button>

            <button
              ref={nextRef}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 "
            >
              <FaChevronCircleRight className="text-[#bd1616]" size={40} />
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Videos;
