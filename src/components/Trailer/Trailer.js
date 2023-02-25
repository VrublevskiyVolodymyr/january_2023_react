import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import {useDispatch, useSelector} from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

import {movieActions} from "../../redux";
import css from './trailer.module.css';


const Trailer = ({movieId}) => {

    const [videoUrl, setVideoUrl] = useState('');
    const [noTrailer, setNoTrailer] = useState(true);

    const id = movieId.id
    const {trailer, loading} = useSelector(state => state.movies);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getTrailer({id}))
    }, [dispatch, id])


    useEffect(() => {
        if (trailer&&trailer.results.length>0) {
            const videoUrl = `https://www.youtube.com/watch?v=${trailer.results[0].key}`;
            setVideoUrl(videoUrl);
            setNoTrailer(true)
        } else setNoTrailer(false)
    }, [trailer])


    // if (trailer) {
    //     console.log(trailer.results[0].key)
    //     const videoUrl = `https://www.youtube.com/watch?v=${trailer.results[0].key}`;
    //     setVideoUrl(videoUrl);
    // }
// }
// )


// useEffect(() => {
//     axios
//         .get(
//             `https://api.themoviedb.org/3/movie/${movieId.id}/videos?api_key=${'3e2f8afadd5af2f53eb68661cc7727c9'}`
//         )
//         .then((response) => {
//             if (response.data.results.length > 0) {
//                 const videoUrl = `https://www.youtube.com/watch?v=${response.data.results[0].key}`;
//                 setVideoUrl(videoUrl);
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }, [movieId.id]);


    return (
        <div className="player-wrapper">
            {loading && <ClipLoader color={'#1BFFFF'} loading={loading} size={150}/>}
            {(videoUrl && noTrailer) && (
                <ReactPlayer
                    url={videoUrl}
                    className="react-player"
                    playing
                    controls
                    width="100%"
                    height="400px"
                />
            )}
            {!noTrailer && <h4 className={css.noTrailer}>Sorry, no trailer available!</h4>}
        </div>
    );
};


export {Trailer};
