import React from 'react';
// @ts-ignore
import s from './../Dialogs.module.css';


export type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    return <div className={s.message}> {props.message} </div>
}


