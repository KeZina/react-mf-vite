import { useMemo } from "react";
import { StoreItem } from "../../entities/StoreItem";
import { TStoreItems } from "../../shared/models/store";
import { StyledStoreList } from "./styles";
// @ts-expect-error: remote app
import useUserCardsStore from "cards/useUserCardsStore";

const mock: TStoreItems = [
  {
    id: 1,
    title: "Cucumber",
    price: 10,
  },
  {
    id: 2,
    title: "Pumpkin",
    price: 12,
  },
  {
    id: 3,
    title: "Strawberry",
    price: 545,
  },
];

// TODO add react-hook-form
export const StoreList = () => {
  const userCards = useUserCardsStore((state: any) => state.cards);
  const spendMoney = useUserCardsStore((state: any) => state.spendMoney);

  const defaultCard = useMemo(() => {
    return userCards.find((card: any) => card.isDefault);
  }, [userCards]);

  const storeItems = mock.map((item) => {
    return (
      <StoreItem
        key={item.id}
        cardNumber={defaultCard?.number}
        title={item.title}
        price={item.price}
        spendMoney={spendMoney}
        isDisabled={!defaultCard || defaultCard.money < item.price}
      />
    );
  });

  return <StyledStoreList>{storeItems}</StyledStoreList>;
};
