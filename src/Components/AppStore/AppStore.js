import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";


const initValue={
    name:"Jagadeesh"
}

export const  AppStore =configureStore({
    reducer:{},
    middleware:()=>{
        return [logger]
    }
})

export default initValue;