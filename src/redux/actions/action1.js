import axios from "axios";
import { GET_DATA } from "./actiontypes";

export const Getdata = (data) => {
    console.log('Hi this is action..')
    
        
    return{
            type:'SET_DATA',
            payload: data
    };

    
        

};