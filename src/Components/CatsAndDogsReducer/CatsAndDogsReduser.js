import React, {useReducer, useRef} from 'react';

import {Cats} from "../Cats/Cats";
import {Dogs} from "../Dogs/Dogs";
import css from "./catAndDogRuduse.module.css"

const CatsAndDogsReduser = () => {

const catInp=useRef();
const dogInp=useRef();


    const reduser = (state, action) => {

        switch (action.type) {

            case 'SaveCat':
                const [lastCat]=state.cats.slice(-1);
                const id=lastCat? lastCat.id+1:0
                return {...state ,cats:[...state.cats, {id: id, name: action.payload}]}

            case 'DeleteCat':
               const indexCat = state.cats.findIndex(cat=>cat.id===action.payload)
                state.cats.splice(indexCat,1)
                return {...state}

            case 'SaveDog':
                const [lastDog]=state.dogs.slice(-1);
                const idDog=lastDog? lastDog.id+1:0
                return {...state ,dogs:[...state.dogs, {id: idDog, name: action.payload}]}

            case 'DeleteDog':
                const indexDog = state.dogs.findIndex(dog=>dog.id===action.payload)
                state.dogs.splice(indexDog,1)
                return {...state}

            default:
                return {...state}
        }
    }

const AddCat=()=>{
    dispatch({type:'SaveCat', payload:catInp.current.value})
    catInp.current.value='';
}

    const AddDog=()=>{
        dispatch({type:'SaveDog', payload:dogInp.current.value})
        dogInp.current.value='';
    }

   const initValue =()=>(
       {cats:[], dogs:[]}
   )

    const [state, dispatch]=useReducer(reduser, null, initValue)

    return (
        <div className={css.catsAndDog}>

            <div>
                <input type={'text'} placeholder={'name'} ref={catInp}/>
                <button onClick={AddCat}>SaveCat</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>

            <div>
                <input type={'text'} placeholder={'name'} ref={dogInp}/>
                <button onClick={AddDog}>SaveDog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>

        </div>
    );
};

export {CatsAndDogsReduser};
