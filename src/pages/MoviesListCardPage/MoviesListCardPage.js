import React from 'react';
import {MoviesListCard} from "../../components";
import {useSelector} from "react-redux";

const MoviesListCardPage = () => {

    const {movies, genres} = useSelector(state => state.movies);
    return (
        <div>
            <MoviesListCard/>
        </div>
    );
};

export {MoviesListCardPage};
