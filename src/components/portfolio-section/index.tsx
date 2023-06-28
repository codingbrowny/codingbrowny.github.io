"use client";
import React from "react";
import Link from "next/link";
import ProjectCard from "../project-card";
import { Projects } from "@/utils/vendor";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const responsiveSwipper = {
  768: {
    slidesPerView: 2,

  },
  1024: {
    slidesPerView: 3,
  },
};

const PortfolioSection = () => {

  const swiper = useSwiper()

  return (
    <section id="portfolio" className="container space-y-10">
      <h3 className="text-3xl text-center font-semibold">My Works</h3>
      <Swiper
        className="relative"
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={40}
        breakpoints={responsiveSwipper}
        modules={[Navigation, Keyboard, Mousewheel]}
        navigation={{
          nextEl: ".swipe-next",
          prevEl: ".swipe-prev",
        }}
      >
        {Projects.map((item) => (
          <SwiperSlide key={item.id}>
            <ProjectCard data={item} />
          </SwiperSlide>
        ))}
        <div className="swipe-prev swiper-button-prev text-3xl text-primary after:content-[''!important]">
          <FaAngleLeft />
        </div>
        <div className="swipe-next swiper-button-next text-3xl text-primary after:content-[''!important]">
          <FaAngleRight />
        </div>
      </Swiper>
      <div className="w-full flex items-center justify-center">
        <Link
          href=""
          className="relative w-fit px-10 py-3 z-10 text-white after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-primary after:-z-10 hover:after:scale-95 after:transition-all after:duration-300 after:rounded"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
