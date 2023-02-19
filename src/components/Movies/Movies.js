import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {Movie} from '../Movie/Movie'

const Movies = () => {
    const {movies, prev, next} = useSelector(state => state.movies);


    const dispatch = useDispatch();
    const[query, setQuery]= useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page:query.get('page')}))
    }, [dispatch,query])


    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])

    return (
        <div >
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};
export {Movies};
