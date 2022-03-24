import React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import s from './Dialogs.module.css';
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {DialogsType, MessagesType} from '../../redux/state';

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs
        .map( (d: DialogItemType) => <DialogItem name={d.name} id={d.id} /> )

    let messagesElement = props.messages.map( (m: MessagePropsType) => <Message message={m.message}/> )


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

