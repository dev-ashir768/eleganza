"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useWindowSize } from "@uidotdev/usehooks";

const HeroSection = () => {
  const links = [
    {
      id: "1",
      title: "hero-banner-1",
      slogan: "elevate your style with elegant touch",
      path: `/images/hero-banner1-${
        useWindowSize().width >= 768 ? "desktop" : "mobile"
      }.jpg`,
      imgwidth: `${useWindowSize().width >= 768 ? "1920" : "800"}`,
      imgheight: `${useWindowSize().width >= 768 ? "722" : "524"}`,
    },
    {
      id: "2",
      title: "hero-banner-2",
      slogan: "embrace elegance ignite confidenc",
      path: `/images/hero-banner2-${
        useWindowSize().width >= 768 ? "desktop" : "mobile"
      }.jpg`,
      imgwidth: `${useWindowSize().width >= 768 ? "1920" : "800"}`,
      imgheight: `${useWindowSize().width >= 768 ? "722" : "524"}`,
    },
    {
      id: "3",
      title: "hero-banner-3",
      slogan: "unleash your inner style icon",
      path: `/images/hero-banner3-${
        useWindowSize().width >= 768 ? "desktop" : "mobile"
      }.jpg`,
      imgwidth: `${useWindowSize().width >= 768 ? "1920" : "800"}`,
      imgheight: `${useWindowSize().width >= 768 ? "722" : "524"}`,
    },
    {
      id: "4",
      title: "hero-banner-4",
      slogan: "unleash your inner chic exude timeless beauty",
      path: `/images/hero-banner4-${
        useWindowSize().width >= 768 ? "desktop" : "mobile"
      }.jpg`,
      imgwidth: `${useWindowSize().width >= 768 ? "1920" : "800"}`,
      imgheight: `${useWindowSize().width >= 768 ? "722" : "524"}`,
    },
    {
      id: "5",
      title: "hero-banner-5",
      slogan: "enter elegance walk with flair",
      path: `/images/hero-banner5-${
        useWindowSize().width >= 768 ? "desktop" : "mobile"
      }.jpg`,
      imgwidth: `${useWindowSize().width >= 768 ? "1920" : "800"}`,
      imgheight: `${useWindowSize().width >= 768 ? "722" : "524"}`,
    },
  ];
  return (
    <>
      <section className="mt-[63px]">
        <Swiper
          className="h-full"
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {links.slice(0, 5).map((link, index) => (
            <>
              <SwiperSlide key={index}>
                <div>
                  <Image
                    src={link.path}
                    width={link.imgwidth}
                    height={link.imgheight}
                    priority
                    alt={link.title}
                  />
                </div>
                <div className="container absolute top-0 inset-0 flex justify-start items-center">
                  <div className="lg:max-w-[512px] md:max-w-[378px] max-w-[512px] space-y-14">
                    <div>
                      <h1 className="text-white xl:text-[60px] lg:text-[48px] sm:text-[48px] text-[40px] md:leading-none leading-none sm:leading-tight font-medium capitalize tracking-wide">
                        {link.slogan}
                      </h1>
                    </div>
                    <div className="w-max relative">
                      <Link
                        href="/"
                        className="capitalize text-white font-medium text-base w-[110px] inline-block text-center py-2 px-1 border"
                      >
                        shop now
                      </Link>
                      <span className="absolute top-0 right-[-5px] w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-primary "></span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HeroSection;
