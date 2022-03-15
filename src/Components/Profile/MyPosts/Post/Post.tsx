import React from 'react';

type PostPropsType ={
    message: string
    likesCount: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div>
            {props.message} {props.likesCount}
        </div>
    );
};

