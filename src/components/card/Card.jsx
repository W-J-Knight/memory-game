import styles from "./Card.module.css"
import { useGlobalContext } from "../../context/cardDeckContext";
const Card = ({Icon, Back}) => {
    const { shuffledCards } = useGlobalContext();

  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.back}>
        <Back className={styles.icon} />
      </div>
    </div>
  );
}

export default Card