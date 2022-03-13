import React from 'react';
// @ts-ignore
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    // @ts-ignore
    // @ts-ignore
    return <nav className={s.nav}>
        <div className={s.item}>
            {/*navData => navData.isActive ? s.activeLink : s.item*/}
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news">News</NavLink>
        </div >
        <div className={s.item}>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings">Settings</NavLink>
        </div>

        </nav>

};

