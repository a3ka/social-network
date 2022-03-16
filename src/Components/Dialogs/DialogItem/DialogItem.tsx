import React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import s from './../Dialogs.module.css';
import {message} from "antd";

export type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

