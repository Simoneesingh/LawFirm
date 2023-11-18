import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ClientCards from "./ClientCards";

export default function Carousel({ swiperRef }) {
  const names = [
    "Jane Cooper",
    "Devon Lane",
    "Robert Fox",
    "Charles Keith",
    "James Bond",
    "Himalaya",
    "Harry",
  ];

  const images = [
    "./Jane.png",
    "./Devon.png",
    "./Robert.png",
    "./blankProfile.png",
    "./blankProfile.png",
    "./blankProfile.png",
    "./blankProfile.png",
  ];

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={36}
      slidesPerView={3}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {names.map((name, index) => (
        <SwiperSlide key={name} className="max-w-[359px]  min-h-[368px]">
          <ClientCards name={name} image={images[index]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
