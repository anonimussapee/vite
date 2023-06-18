import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { ContextApi } from '../../Components/ContextApi';
import { CardProdCheckout } from '../../Components/CardProdCheckout';
import {  ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ContextMyOrders } from '../../Components/ContextApi/contextMyOrders';

const MyOrder = () => {

  const contextOrders = useContext(ContextMyOrders);
  
  let currentPath = window.location.pathname.substring(location.pathname.lastIndexOf('/')+1);
  
  if(currentPath === "last"){currentPath = contextOrders.myOrdersData.data.length;}
    currentPath -=1;
    return (
      <Layout>
        <div className='flex w-[320px] relative justify-center'>
          <Link to={`/my-orders`}>
          <ChevronDoubleLeftIcon className='w-8 h-8 bg-black text-white absolute left-0 rounded-full pr-[2px] hover:bg-gray-800'/>
          </Link>
          <p className='text-xl text-black '>MyOrder</p>
        </div>
        <div className='flex flex-col w-[320px] mt-4 gap-1'>
          {
          contextOrders.myOrdersData.data[currentPath]?.products.map(order => {
            return <CardProdCheckout key={order.id} item={order} trashTrue={false}/>
          })
        }
        </div>
        
        
      </Layout>
    );
      
  
}

export {MyOrder};
