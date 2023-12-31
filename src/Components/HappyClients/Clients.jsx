import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Carousel from "./Carousel";
import { useRef } from "react";

export default function Clients() {
  const swiperRef = useRef();
  return (
    <div className="bg-background px-20 py-20 flex flex-col  items-center justify-around gap-10">
      <div className="flex items-center justify-around w-full ">
        <h2 className="text-white text-4xl font-bold leading-snug w-[387px]">
          What says our happy Clients
        </h2>
        <div className="flex gap-4 ">
          <button
            className="bg-white rounded-full p-2"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <ArrowBack fontSize="large" />
          </button>
          <button
            className="bg-icon rounded-full p-2"
            onClick={() => swiperRef.current.slideNext()}
          >
            <ArrowForward fontSize="large" />
          </button>
        </div>
      </div>
      <div className="max-w-[80%] gap-10 px-10 ">
        <Carousel swiperRef={swiperRef} />
      </div>
    </div>
  );
}
