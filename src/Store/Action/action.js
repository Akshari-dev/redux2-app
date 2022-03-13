let Increment_Num=()=>dispatch=>{
    dispatch({type :'INCREMENT_NUM'})
}

let Decrement_Num=()=>dispatch=>{
    dispatch({type:'DECREMENT_NUM'})
}

export{Increment_Num,Decrement_Num}