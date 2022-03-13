import React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Serg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Nata</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Lena</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Sasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>

    );
};

