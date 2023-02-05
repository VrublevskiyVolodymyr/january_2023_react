

const userActionType={
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const userActions={
    ADD:(item)=>({type:userActionType.ADD, payload:item}),
    DELETE_BY_ID:(id)=>({type:userActionType.DELETE_BY_ID, payload: id})
}

const initialUsers=()=>[]

const usReducer=(state, action)=>{
    switch (action.type){
        case userActionType.ADD:
       const [lastUser]= state.slice(-1);
        const id=lastUser?lastUser.id+1:0;
        return [...state, {id,...action.payload}]
        case userActionType.DELETE_BY_ID:
           const index= state.findIndex(value=>value.id===action.payload);
           state.splice(index,1);
            return [...state]
        default:
            return [...state]
    }

}

export {userActions,usReducer,initialUsers};
