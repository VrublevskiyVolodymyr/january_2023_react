import React from 'react';
import {imageURL} from "../../configs";
import {useSelector} from "react-redux";
import css from './movieListCard.module.css'

const MoviesListCard = () => {
     const {selectedMovie} = useSelector(state => state.movies);

    return (
        <div >
            {selectedMovie &&
                <div className={css.card}>
            <img src={imageURL+selectedMovie.backdrop_path} alt={selectedMovie.title}></img>
                    <div className={css.bodyCard}>
                        <h4> {selectedMovie.title}</h4>
                        <p> {selectedMovie.overview}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export {MoviesListCard};
