import React from 'react';

const Post = ({post}) => {

    const {id, title, body}=post

    return (

        <div className={'userPost'}>

            <div>id: {id} </div>

            <div>title: {title} </div>

            <div>body: {body} </div>

        </div>
    );
};

export {Post};
