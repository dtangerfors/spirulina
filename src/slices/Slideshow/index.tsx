"use client"
import { Container } from "@/app/ui/layout/containers";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./style.css"
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Slideshow`.
 */
export type SlideshowProps = SliceComponentProps<Content.SlideshowSlice>;

/**
 * Component for "Slideshow" Slices.
 */
const Slideshow = ({ slice }: SlideshowProps): JSX.Element => {

  return (
    <Container className="relative overflow-hidden !mx-0 px-4">
      <div className="col-span-5 xl:col-span-7 xl:col-start-4 mb-7">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {slice.items.map((item, i) => {return (<SwiperSlide key={i}><PrismicNextImage field={item.image} /></SwiperSlide>)})}
        </Swiper>
      </div>
    </Container>
  );
};

export default Slideshow;
