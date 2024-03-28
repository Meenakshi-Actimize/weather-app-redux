import data from "data";
import { GET_DATA } from "../actions/actiontypes";

const initialState = {
    data : [],
}

const reducer1 = (state = initialState, action) => {
    
    switch(action.type){
        case 'SET_DATA': 
        // alert('Hi......');
        console.log('Hi im reducer')
        return{
            ...state, 
            data: action.payload,
        };
        default:
            return state;
    }
  
}

export default reducer1;