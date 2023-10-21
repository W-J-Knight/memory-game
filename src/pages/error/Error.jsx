import { NavLink } from 'react-router-dom';
import styles from './Error.module.css'

const Error = () => {
  return (
    <section className={styles.page}>
      <div className={styles.message}>
        <h1>Sorry</h1>
        <p>An Error has Occurred</p>
        <NavLink className={styles.button}>Go to Home</NavLink>
      </div>
    </section>
  );
}

export default Error