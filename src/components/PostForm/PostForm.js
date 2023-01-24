import React from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";

import {postService} from "../../services";
import {postValidator} from "../../validators";


const PostForm = () => {

    const {register,handleSubmit, reset, formState:{errors,isValid}}=useForm({mode:'all',resolver:joiResolver(postValidator)})

    const submit = async (post) => {
        const {data} = await postService.create(post);
        console.log(data)
        reset()
    }

    return (
            <form onSubmit={handleSubmit(submit)}>

            <input type="text" plaseholder={'title'} {...register('title')}/>
            {errors.title&& <span>{errors.title.message}</span>}

            <input type="text" plaseholder={'body'} {...register('body')}/>
            {errors.body&& <span>{errors.body.message}</span>}

            <button disabled={!isValid}>Save</button>

        </form>
    );
};

export {PostForm};
