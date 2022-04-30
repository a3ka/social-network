import React from "react";
import s from './Header.module.css'

export const Header = () => {
    return <header className={s.header}>

        <span>
             <img
                 src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_web-512.png"/>
        </span>

        <span className={s.text}>
            Header
        </span>


    </header>
}