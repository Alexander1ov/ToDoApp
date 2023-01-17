import React from "react";

import clNav from '../Header.module.css'

function Nav() {
    return (
            <nav className={clNav.menu}>
                <ul className="menu__list">
                    <li> <a href="#header">skils</a></li>
                    <li><a href="#portfolio">work</a></li>
                    <li><a href="#footer-contacts">project</a></li>
                    <li><a href="#footer-contacts">contact</a></li>

                </ul>
            </nav>
    );
}

export default Nav;