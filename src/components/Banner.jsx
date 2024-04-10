import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="my-12">
      <Swiper
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide slide1 rounded-xl">
            <h1 className="text-xl font-bold text-white bg-green-600 p-2 rounded-xl">Single Home</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2 rounded-xl">
          <h1 className="text-xl font-bold text-white bg-green-600 p-2 rounded-xl ">Town House</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3 rounded-xl">
          <h1 className="text-xl font-bold text-white bg-green-600 p-2 rounded-xl">Vacation House</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4 rounded-xl">
          <h1 className="text-xl font-bold text-white bg-green-600 p-2 rounded-xl">Student House </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
