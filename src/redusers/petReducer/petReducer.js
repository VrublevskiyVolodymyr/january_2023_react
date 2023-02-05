

const petsActionType={
    ADD_CAT: 'ADD_CAT',
    DELETE_CAT_BY_ID: 'DELETE_CAT_BY_ID',
    ADD_DOG: 'ADD_DOG',
    DELETE_DOG_BY_ID: 'DELETE_DOG_BY_ID',
}

const petsActions={
    ADD_CAT:(item)=>({type:petsActionType.ADD_CAT, payload:item}),
    DELETE_CAT_BY_ID:(id)=>({type:petsActionType.DELETE_CAT_BY_ID, payload: id}),
    ADD_DOG:(item)=>({type:petsActionType.ADD_DOG, payload:item}),
    DELETE_DOG_BY_ID:(id)=>({type:petsActionType.DELETE_DOG_BY_ID, payload: id})
}

const initialPets =()=>(
    {cats:[], dogs:[]}
)

const peReducer = (state, action) => {

        switch (action.type) {

            case 'ADD_CAT':
                const [lastCat] = state.cats.slice(-1);
                const id = lastCat ? lastCat.id + 1 : 0
                return {...state, cats: [...state.cats, {id: id, name: action.payload.nameCat}]}

            case 'DELETE_CAT_BY_ID':
                const indexCat = state.cats.findIndex(cat => cat.id === action.payload)
                state.cats.splice(indexCat, 1)
                return {...state}

            case 'ADD_DOG':
                const [lastDog] = state.dogs.slice(-1);
                const idDog = lastDog ? lastDog.id + 1 : 0
                return {...state, dogs: [...state.dogs, {id: idDog, name: action.payload.nameDog}]}

            case 'DELETE_DOG_BY_ID':
                const indexDog = state.dogs.findIndex(dog => dog.id === action.payload)
                state.dogs.splice(indexDog, 1)
                return {...state}

            default:
                return {...state}
        }
}

    export {petsActions,peReducer,initialPets};
