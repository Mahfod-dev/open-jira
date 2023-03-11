import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';


export interface UIState {
	sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
	sidemenuOpen: false,
};


export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);



return (
<UIContext.Provider
value={{
    ...state,
}}>
{children}
</UIContext.Provider>
);
};