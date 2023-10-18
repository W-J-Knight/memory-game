import { PropTypes } from "prop-types";
import styles from "./Card.module.css";

import { useGameContext } from "../../context/gameLogicContext";

const Card = ({ card, Icon, Back, flipped }) => {
 
  const {
    choiceOne,
    setChoiceTwo,
    setChoiceOne,
    choiceTwo,
    setDisabled,
  } = useGameContext();

  const handleClick = () => {

    choiceTwo
      ? setDisabled(true)
      : choiceOne
      ? setChoiceTwo(card)
      : setChoiceOne(card);
  };
  return (

    <div
      className={flipped ? `${styles.flipped}   ${styles.card}` : styles.card}
    >
      <div className={styles.front}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.back} onClick={handleClick}>
        <Back className={styles.icon} />
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object.isRequired,
  Icon: PropTypes.object.isRequired,
  Back: PropTypes.object.isRequired,
  flipped: PropTypes.string.isRequired,
};
export default Card;
