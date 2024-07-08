import { TCards } from "./card";

export type TUserCardsStore = {
  cards: TCards;
  setCardAsDefault: (cardNumber: string) => void;
  spendMoney: (cardNumber: string, amount: number) => void;
};
