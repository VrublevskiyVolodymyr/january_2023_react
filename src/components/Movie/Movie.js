import React, {useEffect} from 'react';
import {imageURL} from "../../configs";
import {movieActions} from "../../redux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';
import css from './movie.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {StarRating} from "../StarRating/StarRating";


const Movie = ({movie}) => {

    const {id,title, backdrop_path,vote_average} = movie
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(vote_average)


    const handleClick = (movie) => {
        dispatch(movieActions.setSelectedMovie(movie))
        navigate('/movies_card')
    }

    return (
        <div className={css.movie}>
            <img className="card-img-top" src={imageURL + backdrop_path} alt={title}></img>
            <h5> {title}</h5>
            {/*<p> {overview}</p>*/}
            <span className="badge bg-secondary">success</span>
            {id&&<StarRating key={id} vote_average={vote_average}/>}
            <Button className="btn btn-dark" onClick={() => handleClick(movie)}>Vive more</Button>
        </div>
    );
};

export {Movie};
