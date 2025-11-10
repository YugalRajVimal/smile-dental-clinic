import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Straight Teeth, Invivisible Braces",
    subtitle:
      "Achieve a beautifully aligned smile without metal brackets. Invisalign® and other clear aligner systems offer a discreet, comfortable way to straighten your teeth.",
    image: "/Banner11.jpg",
  },
  {
    id: 2,
    title: "Dental Care For, Healthy Smiles",
    subtitle:
      "Our dental team is dedicated to helping you maintain a healthy, beautiful smile through personalized care and gentle treatments. for a lifetime of confidence and comfort.",
    image: "/Banner22.jpg",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden rounded-b-3xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        // effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-start px-6 md:px-16"
              >
                <div className="backdrop-blur-md bg-white/10 p-6 md:p-10 rounded-2xl max-w-2xl text-left">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mb-6">
                    {slide.subtitle}
                  </p>
                  <button className="bg-[#7367F0] hover:bg-[#6157d9] text-white font-medium px-6 py-3 rounded-xl transition">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
