import { createContext } from 'react';
import { UseLocaleStorage } from './UseLocaleStorage';

const ContextUser = createContext();

const ContextUserProvider = ({children}) =>{

  const user = UseLocaleStorage('userData',[]);

  return (
    <ContextUser.Provider value={{
      user
    }}
    >
      {children}
    </ContextUser.Provider>
  );
}

export { ContextUser, ContextUserProvider};