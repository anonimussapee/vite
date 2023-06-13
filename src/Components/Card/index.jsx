import {IoIosAdd} from 'react-icons/io';

const Card = ({imgItem, categoryItem, priceItem, titleItem,}) => {

  return (
    <div className='bg-gray-200 cursor-pointer w-56 h-60 rounded-lg overflow-hidden'>
      <figure className='relative w-full mb-2 h-4/5'>
        <span className='absolute bottom-0 m-2 px-1 py-0.5 bg-gray-700 rounded-xl text-white ' >{categoryItem}</span>
        <img src={imgItem} alt={titleItem} className='w-full h-full'/>
        {/* <div className='bg-gray-200 w-6 h-6 m-2 rounded-full absolute top-0 right-0 text-lg flex justify-center items-center'>+</div> */}
        <IoIosAdd  size='2rem' color='white' className='bg-gray-700 m-2 border-white border-double border-2 active:bg-gray-500  absolute top-0 right-0 rounded-full '/>
      </figure>
      <p className='flex justify-between '>
        <span className='text-lg px-2 font-light'>{titleItem}</span>
        <span className='text-xl px-2 font-semibold'>${priceItem}</span>
      </p>
    </div>
  );
}

export {Card};