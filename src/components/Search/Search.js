import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";



const Search = () => {
    const dispatch = useDispatch();
    const { title, searchMovie, total_pages, prev, next} = useSelector(state => state.movies);
    const[query, setQuery]= useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(movieActions.searchMovie( {title, page:query.get('page')}))
    }, [dispatch,query])



    return (
        <div >
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button disabled={next===total_pages+1} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
            {searchMovie.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};
export {Search};
