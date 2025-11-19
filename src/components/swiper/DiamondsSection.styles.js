import styled from "styled-components";

export const Wrapper = styled.div`
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

export const TopSection = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageBox = styled.div`
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

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #3d2f2b;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: #6e6260;
  line-height: 1.5;
  width: 80%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Button = styled.button`
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

export const ReviewHeading = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  letter-spacing: 3px;
  color: #3d2f2b;
`;

export const ReviewSlider = styled.div`
  width: 100%;
  .diamondSwiper img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #3d2f2b;
  }
`;
