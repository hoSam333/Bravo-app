import React  from "react";
import { createContext } from "react";
import useApi from "../hooks/useApi";


export const apiContext = createContext()

export const ApiContextProvider =  (props) => {

    const { fakeApi , dummyApi , dark , changMood , loading }  = useApi()


return(
    <apiContext.Provider value={{ fakeApi , dummyApi , dark , changMood , loading }} >
        { props.children }
    </apiContext.Provider>
)

    
}