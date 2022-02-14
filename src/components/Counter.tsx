import {useReducer} from 'react'

type CounterStateType={
    count:number,
}
// type ActionType={
//     type:string,
//     payload:number
// }

type UpdateActionType={
    type:'increment' | 'decrement',
    payload:number
}
type ResetActionType={
    type:'reset'
}
type ActionType = UpdateActionType | ResetActionType  //This is called discriminated Unions
const countReducer=(state:CounterStateType,action:ActionType)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count + action.payload}
        case 'decrement':
            return {count:state.count - action.payload}
        case 'reset':
            return initialState;    
            default:
            return state;
    }

}
const initialState = {count:0}
function Counter(){
    const [state, dispatch] = useReducer(countReducer,initialState)

    return(
        <>
            Count:{state.count}
            <button onClick={()=>dispatch({type:'increment',payload:10})}>+</button>
            <button onClick={()=>dispatch({type:'decrement',payload:10})}>-</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </>
    )

}

export default Counter