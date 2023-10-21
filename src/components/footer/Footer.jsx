import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <ul className={styles.navigation}>
      <li>
        <NavLink to="/"   
          
          className={({ isActive }) =>
            styles.navLinks +
            (isActive ? ` ${styles.activated}` : styles.navLinks)
          }>Home</NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive }) =>
            styles.navLinks +
            (isActive ? ` ${styles.activated}` : styles.navLinks)
          }
        >
          About
        </NavLink>
      </li>
    </ul>
  );
}

export default Footer