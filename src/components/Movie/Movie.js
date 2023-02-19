import React from 'react';
import {imageURL} from "../../configs";
import {movieActions} from "../../redux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Movie = ({movie}) => {

    const {title, overview, backdrop_path} = movie
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick=(movie)=>{
        dispatch(movieActions.setSelectedMovie(movie))
        navigate('/movies_card')
    }

    return (
        <div>
            <h1> {title}</h1>
            <img src={imageURL+backdrop_path} alt={title}></img>
            <p> {overview}</p>
            <button onClick={() => handleClick(movie)}>select</button>
        </div>
    );
};

export {Movie};
