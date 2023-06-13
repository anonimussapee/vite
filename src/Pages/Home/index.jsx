import { useState, useEffect } from 'react';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';


const Home = () => {
  const [itemProducts, setItemProducts] = useState([]);

  useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItemProducts(data))
        .catch(error=>console.log(error))
        .finally(()=>console.log("fetch realizado"));
  },[]);
  return (
      <Layout>
       <p className='text-xl text-black'>Home</p>
       {itemProducts.map(item => {
        return <Card key={item.id} imgItem={item.images[0]} categoryItem={item.category.name} titleItem={item.title} priceItem={item.price}/>;
        }
        )}
       
      </Layout>
  )
}

export {Home};
