import { createContext, useState, useContext } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import {
  GiGhost,
  GiFloatingGhost,
  GiAlienSkull,
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
  const cardsIcons = [
    { Icon: GiGhost, matched: false },
    { Icon: GiCandleSkull, matched: false },
    { Icon: GiWitchFace, matched: false },
    { Icon: GiWerewolf, matched: false },
    { Icon: GiVampireCape, matched: false },
    { Icon: GiDevilMask, matched: false },
    { Icon: GiMonsterGrasp, matched: false },
    { Icon: GiDeathJuice, matched: false },
    { Icon: WiStars, matched: false },
    { Icon: GiStarSwirl, matched: false },
    { Icon: GiStarSattelites, matched: false },
    { Icon: BsMoonStarsFill, matched: false },
  ];
  // const [shuffledCards, setShuffledCards] = useState(null);
  // const shuffleCards = () => {
  //   setShuffledCards((preValue) =>{
  //   return (preValue = [...cardsIcons, ...cardsIcons]
  //     .sort(() => Math.random() - 0.5)
  //     .map((card, index) => ({ ...card, id: index })))})
  // };
  // shuffleCards();
  const value = { cardsIcons, shuffledCards, setShuffledCards };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
