import React from "react";

import Nav from "./nav/Nav";

import styles from './Header.module.css'


function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                @Alexander_1ov 
            </div>
            <Nav />
        </header>
    );
}

export default Header;

