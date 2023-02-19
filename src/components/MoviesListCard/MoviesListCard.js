import React from 'react';
import {imageURL} from "../../configs";
import {useSelector} from "react-redux";

const MoviesListCard = () => {
     const {selectedMovie} = useSelector(state => state.movies);
    console.log(selectedMovie)
    return (
        <div>
            {selectedMovie &&
                <>
            <h1> {selectedMovie.title}</h1>
            <img src={imageURL+selectedMovie.backdrop_path} alt={selectedMovie.title}></img>
            <p> {selectedMovie.overview}</p>
                </>
            }
        </div>
    );
};

export {MoviesListCard};
