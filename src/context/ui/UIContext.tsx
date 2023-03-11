import { Dispatch, createContext,useContext } from 'react';
import { UIActionType } from './uiReducer';
import { UIState } from './UIProvider';


type ContextProps = {
	state: UIState;
    dispatch: Dispatch<UIActionType>;
};


export const UIContext = createContext({} as ContextProps);
UIContext.displayName = 'UIContext';


export function useUIContext(){

const context = useContext(UIContext);
if(!context){

throw new Error('useContext must be used within a UIContextProvider')
}

return context;
}