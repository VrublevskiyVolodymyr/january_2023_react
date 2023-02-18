import React from 'react';
import {imageURL} from "../../configs";

const Movie = ({movie}) => {
    const {title, overview, backdrop_path} = movie
    return (
        <div>
            <h1> {title}</h1>
            <img src={imageURL+backdrop_path} alt={title}></img>
            <p> {overview}</p>
            <button>View more</button>
        </div>
    );
};

export {Movie};
