import { FC, useCallback } from "react";
import { TStoreItem } from "../../shared/models/store";
import {
  StyledButtonContainer,
  StyledStoreItem,
  StyledStoreItemPrice,
  StyledStoreItemTitle,
  StyledSubTitle,
} from "./styles";
// @ts-expect-error: remote app
import Button from "common/Button";

interface IStoreItem extends Omit<TStoreItem, "id"> {
  cardNumber: string;
  isDisabled: boolean;
  spendMoney: (cardNumber: string, price: number) => void;
}

export const StoreItem: FC<IStoreItem> = ({
  cardNumber,
  title,
  price,
  isDisabled,
  spendMoney,
}) => {
  const handlePurchase = useCallback(() => {
    if (isDisabled) {
      return;
    }

    spendMoney(cardNumber, price);
  }, [cardNumber, isDisabled, price, spendMoney]);

  return (
    <StyledStoreItem>
      <StyledStoreItemTitle>{title}</StyledStoreItemTitle>
      <div>
        <StyledSubTitle>Price:</StyledSubTitle>
        <StyledStoreItemPrice>{price}</StyledStoreItemPrice>
      </div>
      <StyledButtonContainer>
        <Button disabled={isDisabled} onClick={handlePurchase}>
          Buy
        </Button>
      </StyledButtonContainer>
    </StyledStoreItem>
  );
};
