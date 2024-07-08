import styled from "styled-components";

export const StyledCard = styled.div<{ $isDefaultCard: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 24px;
  background-color: rgb(0 249 108);
  box-shadow: ${(props) =>
    props.$isDefaultCard
      ? "rgb(249 240 0) 0px 0px 10px"
      : "rgb(0 249 108) 0px 0px 10px"};
  border-radius: 12px;
  cursor: pointer;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledCardNumber = styled.span`
  font-weight: 600;
`;

export const StyledCardMoney = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const StyledCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
