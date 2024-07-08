import { Card } from "../../entities/Card";
import { useUserCardsStore } from "../../shared/store";
import { StyledUserCardsList } from "./styles";

export const UserCardsList = () => {
  const cards = useUserCardsStore((state) => state.cards);
  const setCardAsDefault = useUserCardsStore((state) => state.setCardAsDefault);

  const cardsList = cards.map((card) => {
    // TODO check if card is expired
    return (
      <Card
        key={card.number}
        number={card.number}
        expAt={card.expAt}
        money={card.money}
        isDefault={card.isDefault}
        setCardAsDefault={setCardAsDefault}
      />
    );
  });

  return <StyledUserCardsList>{cardsList}</StyledUserCardsList>;
};
