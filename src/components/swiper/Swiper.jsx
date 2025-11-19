import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.css";

const videoTestimonials = [
  {
    src: "videos/219228.mp4",
    name: "Alice Johnson",
    text: "Can you guess which one has natural diamonds? Natural VS Lab-grown.",
  },
  {
    src: "videos/146131-788410158.mp4",
    name: "Ravi Shah",
    text: "Your go-to diamond necklace every single day.",
  },
  {
    src: "videos/8246552-hd_1920_1080_25fps.mp4",
    name: "Julia Kim",
    text: "Breathtaking cut. Love my diamond ring.",
  },
  {
    src: "videos/6570503-hd_1080_1920_25fps.mp4",
    name: "Priya Desai",
    text: "Absolutely stunning! Highly recommended.",
  },
];

/* ----------------- COMPONENT ----------------- */

export default function DiamondsSection() {
  return (
    <Wrapper>
      {/* TOP SECTION */}
      <TopSection>
        <ImageBox>
          <img
            src="https://img.tatacliq.com/images/i13/437Wx649H/MP000000019389113_437Wx649H_202309242235462.jpeg"
            alt="Lab grown diamonds"
          />
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
          modules={[Navigation]}
          navigation
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={40}
          className={styles.diamondSwiper}
          breakpoints={{
            0: { slidesPerView: 1.15, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {videoTestimonials.map((review, idx) => (
            <SwiperSlide key={idx}>
              <VideoBox>
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  className={styles.reviewVid}
                >
                  <source src={review.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Caption>
                  <ReviewText>{review.text}</ReviewText>
                  <Reviewer>{review.name}</Reviewer>
                </Caption>
              </VideoBox>
            </SwiperSlide>
          ))}
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

const VideoBox = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  background: #f9f6f4;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(52, 41, 38, 0.55);
  padding: 18px 18px 12px 18px;
  color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const ReviewText = styled.div`
  font-size: 1.08rem;
  font-weight: 500;
  margin-bottom: 5px;
  line-height: 1.4;
  letter-spacing: 1px;
`;

const Reviewer = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.8;
`;