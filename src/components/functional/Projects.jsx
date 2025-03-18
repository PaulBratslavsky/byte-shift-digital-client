import React, { useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slug } from "github-slugger";

function Projects({ projects }) {
  useEffect(() => {
    import("swiper/css");
    import("swiper/css/navigation");
  }, []);
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={2.5}
      loop
      navigation
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        842: {
          slidesPerView: 1.5,
        },
        980: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 2.5,
        },
        1800: {
          slidesPerView: 2.8,
        },
        2560: {
          slidesPerView: 3.5,
        },
      }}
      className='w-full z-1 whitespace-nowrap h-full relative project-slider s-wrapper pt-12'
      data-aos='fade-up'
      data-aos-duration='1500'>
      {projects.map((project, index) => {
        return (
          <SwiperSlide key={`project-` + index} className='flex-shrink'>
            <div className='mr-8 align-top w-520 h-full whitespace-normal text-left relative max-lg:mr-10 max-sm:w-full inline-block'>
              <a
                href={`/projects/${slug(project.data.name)}`}
                className='w-full max-w-full inline-block'>
                <div className='justify-center items-end flex relative'>
                  <div className='w-auto h-580 max-md:h-full max-md:w-full'>
                    <img
                      src={project.data.image}
                      className='w-full h-full rounded-xl object-cover'
                      alt='project'
                      height={580}
                      width={580}
                      loading='lazy'
                      decoding='async'
                    />
                  </div>
                  <div className='w-488 bg-white rounded-sm1 justify-between items-center mb-4 py-7 pr-8 pl-7 flex absolute max-lg:w-90% max-sm:w-95% max-sm:gap-010 max-sm:p-5'>
                    <div>
                      <h1 className='text-black-strom tracking-tighth my-0 font-fraunces text-26xl font-bold leading-34 max-lg:text-2xl max-sm:text-xl max-sm:leading-6'>
                        {project.data.name}
                      </h1>
                      <div className='flex mt-014 gap-010 max-sm:gap-2 max-sm:mt-010'>
                        {project.data.services.map((category, index) => {
                          return (
                            <ul
                              className='text-black-strom mb-0 pl-5 list-disc max-sm:pl-4'
                              key={`category-${index}`}>
                              <li>
                                <div className='text-base font-inter font-normal leading-6 max-sm:text-sm'>
                                  {category}
                                </div>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                    <div className='inline-block overflow-hidden no-underline after:h-px after:w-full after:translate-x-100 after:bg-black-strom after:absolute after:bottom-0 after:-left-[100px] hover:after:translate-x-[30%] after:transition after:duration-500 after:ease-in-out relative'>
                      <div className='text-lg font-inter font-semibold text-black-strom max-sm:text-base'>
                        Discover More
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Projects;
