import React, { useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonial({ testimonials, TestimonialPage }) {
  useEffect(() => {
    import("swiper/css");
    import("swiper/css/navigation");
  }, []);
  return (
    <section className="mt-160 relative block max-lg:mt-100 max-sm:mt-20">
      <div
        className="max-w-container-l mx-auto max-xl:mx-20
    max-lg:mx-060 max-md:mx-10 max-sm:mx-5"
      >
        <div className="flex items-end justify-between max-lg:flex-col max-lg:items-start max-lg:gap-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-black-strom tracking-tightg my-0 text-64xl font-bold font-fraunces leading-72 max-w-625 max-lg:text-56xl max-lg:leading-64 max-md:text-5xl max-md:leading-56 max-sm:text-4xl max-sm:leading-44"
          >
            {TestimonialPage?.Header}
          </h1>
          <a
            href={TestimonialPage?.button?.link}
            className="text-white bg-black-strom px-6 py-3 text-base font-medium leading-6 rounded-sm1 hover:bg-chi-black"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {TestimonialPage?.button?.text}
          </a>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          loop
          className="h-auto mt-16 text-center relative overflow-hidden max-lg:mt-060 max-md:mt-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="z-1 h-full whitespace-nowrap block relative left-0 right-0 overflow-hidden testimonial-slider">
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={`testimonial-` + index}>
                  <div className="align-top w-full h-full whitespace-normal inline-block relative text-left">
                    <div className="gap-20 border border-black-strom bg-white rounded-2xl flex items-center overflow-hidden max-lg:flex-col max-lg:gap-60 max-lg:items-start max-md:flex-col max-sm:gap-10">
                      <div className="w-440 h-502 border-r border-r-black-strom flex-grow-0 flex-shrink-0 basis-auto max-lg:w-full max-lg:h-auto max-lg:border-b max-lg:border-b-black-strom max-lg:border-r-white">
                        <img
                          src={testimonial.data.image}
                          className="h-full object-cover rounded-tl-2xl rounded-bl-2xl max-lg:rounded-bl-none max-lg:rounded-tr-2xl"
                          alt={"testimonial"}
                          height={502}
                          width={440}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="w-full flex-col items-start flex flex-grow-0 flex-shrink basis-auto max-lg:w-full max-lg:px-060 max-lg:pb-060 max-md:max-w-none max-md:mr-0 max-md:px-10 max-md:pb-10 max-sm:px-5 max-sm:pb-25">
                        <div className="w-full justify-between flex">
                          <div>
                            <div className="text-black-strom text-22xl font-semibold font-fraunces leading-30">
                              {testimonial.data.name}
                            </div>
                            <div className="text-c-black mt-06 text-base font-normal font-inter leading-6 max-sm:mt-1 max-sm:text-sm max-sm:leading-5">
                              {testimonial.data.post}
                            </div>
                          </div>
                          <img
                            src={testimonial.data.logo}
                            className="max-w-none !w-fit max-sm:!w-20"
                            alt={"testimonial-logo"}
                            height={100}
                            width={100}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-black-strom mt-38 text-22xl italic font-normal leading-30 max-lg:mt-30 max-sm:mt-5 max-sm:text-lg max-sm:leading-6">
                          {testimonial.data.description}
                        </div>
                        <div className="mt-052 max-lg:mt-12 max-md:mt-10 max-sm:mt-5">
                          <div className="text-black-strom text-64xl font-semibold leading-72 max-sm:text-40xl max-sm:leading-48">
                            {testimonial.data.rating}
                            <span className="text-56xl leading-64 max-sm:text-34xl max-sm:leading-42">
                              X
                            </span>
                          </div>
                        </div>
                        <div className="text-black-strom uppercase font-semibold mt-3 font-inter tracking-tightxl">
                          Higher Acquiant rate
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
