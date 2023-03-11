import { FC, PropsWithChildren, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../../interface';

export interface EntriesState {
entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
entries: [],
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