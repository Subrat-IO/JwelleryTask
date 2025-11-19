import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* ----------------- COMPONENT ----------------- */

export default function DiamondsSection() {
  return (
    <Wrapper>
      {/* TOP SECTION */}
      <TopSection>
        <ImageBox>
          {/* Put diamond-lab.jpg in public/images OR change path to import */}
          <img src="https://img.tatacliq.com/images/i13/437Wx649H/MP000000019389113_437Wx649H_202309242235462.jpeg" alt="Lab grown diamonds" />
        </ImageBox>

        <Content>
          <Title>BRILLIANCE OF LAB GROWN DIAMONDS</Title>
          <Desc>
            Design jewelry that tells your story. From gemstone choices to
            engravings, make it yours, crafted with care just for you.
          </Desc>
          <Button>CUSTOMIZE</Button>
        </Content>
      </TopSection>

      {/* SLIDER SECTION */}
      <ReviewHeading>WHAT OUR CUSTOMERS SAY</ReviewHeading>

      <ReviewSlider>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation
          modules={[Navigation]}
          className="diamondSwiper"
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          <SwiperSlide><img src="https://m.media-amazon.com/images/I/81rwLRrgVpL._AC_UY1100_.jpg" alt="review 1" /></SwiperSlide>
          <SwiperSlide><img src="https://m.media-amazon.com/images/I/71Q8QHFEwQL._AC_UY1100_.jpg" alt="review 2" /></SwiperSlide>
          <SwiperSlide><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwba4027ef/images/hi-res/50D3I3FKSAA02_1.jpg?sw=480&sh=480" alt="review 3" /></SwiperSlide>
          <SwiperSlide><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcfbf242b/images/hi-res/502213FOSAA02_1.jpg?sw=640&sh=640" alt="review 4" /></SwiperSlide>
        </Swiper>
      </ReviewSlider>
    </Wrapper>
  );
}

/* ----------------- STYLED COMPONENTS ----------------- */

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 40px;
  }
`;

const TopSection = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageBox = styled.div`
  width: 50%;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #3d2f2b;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #6e6260;
  line-height: 1.5;
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Button = styled.button`
  border: 1px solid #d34b6f;
  padding: 10px 45px;
  background: transparent;
  color: #d34b6f;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 4px;
  transition: 0.3s ease;

  &:hover {
    background: #d34b6f;
    color: white;
  }
`;

const ReviewHeading = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  letter-spacing: 3px;
  color: #3d2f2b;
`;

const ReviewSlider = styled.div`
  width: 100%;

  .diamondSwiper img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #3d2f2b;
  }
`;
