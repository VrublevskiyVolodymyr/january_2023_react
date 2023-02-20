


import {NavLink, useNavigate} from "react-router-dom";

import css from './header.module.css'
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";
import {titleValidator} from "../../validators";
import {DropMenu} from '../DropMenu/DropMenu'



const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
// const title=search.current.value
    const {register, handleSubmit, reset, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(titleValidator)
    })

    const searchClick = async (name)=> {
        await dispatch(movieActions.searchMovie({title:name.title}))
        await dispatch(movieActions.setTitle(name.title))
        navigate('/search_movie?page=1')
        reset()
    }
    return (
        <div className={css.header}>
<DropMenu/>
            <NavLink to={'movies?page=1'}>All movies</NavLink>

            <div>
                <form onSubmit={handleSubmit(searchClick)}>
                    <input type={"text"} placeholder={'name movie'} {...register('title')}/>
                    <button disabled={!isValid}>search</button>
                </form>

            </div>

            <div>User</div>

        </div>
    );
};

export {Header};


