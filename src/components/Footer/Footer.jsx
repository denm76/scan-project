import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <Link to='/'>
        <img src='/images/header/icons/logo_white.svg' alt='scan project' />
      </Link>
      <div className={styles.footer__contacts}>
        <p>г. Москва, Цветной б-р, 40</p>
        <a href='tel:+74957712111'>+7 495 771 21 11</a>
        <a className={styles["footer__mail"]} href='mailto:info@skan.ru'>
          info@skan.ru
        </a>
        <p>Copyright. 2023</p>
      </div>
    </div>
  );
}

export default Footer;
