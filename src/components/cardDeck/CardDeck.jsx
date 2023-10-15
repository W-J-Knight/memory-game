import style from "./CardDeck.module.css";
import { useGlobalContext } from "../../context/cardDeckContext";
import Card from "../card/Card";
import useCompare from "../../hooks/useCompare";


const CardDeck = () => {

  const { shuffledCards} = useGlobalContext();
 
 
 useCompare()
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
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardDeck;
