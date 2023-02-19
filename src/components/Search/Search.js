import React from 'react';
import { useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {Movie} from "../Movie/Movie";



const Search = () => {
    const {searchMovie, prev, next} = useSelector(state => state.movies);
    console.log(searchMovie)
    const[query, setQuery]= useSearchParams({page:'1'});

    return (
        <div >
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
            {searchMovie.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};
export {Search};
