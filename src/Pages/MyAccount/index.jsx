import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { ContextUser } from '../../Components/ContextApi/contextUser';
import { UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ContextMyOrders } from '../../Components/ContextApi/contextMyOrders';


const MyAccount = () => {

  const context = useContext(ContextUser);
  const contextOrders = useContext(ContextMyOrders);


    if(context.user.data.length>0){
      return (
        <Layout>
         <p className='text-xl text-black'>MyAccount</p>
  
         <div className='w-[90%] min-w-[320px] max-w-[600px] flex flex-col gap-2 justify-center items-center'>
          <figure>
            <img className='w-52 h-52 rounded-full' src={`${context.user.data[0].image}`} alt={`${context.user.data[0].name}`} />
          </figure>
          <p>{context.user.data[0].name}</p>
          <Link to='/sign-in'>
             <button className='w-36 h-auto p-2 border-[2px] border-gray-700 bg-gray-950 text-white' onClick={()=>{
            context.user.save([]);
            contextOrders.myOrdersData.save([]);
          }}>Cerrar Session</button>
          </Link>
         
         </div>
        </Layout>
    )
    }else{
      return (
        <Layout>
         <p className='text-xl text-black'>MyAccount</p>
  
         <div className='w-[90%] min-w-[320px] max-w-[600px] flex flex-col gap-2 justify-center items-center'>
          <figure>
            <UserIcon className='w-52 h-52'  />
          </figure>
          <p>Invitado</p>
          <Link to='/sign-in'>
          <button className='w-36 h-auto p-2 border-[2px] border-gray-700 bg-gray-950 text-white' onClick={()=>{
            contextOrders.myOrdersData.save([]);
            
            
          }}>Borrar Historial</button>
          </Link>
         </div>
        </Layout>
    )
    }

}

export {MyAccount};
