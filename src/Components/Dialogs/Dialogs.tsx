import React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import s from './Dialogs.module.css';
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Serg'},
        {id: 3, name: 'Nata'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Andrey'},
        {id: 1, name: 'Sasha'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How are you'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'LOL'},
    ]

    let dialogsElements = dialogs
        .map( (d: DialogItemType) => <DialogItem name={d.name} id={d.id} /> )

    let messagesElement = messages.map( (m: MessagePropsType) => <Message message={m.message}/> )


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>

    );
}

