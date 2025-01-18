import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
// import axios from "axios";

function Banner() {
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);

  // // banner code from server
  // const [banners, setBanners] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchBanners = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://backend-six-rosy.vercel.app/get-banner"
  //       );
  //       setBanners(response.data);
  //     } catch (err) {
  //       setError("Failed to fetch banners");
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBanners();
  // }, []);

  return (
    <>
      <div className="relative pt-20">
        <Swiper
          loop={true}
          modules={[Navigation]}
          // navigation={{
          //   prevEl: prevRef.current,
          //   nextEl: nextRef.current,
          // }}
          onInit={(swiper) => {
            // swiper.params.navigation.prevEl = prevRef?.current;
            // swiper.params.navigation.nextEl = nextRef?.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="mySwiper"
        >
          {/* key={banner?._id} */}
          <SwiperSlide>
            <div className="w-full">
              <img
                className="object-cover w-full"
                src="https://i.ibb.co.com/vLzcC6K/banner.jpg`"
                alt="Banner image SweetPencil bd.online"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
          <FaChevronCircleLeft className="text-white" size={40} />
        </button>
        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
          <FaChevronCircleRight className="text-white" size={40} />
        </button>
      </div>
    </>
  );
}

export default Banner;
