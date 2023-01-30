import React from 'react';
import css from './Albums.module.css'

const Album = ({album}) => {
    const {id, userId, title} = album

    return (
        <div className={css.Albums}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Album};
