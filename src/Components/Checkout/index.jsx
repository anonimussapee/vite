import { useContext } from 'react';
import { ContextApi } from '../ContextApi';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CardProdCheckout } from '../CardProdCheckout';

const Checkout = () => {
  
  const context = useContext(ContextApi);
  return (
    <aside className={`${context.checkoutState ? 'visible': 'hidden'} xs:pt-44 sm:pt-24 md:pt-16 p-4  panel-details fixed top-0 bottom-0 right-0 w-80 bg-white border-4 border-[#00000095] flex flex-col gap-4 rounded-lg `} >
      <div key='headercartlis' className='flex justify-between items-center'>
        <p className='text-lg font-semibold'>tus Productos</p>
        <XMarkIcon color='white' className='w-9 h-9 bg-red-600 rounded-full b cursor-pointer active:bg-red-950' onClick={()=>{
        context.togglecheckout();
        }}/>
      </div>
      <div key='cartlist' className='overflow-scroll flex flex-col gap-2'>
        {context.cartData.data?.map(item =>(
          <CardProdCheckout key={item.id} item={item}/>)
        )}
      </div>
        
    </aside>
  );
}

export {Checkout};