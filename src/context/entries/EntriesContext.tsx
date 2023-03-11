import { createContext,useContext,Dispatch } from 'react';
import { EntriesState } from './EntriesProvider';
import { EntriesActionType } from './entriesReducer';
import { Entry } from '../../../interface';


interface ContextProps {
   state: EntriesState;
   dispatch: Dispatch<EntriesActionType>;
}


export const EntriesContext = createContext({} as ContextProps);


export function useEntriesContext(){

const context = useContext(EntriesContext);
if(!context){

throw new Error('useContext must be used within a EntriesContextProvider')
}

return context;
}