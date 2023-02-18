import React from 'react';
import {imageURL} from "../../configs";

const MoviesListCard = () => {

    return (
        <div>
            <h1> {title}</h1>
            <img src={imageURL+backdrop_path} alt={title}></img>
            <p> {overview}</p>
        </div>
    );
};

export {MoviesListCard};
