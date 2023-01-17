import React from "react";
import styles from './Footer.module.css';

function Footer() {

    let today = new Date();
    let year = today.getFullYear()
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                © Copyright {year} <br />
                Все права защищены
            </div>
        </footer>
    );
}
export default Footer;