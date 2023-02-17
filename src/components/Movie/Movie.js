import React from 'react';

const Movie = ({movie}) => {
    const {adult, genre_ids, backdrop_path} = movie
    return (
        <div>
            <div>adult: {adult}</div>
            <div>genre_ids: {genre_ids}</div>
            <div>backdrop_path: {backdrop_path}</div>
        </div>
    );
};

export {Movie};
