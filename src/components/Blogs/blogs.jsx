import styled from "styled-components";

export default function RecentBlogs() {
  return (
    <Wrapper>
      <Heading>RECENT BLOGS</Heading>

      <BlogsContainer>
        <BlogCard>
          <img src="/src/assets/OurStory.png" alt="Know our story" />
          <Date>07 June, 2025</Date>
          <Title>KNOW OUR STORY</Title>
        </BlogCard>

        <BlogCard>
          <img src="/src/assets/Behind.png" alt="Behind the designs" />
          <Date>12 June, 2025</Date>
          <Title>BEHIND THE DESIGNS</Title>
        </BlogCard>
      </BlogsContainer>

      <Features>
        <FeatureItem>
          <img src="/src/assets/Screenshot from 2025-11-19 16-15-29.png" alt="" />
          <p>IGI/GIA CERTIFIED</p>
        </FeatureItem>

        <FeatureItem>
          <img src="/src/assets/Screenshot from 2025-11-19 16-15-35.png" alt="" />
          <p>FREE & FAST<br />WORLDWIDE SHIPPING</p>
        </FeatureItem>

        <FeatureItem>
          <img src="/src/assets/Screenshot from 2025-11-19 16-15-40.png" alt="" />
          <p>ETHICALLY SOURCED<br />MATERIALS</p>
        </FeatureItem>

        <FeatureItem>
          <img src="/src/assets/Screenshot from 2025-11-19 16-15-44.png" alt="" />
          <p>LIFETIME WARRANTY<br />AND SUPPORT</p>
        </FeatureItem>
      </Features>

      <MembershipText>
    
      </MembershipText>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100%;
  padding: 100px 60px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  background: #ffffff;
  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 40px;
  }
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 1.9rem;
  letter-spacing: 3px;
  color: #3d2f2b;
`;

const BlogsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;

  img {
    width: 100%;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Date = styled.span`
  margin-top: 12px;
  font-size: 13px;
  color: #6e6260;
`;

const Title = styled.h3`
  margin-top: 6px;
  font-size: 1rem;
  letter-spacing: 1px;
  color: #3d2f2b;
`;

const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  text-align: center;
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 0.85rem;
  color: #3d2f2b;
  letter-spacing: 0.5px;

  img {
    width: 45px;
    height: 45px;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.2;
  }
`;

const MembershipText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  letter-spacing: 3px;
  padding-top: 20px;
  color: #3d2f2b;
  border-top: 1px solid #f0f0f0;
`;
