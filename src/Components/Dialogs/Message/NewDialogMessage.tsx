import React from 'react';
// @ts-ignore
import s from './NewDialogMessage.module.css';
import {Post} from "../../Profile/MyPosts/Post/Post";
import {MessagesType} from "../../../redux/state";

type NewDialogMessagePropsType = {
    messages: Array<MessagesType>
    newMessageText: string
    addDialogMessage: () => void
    updateNewDialogMessageText: (newMessage: string) => void

}

export const NewDialogMessage = (props: NewDialogMessagePropsType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();


    const addMessage = () => {
        props.addDialogMessage()
    }

    const onPostChange = () => {
        let text = newMessageElement.current?.value
        // @ts-ignore
        props.updateNewDialogMessageText(text)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newMessageElement}
                              value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>

    );
};

