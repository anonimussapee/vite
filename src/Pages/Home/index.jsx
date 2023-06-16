import {  useContext } from 'react';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import { ContextApi } from '../../Components/ContextApi';
import { Details } from '../../Components/Details';
import { Checkout } from '../../Components/Checkout';


const Home = () => {
  // in here live we products to the API
  const {data:itemProducts} = useContext(ContextApi);
  return (
      <Layout>
       <p className='text-xl text-black'>Home</p>
       <div className='grid  xs:grid-cols-1 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 '>
        {/* in here this implementation will show products in cards if exist data  */}
         {itemProducts?.map(item => {
        return <Card key={item.id} imgItem={item.images[0]} categoryItem={item.category.name} titleItem={item.title} priceItem={item.price} descItem={item.description} idItem={item.id}/>;
        }
        )}
       </div>
       <Details/>
       <Checkout/>
      </Layout>
  )
}

export {Home};


  // const [itemProducts, setItemProducts] = useState([]);

  // useEffect(()=>{
  //       fetch('https://api.escuelajs.co/api/v1/products')
  //       .then(response => response.json())
  //       .then(data => setItemProducts(data))
  //       .catch(error=>console.log(error))
  //       .finally(()=>console.log("fetch realizado"));
  // },[]);