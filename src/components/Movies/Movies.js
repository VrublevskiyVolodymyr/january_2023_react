import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {Movie} from '../Movie/Movie'
import css from './movies.module.css'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movies = () => {
    const {movies,total_pages, prev, next} = useSelector(state => state.movies);

    const dispatch = useDispatch();
    const[query, setQuery]= useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page:query.get('page')}))
    }, [dispatch,query])

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])

    return (
        <div className={css.container}>
            <Button disabled={!prev} onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
            </Button>
            <Button disabled={next === total_pages + 1}
                    onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
            </Button>
            <div className={css.movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>

        </div>
    );
};
export {Movies};
