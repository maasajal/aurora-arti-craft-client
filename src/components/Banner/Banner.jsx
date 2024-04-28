import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";

const Banner = ({ sliderData }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Display one slide per page
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {sliderData.map((art) => (
          <SwiperSlide key={art._id}>
            <div
              className="hero"
              style={{
                backgroundImage: `url(${art.image})`,
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-white py-52">
                <div className="max-w-3xl">
                  <h1 className="mb-5 text-5xl font-bold font-playFair">
                    <Typewriter
                      words={[`${art.item_name}`]}
                      loop={50}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </h1>
                  <p className="mb-5">{art.short_description}</p>
                  <Link
                    to={`/crafts/${art._id}`}
                    className="btn px-6 border-none text-white uppercase bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
