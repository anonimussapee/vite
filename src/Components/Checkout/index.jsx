import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ContextApi } from '../ContextApi';
import { CardProdCheckout } from '../CardProdCheckout';
import { totalPrice } from '../../utils';
import { ContextMyOrders } from '../ContextApi/contextMyOrders';

const Checkout = () => {
  
  const context = useContext(ContextApi);

  const contextOrder = useContext(ContextMyOrders);

  let subTotal=totalPrice(context.cartDataValues).toFixed(2);
  let ivaImp= (subTotal*0.12).toFixed(2);
  let discount= (0).toFixed(2);
  let payTotal= ((Number(subTotal) + Number(ivaImp))-Number(discount)).toFixed(2);

  const addInOrder = () =>{
    if(context.cartData.data.length>0){

      let dateTimeStamp =new Date(Date.now()).toLocaleString();
      let order ={
        id:(contextOrder.myOrdersData.data).length+1,
        date : dateTimeStamp,
        products : context.cartData.data,
        total : payTotal,
        iva: ivaImp,
        'discount' : discount,
        'subtotal' : subTotal,
      }

      let dataOfOrders = [...contextOrder.myOrdersData.data];
      dataOfOrders.push(order);
      contextOrder.myOrdersData.save(dataOfOrders)
      context.order.save(order);
      contextOrder.myOrdersData.data
      context.cartData.save([]);
    }
    
  }
  
  
  return (
    <aside className={`${context.checkoutState ? 'visible': 'hidden'} xs:pt-44 sm:pt-24 md:pt-16 p-4 py-6  panel-details fixed top-0 bottom-0 right-0 w-80 bg-white border-4 border-[#00000095] flex flex-col gap-4 rounded-lg `} >
      <div key='headercartlis' className='flex justify-between items-center'>
        <p className='text-lg font-semibold'>Tus Productos</p>
        <XMarkIcon color='white' className='w-9 h-9 bg-red-600 rounded-full b cursor-pointer active:bg-red-950' onClick={()=>{
        context.togglecheckout();
        }}/>
      </div>
      <div key='cartlist' className='overflow-scroll flex flex-col gap-2 flex-1'>
        {context.cartData.data?.map(item =>(
          <CardProdCheckout key={item.id} item={item} trashTrue={true}/>)
        )}
      </div>
      <div className='h-14 w-full grid grid-cols-2 grid-rows-4 gap-1 text-right px-6'>
          <p className='font-medium'>Subtotal:</p><p >$ {subTotal}</p>
          <p className='font-medium'>Iva 12%:</p><p>$ {ivaImp}</p> 
          <p className='font-medium'>Descuento:</p><p> - $ {discount}</p>
          <p className='font-medium'>Total:</p><p>$ {payTotal}</p>
      </div>
      <div className='flex gap-2 w-full items-center justify-center mt-2'>
        <button className='bg-black text-white px-2 rounded-md font-semibold text-xl active:bg-gray-800' onClick={()=>{
          context.cartData.save([])
        }}>Vaciar</button>
        <Link to='/my-orders/last'>
        <button className='bg-black text-white px-2 rounded-md font-semibold text-xl active:bg-gray-800' onClick={()=>{
          addInOrder();
          context.togglecheckout();
        }}>Checkout</button>
        </Link>
      </div>
        
    </aside>
  );
}

export {Checkout};