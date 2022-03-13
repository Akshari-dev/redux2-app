const Counter={counter:0}

function Counter_Num(state=Counter, action){

    switch(action.type){

        case "INCREMENT_NUM":
            return{
                ...state,
                counter:state.counter+1
            }

            case "DECREMENT_NUM":
            return{
                ...state,
                counter:state.counter-1
            }

            
            default: return state
        
    }
}

export default Counter_Num;