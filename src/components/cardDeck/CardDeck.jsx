import style from "./CardDeck.module.css";
import { useGlobalContext } from "../../context/cardDeckContext";
import Card from "../card/Card";
import useCompare from "../../hooks/useCompare";
import { useGameContext } from "../../context/gameLogicContext";


const CardDeck = () => {
  const { shuffledCards } = useGlobalContext();
  const { choiceOne, choiceTwo } = useGameContext();

  useCompare();
  console.log(shuffledCards);
  return (
    <>
      {shuffledCards && (
        <div className={style.table}>
          {shuffledCards.map((card) => {
            return (
              <Card
                key={card.id}
                {...card}
                card={card}
                flipped={
                  card === choiceOne ||
                  card === choiceTwo ||
                  card.matched === true
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardDeck;
