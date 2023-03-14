import { Dispatch, FC, PropsWithChildren, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer,UIActionType } from './uiReducer';


export interface UIState {
	sidemenuOpen: boolean;
	isAddingEntry:boolean;
}

const UI_INITIAL_STATE: UIState = {
	sidemenuOpen: false,
	isAddingEntry:false,
};


export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
const [uiState, actionUI] = useReducer(uiReducer, UI_INITIAL_STATE);



return (
<UIContext.Provider
value={{
uiState,
actionUI,
}}>
{children}
</UIContext.Provider>
);
};

export const sideOpenBar = (dispatch:Dispatch<UIActionType>) => dispatch({type: 'UI - Open Sidebar'});
export const sideCloseBar = (dispatch:Dispatch<UIActionType>) => dispatch({type: 'UI - Close Sidebar'});

export const setIsAddingEntry = (dispatch:Dispatch<UIActionType>,isAdding:boolean) => dispatch({type: 'UI - Set isAddingEntry',payload:isAdding});

