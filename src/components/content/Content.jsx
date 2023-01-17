import React from "react";

import Catalog from "./catalog/Catalog";
import styles from './Content.module.css'

function Content() {
    return (
        <section className={styles.content}>
            <Catalog />
        </section>
    );
}

export default Content;

