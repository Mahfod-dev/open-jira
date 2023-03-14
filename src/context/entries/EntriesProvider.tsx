import { Dispatch, FC, PropsWithChildren, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { entriesReducer,EntriesActionType } from './entriesReducer';
import { Entry } from '../../../interface';
import {v4 as uuidv4} from 'uuid'

export interface EntriesState {
entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
entries: [
{
_id: uuidv4(),
description: 'This is the first entry',
status: 'pending',
createdAt: Date.now(),
},
{
_id: uuidv4(),
description: 'This is the second entry',
status: 'in-progress',
createdAt: Date.now() - 1000 * 60 * 60 * 24,
},
{
_id: uuidv4(),
description: 'This is the third entry',
status: 'completed',
createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
},
],
};
export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);


return (
<EntriesContext.Provider
value={{
state,
dispatch,
}}>
{children}
</EntriesContext.Provider>
);
};



export const addEntry = (dispatch:Dispatch<EntriesActionType>,description:string) => {

    const newEntry:Entry = {
        _id:uuidv4(),
        description,
        status:'pending',
        createdAt:Date.now()
    }



dispatch({
	type: '[Entries] - Add-Entry',
	payload: newEntry,
});
};