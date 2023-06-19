import {  useContext } from 'react';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import { ContextApi } from '../../Components/ContextApi';
import { Details } from '../../Components/Details';


const Home = () => {
  // in here live we products to the API
  // const {data:itemProducts} = useContext(ContextApi);

  const context = useContext(ContextApi);

  return (
      <Layout>
       <p className='text-xl text-black'>Home</p>
       <input className='w-48 h-auto border-[2px] border-gray-800 p-1 rounded-lg m-3 focus:outline-none' type='search' value={context.searchValue} placeholder='Shoes, cars...' onChange={(e)=>{
          context.setSearchValue(e.target.value);
       }}/>
       <div className='grid  xs:grid-cols-1 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 '>
        {/* in here this implementation will show products in cards if exist data  */}
         {context.filterProducts?.map(item => {
        return <Card key={item.id} imgItem={item.images[0]} categoryItem={item.category.name} titleItem={item.title} priceItem={item.price} descItem={item.description} idItem={item.id}/>;
        }
        )}
       </div>
       <Details/>
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