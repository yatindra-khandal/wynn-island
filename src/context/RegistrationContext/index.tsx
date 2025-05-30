import { createContext, useReducer } from 'react';
import reducer, { initialState, type Action, type State } from './reducer';

export const RegistrationContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const RegistrationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RegistrationContext.Provider value={{ state, dispatch }}>
      {children}
    </RegistrationContext.Provider>
  );
};
