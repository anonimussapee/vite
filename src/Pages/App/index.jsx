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


const AppRoutes = () => {
  let routes = useRoutes([
    {path : '/', element : <Home/>},
    {path : '/home', element : <Home/>},
    {path : '/my-account', element : <MyAccount/>},
    {path : '/my-order', element : <MyOrder/>},
    {path : '/my-orders', element : <MyOrders/>},
    {path : '/sign-in', element : <SignIn/>},
    {path : '/*', element : <NotFound/>}, 
  ]);
  return routes;
}



function App() {
 
  
  return (
    <ContextApiProvider>
       <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
       </BrowserRouter>
    </ContextApiProvider>
  )
}

export {App};
