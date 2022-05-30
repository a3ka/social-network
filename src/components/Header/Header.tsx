import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {HeaderPropsType} from "./HeaderContainer";


export const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>

        <div className={s.container}>
            <span>
             <img
                 src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_web-512.png"/>
            </span>

            <span className={s.name}>
              CRYPTO WAll
            </span>

            <span>
                <span>{props.photo}</span>
                <span>{props.isAuth ? props.login
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>}</span>
            </span>
        </div>


    </header>
}