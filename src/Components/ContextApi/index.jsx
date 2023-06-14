import { createContext, useState } from 'react';
import { FetchData } from './FetchData';
import { UseLocaleStorage } from './UseLocaleStorage';

const ContextApi = createContext();

const ContextApiProvider = ({children}) => {
  const { data } = FetchData('https://api.escuelajs.co/api/v1/products');
  
  const cartStatus= UseLocaleStorage('cartStatus',0);

  const [detailState, setDetailState ] = useState(false);

  const toggleDetails = () => {
     setDetailState(!detailState);
  }

 return (
  <ContextApi.Provider value={{
    data,
    cartStatus,
    detailState,
    toggleDetails,
  }}>
    {children}
  </ContextApi.Provider>
 );

}
export {ContextApi, ContextApiProvider};