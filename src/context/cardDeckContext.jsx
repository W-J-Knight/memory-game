import { createContext, useState, useContext } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import {
  GiGhost,
  GiCandleSkull,
  GiWitchFace,
  GiWerewolf,
  GiVampireCape,
  GiDevilMask,
  GiMonsterGrasp,
  GiDeathJuice,
  GiStarSwirl,
  GiStarSattelites,
} from "react-icons/gi";
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const AppContext = ({ children }) => {
  const [shuffledCards, setShuffledCards] = useState(null)
  const cardsFrontIcons = [
    { Icon: GiGhost, matched: false },
    { Icon: GiCandleSkull, matched: false },
    { Icon: GiWitchFace, matched: false },
    { Icon: GiWerewolf, matched: false },
    { Icon: GiVampireCape, matched: false },
    { Icon: GiDevilMask, matched: false },
    { Icon: GiMonsterGrasp, matched: false },
    { Icon: GiDeathJuice, matched: false },
    { Icon: BsMoonStarsFill, matched: false },
  ];
  const cardsBackIcons =[
    { Back: WiStars},
    { Back: GiStarSwirl},
    { Back: GiStarSattelites},
  ]
 const back = cardsBackIcons[Math.floor(Math.random() * cardsBackIcons.length)];
  const value = {
    cardsFrontIcons,
    shuffledCards,
    setShuffledCards,
    cardsBackIcons,
    back,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
