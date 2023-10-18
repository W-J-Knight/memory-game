import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <ul>
      <li>
        <NavLink to="/"
        >Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
    </ul>
  );
}

export default Footer