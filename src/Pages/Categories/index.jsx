import { useContext } from 'react';
import { ContextApi } from '../../Components/ContextApi';
import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';

const Categories = () => {
  
  const context = useContext(ContextApi);

  const currentPath = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1); 

  let filtercategory;

  if(currentPath === 'clothes'){
    
    filtercategory = context.data.filter(item =>{
      return item.category.name.toLowerCase() === currentPath;
    });

  }else if(currentPath === 'electronics'){
    
    filtercategory = context.data.filter(item =>{
      return item.category.name.toLowerCase() === currentPath;
    });

  }else if(currentPath === 'furniture'){
    
    filtercategory = context.data.filter(item =>{
      return item.category.name.toLowerCase() === currentPath;
    });

  }else if(currentPath === 'shoes'){
    
    filtercategory = context.data.filter(item =>{
      return item.category.name.toLowerCase() === currentPath;
    });

  }else if(currentPath === 'shoes'){
    
    filtercategory = context.data.filter(item =>{
      return item.category.name.toLowerCase() === currentPath;
    });

  }else if(currentPath === 'others'){
    
    filtercategory = context.data.filter(item =>{
      return item.category.name.toLowerCase() === currentPath;
    });

  }

return (
  <Layout>
    <h1 >CATEGORY OF {currentPath.toUpperCase()}</h1>
    <div className='grid  xs:grid-cols-1 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-4'>
      {
        filtercategory.map((item, index )=>{
          return (<Card categoryItem={item.category.name} idItem={item.id} descItem={item.description} imgItem={item.images} priceItem={item.price} titleItem={item.title} key={index}/>)
        })
      }
    </div>

  </Layout>
);
}

export {Categories};