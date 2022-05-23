import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to={'/profile'}
                     className={s.item}
                     activeClassName={s.activeLink}> Profile
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/dialogs/'}
                     className={s.item}
                     activeClassName={s.activeLink}> Messages
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/news'}
                     className={s.item}
                     activeClassName={s.activeLink}> News
            </NavLink>
        </div>
        <div className={s.item}> Music</div>
        <div className={s.item}>
            <NavLink to={'/users'}
                     className={s.item}
                     activeClassName={s.activeLink}> Users
            </NavLink>
        </div>
    </nav>
}