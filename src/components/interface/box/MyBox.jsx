import React from "react";

import styles from './MyBox.module.css'

function MyBox({ children, setVisible }) {

    return (
        <div className={styles.myBox} onClick={() => setVisible(false)}>
            <div className={styles.myBoxContent} onClick={(e) => e.stopPropagation()}>     {/* При нажатии на myBoxContent окно не пропадает "stopPropagation" */}

                {children}
            </div>
        </div>
    );
}

export default MyBox;