import axios from "axios";
import { SAVE_DATA } from "./actiontypes";

export const Savedata = (data) => ({
        type:'SAVE-DATA',
        payload: data

}) ;