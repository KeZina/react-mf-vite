import { FC, useCallback, useMemo } from "react";
import { TCard } from "../../shared/models";
import {
  StyledCard,
  StyledCardFooter,
  StyledCardHeader,
  StyledCardMoney,
  StyledCardNumber,
} from "./styles";
import dayjs from "dayjs";

interface ICardProps extends TCard {
  setCardAsDefault: (number: string) => void;
}

export const Card: FC<ICardProps> = ({
  number,
  expAt,
  money,
  isDefault,
  setCardAsDefault,
}) => {
  const cardNumber = useMemo(() => {
    let cardNumber = "";

    for (let i = 0; i < number.length; i++) {
      cardNumber += number[i];

      if ((i + 1) % 4 === 0) {
        cardNumber += " ";
      }
    }

    return cardNumber;
  }, [number]);

  const expDate = useMemo(() => {
    const date = dayjs(expAt);

    return `${date.format("MM")}/${date.format("YY")}`;
  }, [expAt]);

  const handleSetCardAsDefault = useCallback(() => {
    setCardAsDefault(number);
  }, [number, setCardAsDefault]);

  return (
    <StyledCard $isDefaultCard={isDefault} onClick={handleSetCardAsDefault}>
      <StyledCardHeader>
        <StyledCardNumber>{cardNumber}</StyledCardNumber>
        <span>{expDate}</span>
      </StyledCardHeader>
      <StyledCardFooter>
        <StyledCardMoney>{money}</StyledCardMoney>
        {isDefault && <span>Default card</span>}
      </StyledCardFooter>
    </StyledCard>
  );
};
