import styles from "./Card.module.css"
import { useGlobalContext } from "../../context/cardDeckContext";
import { useGameContext } from "../../context/gameLogicContext";

const Card = ({card,  Icon, Back, matched,}) => {
  const { shuffledCards } = useGlobalContext();
  const handleClick = () => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
 const { choiceOne, setChoiceTwo, setChoiceOne, choiceTwo } = useGameContext();
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.back}>
        <Back className={styles.icon} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Card