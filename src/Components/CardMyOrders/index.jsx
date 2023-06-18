import { ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const CardMyOrders = ({item}) => {


  return (
    <article className='w-full h-32 p-1 flex items-center  gap-2 border-[3px] border-gray-700 rounded-lg'>
      <figure>
        <img  className='w-32 h-20 object-fill rounded-lg' src={`${item.products[0].image}`} alt={`${item.products[0].title}`} />
      </figure>
      <div className='flex flex-col flex-1 gap-1 justify-center items-center text-center'>
        <p className='text-lg font-medium'>Pedido realizado el:</p>
        <p>{item.date}</p>
        <p className='text-base font-medium'>{item.products.length} Articulos</p>

        <p className='font-mono'>Valor: ${item.total}</p>
      </div> 
      <Link to={`/my-orders/${item.id}`}>
        <ArrowTopRightOnSquareIcon className='h-10 w-10 text-black'/>
      </Link>
    </article>
  );
}

export {CardMyOrders};