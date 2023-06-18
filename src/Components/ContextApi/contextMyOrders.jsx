import { createContext } from 'react';
import { UseLocaleStorage } from './UseLocaleStorage';


const ContextMyOrders = createContext();

const ContextMyOrdersProvider = ({children}) => {
  
  const myOrdersData = UseLocaleStorage('MyOrdersList', []);
  

  return (
    <ContextMyOrders.Provider value={{
      myOrdersData,
      
    }}>

      {children}
    </ContextMyOrders.Provider>
  );


}
export {ContextMyOrders, ContextMyOrdersProvider};