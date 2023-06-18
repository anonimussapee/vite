import { createContext, useState } from 'react';
import { FetchData } from './FetchData';
import { UseLocaleStorage } from './UseLocaleStorage';

const ContextApi = createContext();

const ContextApiProvider = ({children}) => {

  const { data } = FetchData('https://api.escuelajs.co/api/v1/products');
  

  // in here will adding products into cart
  const cartData = UseLocaleStorage('CartData', []);

  //  in here will living orderList after click on checkout button
  const order = UseLocaleStorage('orderCart',[]);

  const orderData = order.data;
  // in here live we cart status
  

  let cartIconValue =0;
  
  cartData.data?.forEach(item => { 
    cartIconValue +=item.times;
  });
  
  
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

  }

  const setCartData = (data) =>{

    setCheckoutSide(true);
    setDetailState(false);
    addToCart(data);

  }

  const togglecheckout = () => {
      setCheckoutSide( !checkoutState);
  }

  const deleteProduct = (id) =>{
    const newSet = cartData.data.filter(products =>products.id !== id);
   cartData.save(newSet);
    
    }

 return (
  <ContextApi.Provider value={{
    data,
    detailState,
    toggleDetails,
    setDataToPanel,
    deleteProduct,
    dataDetail,
    cartIconValue,
    cartData,
    cartDataValues:cartData.data,
    setCartData,
    checkoutState,
    togglecheckout,
    order,
    orderData
  }}>
    {children}
  </ContextApi.Provider>
 );

}
export {ContextApi, ContextApiProvider};