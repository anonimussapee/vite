import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { ContextMyOrders} from '../../Components/ContextApi/contextMyOrders';
import { CardMyOrders } from '../../Components/CardMyOrders';

const MyOrders = () => {
  const context = useContext(ContextMyOrders);
  
  return (
      <Layout>
       <p className='text-xl text-black'>MyOrders</p>
        <div className='w-[90%] max-w-[420px] h-[65vh] mt-5 mx-auto flex flex-col gap-2 overflow-y-scroll '>
          {
            context.myOrdersData.data?.map((order, index)=> {
              return <CardMyOrders  key={index} item={order}></CardMyOrders>
            })
          }
        </div>
      </Layout>
  )
}

export {MyOrders};
