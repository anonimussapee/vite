import { TrashIcon } from '@heroicons/react/24/solid';

const CardProdCheckout = ({item}) => {
  return (
    <article  className='w-full h-auto border p-1 border-gray-500  flex gap-2 items-center rounded-lg  '>
          <figure >
            <img  src={`${item.image}`} alt={`${item.title}`} className='h-20 w-16 object-cover rounded-lg'/>
          </figure>
          <div className='flex flex-col gap-1 w-40'>
          <p className='font-ligth text-sm '>{item.title}</p>
          <p className='font-bold '>${item.price}</p>
          <p className='font-light text-sm'>cantidad: {item.times}</p>

          </div>
          <TrashIcon  className='w-10 h-10 hover:text-gray-700'/>
          
        </article>
  );
 }

export {CardProdCheckout};