
import {imageURL} from "../../configs";
import {movieActions} from "../../redux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';
import css from './movie.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {StarRating} from "../StarRating/StarRating";
import React from "react";


const Movie = ({movie}) => {

    const {id,title, backdrop_path,vote_average} = movie
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (movie) => {
        dispatch(movieActions.setSelectedMovie(movie))
        navigate(`/movies/${id}`)
    }


    return (
        <div className={css.movie}>
            <img className="card-img-top" src={imageURL + backdrop_path} alt={title}></img>
            <h5 className={css.text}> {title}</h5>
            {id&&<StarRating key={id} vote_average={vote_average}/>}
            {/*<Button className="btn btn-dark" onClick={() => navigate(`/movies/${id}`)}>Vive more</Button>*/}
            <button  id={css.button} className="btn btn-dark" onClick={() => handleClick(movie)}>
                <span></span>  <span></span>  <span></span>  <span></span>
                Vive more</button>
        </div>
    );
};

export {Movie};
