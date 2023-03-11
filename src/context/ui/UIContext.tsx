import { createContext,useContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;
}


export const UIContext = createContext({} as ContextProps);


export function useUIContext(){

const context = useContext(UIContext);
if(!context){

throw new Error('useContext must be used within a UIContextProvider')
}

return context;
}