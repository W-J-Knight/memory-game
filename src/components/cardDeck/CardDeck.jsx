import style from "./CardDeck.module.css"
import { useGlobalContext } from "../../context/cardDeckContext";
import Card from "../card/Card";

const CardDeck = () => {
     const { shuffledCards, cardsBackIcons } = useGlobalContext();

  return (
    <>
      {shuffledCards && (
        <div className={style.table}>
          
            {shuffledCards.map((card) => {
              return <Card key={card.id} {...card} />;
            })}
        
        </div>
      )}
    </>
  );
}

export default CardDeck