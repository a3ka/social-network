import React from 'react';

type PostPropsType ={
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div>
            {props.message} {props.likesCount}
        </div>
    );
};

