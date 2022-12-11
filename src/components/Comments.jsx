import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import Container from "../layout/Container";
import items from "./commetsItems";

const Swipers = styled(Swiper)`
  padding: 100px 0;
  --swiper-theme-color: #46972b;
  --swiper-pagination-bullet-inactive-color: #46972b;
  --swiper-pagination-bullet-inactive-opacity: 0.3;

  @media (max-width: 786px) {
    width: 100%;
  }
`;

const SliderInner = styled.div`
  /* padding: 100px 0; */
  position: relative;
  text-align: center;
  margin: 0 auto;
  width: 60%;

  @media (max-width: 786px) {
    width: 100%;
  }

  & h5 {
    font-size: 24px;
    margin-bottom: 0.4em;
    color: #000;
  }
`;

const Text = styled.p`
  line-height: 1.5;
  color: #000;
`;

const IconLeft = styled.p`
  position: absolute;
  left: 0;
  top: -20%;
  color: #46972b;
  font-size: 28px;
`;

const IconRight = styled.p`
  position: absolute;
  right: 0;
  bottom: -20%;
  color: #46972b;
  font-size: 28px;
`;

const Comments = () => {
  return (
    <section>
      <Container>
        <Swipers
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={true}
          speed={2000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <SliderInner>
                <IconLeft>
                  <ImQuotesLeft />
                </IconLeft>
                <h5>{item.user}</h5>
                <Text>{item.text}</Text>
                <IconRight>
                  <ImQuotesRight />
                </IconRight>
              </SliderInner>
            </SwiperSlide>
          ))}
        </Swipers>
      </Container>
    </section>
  );
};

export default Comments;
