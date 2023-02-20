import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";

const SearchByGenre = () => {

    const dispatch = useDispatch();
    const {idGenre,genres, genresById, total_pages, prev, next} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const id = idGenre.id
    console.log(genres)
    console.log(id)
    useEffect(() => {
        dispatch(movieActions.getAllByGenres({id, page: query.get('page')}))
    }, [dispatch, query,id])


    return (
        <div>
            <div>
                <button disabled={!prev} onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                </button>
                <button disabled={next === total_pages + 1} onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                </button>
            </div>
            {genresById.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};
export {SearchByGenre};
