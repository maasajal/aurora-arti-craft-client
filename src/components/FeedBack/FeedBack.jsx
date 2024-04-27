import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const FeedBack = ({ feedback }) => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {!loading ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {feedback.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-full w-1/2 p-5"
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-3xl">{review.name}</h2>
                  <p className="leading-8">{review.date}</p>
                  <div className="font-semibold flex items-center flex-col gap-3">
                    <p>Rating: {review.rating}</p>
                    <div className="rating ">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <q className="mb-4 leading-8">{review.comment}</q>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </>
  );
};
export default FeedBack;
