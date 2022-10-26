const initialState = {
    count:0
}

export const countReducer = (state=initialState, action: { type: any; count: number; }) =>{

    switch(action.type){
        case "INCREMENT":
            return { ...state, count:state.count+1 };
        case "DECREMENT":
            return state.count < 1 ? state : {...state, count:state.count-1}
        default:
            return state
    }

};