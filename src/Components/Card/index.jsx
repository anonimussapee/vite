import { useContext } from 'react';
import { ContextApi } from '../ContextApi';
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid';

const Card = ({imgItem, categoryItem, priceItem, titleItem, descItem, idItem}) => {
  
  const context = useContext(ContextApi);

  const element =  (id) =>{

    let indexInCart =  context.cartDataValues.findIndex(item =>{ return item.id === id });

    if(indexInCart>=0){

      let condition = context.cartDataValues[indexInCart].times>=5;
      // let  product = context.cartData.data.filter(item =>{return item.id === id});
      if(condition){
        return (
          <CheckIcon color='white' className='bg-gray-950 m-2 w-10 h-10 border-white border-double border-2 active:bg-gray-500  absolute top-0 right-0 rounded-full' onClick={(e)=>{
            e.stopPropagation();
          }}/>
        );
      }else{
        return (
          <PlusIcon color='white' className='bg-gray-700 m-2 w-10 h-10 border-white border-double border-2 active:bg-gray-500  absolute top-0 right-0 rounded-full ' onClick={(e) =>{
            e.stopPropagation();
            context.setCartData({image:imgItem, category:categoryItem, price:priceItem, title:titleItem, description:descItem, id:idItem});


            }
            }/>
        );
      }

    }else{
      return (
        <PlusIcon color='white' className='bg-gray-700 m-2 w-10 h-10 border-white border-double border-2 active:bg-gray-500  absolute top-0 right-0 rounded-full ' onClick={(e) =>{
          e.stopPropagation();
         
          context.setCartData({image:imgItem, category:categoryItem, price:priceItem, title:titleItem, description:descItem, id:idItem});
          
          }
          }/>
      );
    }


  }

  return (
    <div className='bg-gray-200 cursor-pointer xs:w-72 ss:w-80 sm:w-64 md:w-60 h-auto pb-2 rounded-lg overflow-hidden' onClick={()=>{
      context.toggleDetails();
      context.setDataToPanel({image:imgItem, category:categoryItem, price:priceItem, title:titleItem, description:descItem, id:idItem});
    }}>
      <figure className='relative w-full mb-2 h-4/5'>
        <span className='absolute bottom-0 m-2 px-1 py-0.5 bg-gray-700 rounded-xl text-white ' >{categoryItem}</span>
        <img src={imgItem} alt={titleItem} className='w-full h-full'/>
        {/* <div className='bg-gray-200 w-6 h-6 m-2 rounded-full absolute top-0 right-0 text-lg flex justify-center items-center'>+</div> */}
        {element(idItem)}
        
      </figure>
      <p className='flex justify-between '>
        <span className='text-lg px-2 font-light'>{titleItem}</span>
        <span className='text-xl px-2 font-semibold'>${priceItem}</span>
      </p>
    </div>
  );
}

export {Card};