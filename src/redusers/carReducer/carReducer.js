

const carActionType={
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const carActions={
    ADD:(item)=>({type:carActionType.ADD, payload:item}),
    DELETE_BY_ID:(id)=>({type:carActionType.DELETE_BY_ID, payload: id})
}

const initialCars=()=>[]

const caReducer=(state, action)=>{
    switch (action.type){

        case carActionType.ADD:
            const [lastCar]= state.slice(-1);
            const id=lastCar?lastCar.id+1:0;
            console.log(action.payload)
            return [...state, {id,...action.payload}]

        case carActionType.DELETE_BY_ID:
            const index= state.findIndex(value=>value.id===action.payload);
            state.splice(index,1);
            return [...state]

        default:
            return [...state]
    }

}

export {carActions,caReducer,initialCars};


