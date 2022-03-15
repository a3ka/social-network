import React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import s from './Dialogs.module.css';

type DialogItemType = {
    name: string
    id: string
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessageType) => {
    return <div className={s.message}> {props.message} </div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Alex" id="1" />
                <DialogItem name="Serg" id="2" />
                <DialogItem name="Nata" id="3" />
                <DialogItem name="Lena" id="4" />
                <DialogItem name="Andrey" id="5" />
                <DialogItem name="Sasha" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="Yo"/>

            </div>
        </div>

    );
}

