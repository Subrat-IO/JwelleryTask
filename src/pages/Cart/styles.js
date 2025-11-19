import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 10%;
  min-height: 70vh;
`;

export const Title = styled.h2`
  letter-spacing: 3px;
  font-weight: 300;
  margin-bottom: 35px;
  color: #272020;
`;

export const EmptyText = styled.p`
  font-size: 1.1rem;
  color: #7a6f6c;
  text-align: center;
  margin-top: 50px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  transition: .3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
  color: #312b27;
`;

export const Price = styled.div`
  color: #6d625f;
  font-size: 0.9rem;
`;

export const QtyBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d4c9c6;
  border-radius: 6px;
  overflow: hidden;
`;

export const QtyBtn = styled.button`
  padding: 6px 10px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  border: none;
  color: #3a2e2b;
  &:hover {
    background: #f5f1f0;
  }
`;

export const QtyInput = styled.div`
  padding: 6px 14px;
  font-size: 14px;
  color: #3a2e2b;
`;

export const RemoveBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  color: #b3a39f;
  &:hover {
    color: #e84b4b;
  }
`;

export const Footer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #312b27;
`;

export const CheckoutBtn = styled.button`
  padding: 10px 22px;
  border: none;
  background: #CF6276;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: .9rem;
  margin-right: 10px;
  &:hover {
    background: #c6536a;
  }
`;

export const ClearBtn = styled.button`
  padding: 10px 22px;
  border: 1px solid #d4c9c6;
  background: transparent;
  color: #6a5b57;
  border-radius: 6px;
  cursor: pointer;
  font-size: .9rem;
  &:hover {
    background: #f5f1f0;
  }
`;
