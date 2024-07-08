import { create } from "zustand";
import { TCards } from "../models/card";
import { TUserCardsStore } from "../models/userCardsStore";

const mock: TCards = [
  {
    number: "3928174859674218",
    expAt: Date.now() + Date.now() / 2,
    money: 544,
    isDefault: true,
  },
  {
    number: "5983274910289123",
    expAt: Date.now() + Date.now() / 4,
    money: 29,
    isDefault: false,
  },
  {
    number: "9353839175389021",
    expAt: Date.now() - Date.now() / 10,
    money: 0,
    isDefault: false,
  },
];

// TODO add transfer from one card to another
export const useUserCardsStore = create<TUserCardsStore>((set) => ({
  cards: mock,
  setCardAsDefault: (cardNumber: string) =>
    set((state) => {
      const cards = state.cards.map((card) => {
        if (card.number === cardNumber) {
          return {
            ...card,
            isDefault: true,
          };
        } else {
          return {
            ...card,
            isDefault: false,
          };
        }
      });

      return { cards };
    }),
  spendMoney: (cardNumber: string, amount: number) =>
    set((state) => {
      const cards = state.cards.map((card) => {
        if (card.number === cardNumber) {
          return {
            ...card,
            money: card.money - amount,
          };
        } else {
          return card;
        }
      });

      return { cards };
    }),
}));

export default useUserCardsStore;
