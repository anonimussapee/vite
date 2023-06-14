import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

const Details = ({name, details, price, category, id}) => {

  const context = useContext(ContextApi);

  return (
    <aside className={`${context.detailState ? 'visible': 'hidden'} xs:pt-44 sm:pt-24 md:pt-16 p-4 panel-details fixed top-0 bottom-0 right-0 w-80 bg-white border-4 border-[#00000095] flex-col  rounded-lg`} >
      <div className='flex justify-between items-center'><p className='text-lg font-semibold'>Producto</p><div className='w-9 h-9 bg-red-600 rounded-full border-2 border-black cursor-pointer active:bg-red-950' onClick={()=>{
        context.toggleDetails();
      }}><XMarkIcon color='white'/></div></div>
    </aside>
  );
}

export {Details};