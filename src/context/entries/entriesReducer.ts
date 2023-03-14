import { Entry } from '../../../interface';
import { EntriesState } from './EntriesProvider';


export type EntriesActionType =
| { type: '[Entries] - Add-Entry',payload: Entry }
| { type: '[Entries] - UPDATE_ENTRY',payload: Entry };



export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

      switch (action.type) {
      case '[Entries] - Add-Entry':
return {
...state,entries: [...state.entries,action.payload]
};

      case '[Entries] - UPDATE_ENTRY':
return {
...state,entries: state.entries.map((entry) => {
if (entry._id === action.payload._id) {

      entry.status = action.payload.status;
      entry.description = action.payload.description;



return action.payload;
}
return entry;
})
};



       default:
        return state;
                          }
};