import { TrashIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

const CardProdCheckout = ({item,trashTrue}) => {

  const context = useContext(ContextApi);
  
  let trash 
  
  if(trashTrue){
    
    trash = <TrashIcon className='w-10 h-10 hover:text-gray-700' onClick={()=>{ context.deleteProduct(item.id);}}/>;

  } 


  return (
    <article  className='w-full h-auto border p-1 border-gray-500  flex gap-2 items-center rounded-lg  '>
          <figure >
            <img  src={`${item.image}`} alt={`${item.title}`} className='h-20 w-16 object-cover rounded-lg'/>
          </figure>
          <div className='flex flex-col gap-1 w-40'>
            <p className='font-ligth text-sm '>{item.title}</p>
            <p className='font-bold '>${item.price}</p>
            <p className='font-medium text-sm'>cantidad: {item.times}</p>
          </div>
          
          {trash} 
          
        </article>
  );
 }

export {CardProdCheckout};