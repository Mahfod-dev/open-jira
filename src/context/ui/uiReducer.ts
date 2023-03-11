import { UIState } from './UIProvider';


type UIActionType =
| { type: '[UI] - ActionName' }



export const uiReducer = (state: UIState, action: UIActionType): UIState => {

      switch (action.type) {
      case '[UI] - ActionName':
return {
...state,
};



       default:
        return state;
                          }
};