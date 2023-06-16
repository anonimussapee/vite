import { createContext, useState } from 'react';
import { FetchData } from './FetchData';
import { UseLocaleStorage } from './UseLocaleStorage';

const ContextApi = createContext();

const ContextApiProvider = ({children}) => {

  const { data } = FetchData('https://api.escuelajs.co/api/v1/products');
  
  const cartStatus= UseLocaleStorage('cartStatus',0);

  // in here will adding products
  const cartData = UseLocaleStorage('CartData', []);

  // this implementation is used to change state for show checkout panel
  const [checkoutState, setCheckoutSide] = useState(false);

  // this implementation is used to change state for show deatils panel
  const [detailState, setDetailState ] = useState(false);
  // in here will live data to show in panel detail
  const [dataDetail,setDataDetail ] = useState({});

  const toggleDetails = () => {
     setDetailState(!detailState);
  }

  const setDataToPanel = (data) => {
    
    setDataDetail(data);
    
    setCheckoutSide(false)

  }
  // this function was use to add products when clicked in add button
  const addToCart = (obj) => {
    let newCartData =  [...cartData.data];
    let newObj = {...obj, times:1} ;
    newCartData.push(newObj);
    let organizeder = {};
    newCartData.forEach(item=>{
      if(organizeder[item.id]){
        organizeder[item.id].times += 1;
      }else{
        organizeder[item.id] = item;
      }
    });
    newCartData = Object.values(organizeder);
    cartData.save(newCartData);
    console.log(newCartData);

  }

  const setCartData = (data) =>{

    setCheckoutSide(true);
    setDetailState(false);
    addToCart(data);

  }

  const togglecheckout = () => {
    setCheckoutSide( !checkoutState);
 }


 return (
  <ContextApi.Provider value={{
    data,
    cartStatus,
    detailState,
    toggleDetails,
    setDataToPanel,
    dataDetail,
    cartData,
    setCartData,
    checkoutState,
    togglecheckout,
  }}>
    {children}
  </ContextApi.Provider>
 );

}
export {ContextApi, ContextApiProvider};