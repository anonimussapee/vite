import { XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

const Details = () => {

  // in here live all context of API
  const context = useContext(ContextApi);

  return (

    <aside className={`${context.detailState ? 'visible': 'hidden'} xs:pt-44 sm:pt-24 md:pt-16 p-4 panel-details fixed top-0 bottom-0 right-0 w-80 bg-white border-4 border-[#00000095] flex flex-col gap-4 rounded-lg `} >
      <div className='flex justify-between items-center'>
        <p className='text-lg font-semibold'>Producto</p>
        <XMarkIcon color='white' className='w-9 h-9 bg-red-600 rounded-full b cursor-pointer active:bg-red-950' onClick={()=>{
        context.toggleDetails();
        }}/>
      </div>
        <article className='w-full h-auto flex flex-col gap-3 justify-center items-center text-center'>
          <figure>
            <img src={`${context.dataDetail.image}`} alt={`${context.dataDetail.title}`} className='h-52 w-full'/>
            <figcaption className='font-bold'>{context.dataDetail.title}</figcaption>
          </figure>
          <p>{context.dataDetail.description}</p>
          <button className='w-auto h-10  p-2 text-sm font-semibold bg-emerald-600 active:bg-emerald-900 rounded-lg '> <ShoppingBagIcon className='w-5 h-5 inline'/> Añadir al carrito</button>
        </article>
    </aside>
  );
}

export {Details};