import { useRoutes, BrowserRouter } from 'react-router-dom';
import {Home} from '../Home';
import {MyAccount} from '../MyAccount';
import {MyOrder} from '../MyOrder';
import {MyOrders} from '../MyOrders';
import {NotFound} from '../NotFound';
import {SignIn} from '../SignIn';
import { NavBar } from '../../Components/NavBar';
import './App.css';
import { ContextApiProvider } from '../../Components/ContextApi';
import { Checkout } from '../../Components/Checkout';
import { ContextMyOrdersProvider } from '../../Components/ContextApi/contextMyOrders';
import { Categories } from '../Categories';
import {ContextUserProvider} from '../../Components/ContextApi/contextUser';


const AppRoutes = () => {
  let routes = useRoutes([
    {path : '/', element : <Home/>},
    {path : '/home', element : <Home/>},
    {path : '/my-account', element : <MyAccount/>},
    {path : '/my-order', element : <MyOrder/>},
    {path : '/my-orders', element : <MyOrders/>},
    {path : '/my-orders/last', element : <MyOrder/>},
    {path : '/my-orders/:id', element : <MyOrder/>},
    {path : '/sign-in', element : <SignIn/>},
    {path : '/categories/:id', element : <Categories/>},
    {path : '/*', element : <NotFound/>}, 
  ]);
  return routes;
}



function App() {
 
  
  return (
    <ContextApiProvider>
      <ContextMyOrdersProvider>
        <ContextUserProvider>
          <BrowserRouter>
            <AppRoutes/>
            <NavBar/>
            <Checkout/>
          </BrowserRouter>
        </ContextUserProvider>
      </ContextMyOrdersProvider>
    </ContextApiProvider>
  )
}

export {App};
