import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import Container from "../layout/Container";
import images from "./bannerItems";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slides = styled.div``;
const Img = styled.img`
  width: 100%;
  max-height: 800px;
  height: 100%;
`;
const ContainerItem = styled(Container)`
  .swiper {
    --swiper-theme-color: #46972b;
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-pagination-bullet-inactive-opacity: 0.6;
    &-pagination {
      &-bullet {
        width: 30px;
        height: 3px;
        border-radius: 0;
        &-active {
          width: 30px;
          height: 3px;
          border-radius: 0;
        }
      }
    }
  }
`;

const Banner = () => {
  return (
    <section>
      <ContainerItem>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={true}
          speed={1000}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Slides>
                <Img src={img.img} alt="" />
              </Slides>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerItem>
    </section>
  );
};

export default Banner;
