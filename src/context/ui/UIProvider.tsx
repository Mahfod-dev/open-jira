import { Dispatch, FC, PropsWithChildren, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer,UIActionType } from './uiReducer';


export interface UIState {
	sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
	sidemenuOpen: false,
};


export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

console.log(state)

return (
<UIContext.Provider
value={{
state,
dispatch,
}}>
{children}
</UIContext.Provider>
);
};

export const sideOpenBar = (dispatch:Dispatch<UIActionType>) => dispatch({type: 'UI - Open Sidebar'});
export const sideCloseBar = (dispatch:Dispatch<UIActionType>) => dispatch({type: 'UI - Close Sidebar'});

