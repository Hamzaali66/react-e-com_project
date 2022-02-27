export const increment = amount=>{
    return{
        type: "INCREMENT",
        payload:amount
    }
}
export const decrement = amount =>{
    return{
        type: "DECREMENT",
        payload:amount
    }
}

export const LOG_IN=()=>{
    return{
        type:"SIGN_IN"
    }
}