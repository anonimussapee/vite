import { NavLink } from 'react-router-dom';
import '../../Pages/App/App.css';
import { useContext } from 'react';
import { ContextApi } from '../ContextApi';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const NavBar = () => {

  const context= useContext(ContextApi);

  const activeStyle = 'underline font-semibold underline-offset-4';

  return(
    <nav className='flex sm:flex-col md:flex-row justify-between items-center fixed top-0 z-10 w-full p-4 text-sm font-light bg-emerald-700 text-white'>
      <ul className='xs:grid  xs:grid-cols-2 sm:flex  md:flex  items-center gap-3 ' >
        <li className=' text-xl font-semibold underline underline-offset-4'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='xs:grid  xs:grid-cols-1 sm:flex  md:flex items-center gap-3'>
        <li className='text-white/60'>
          jdxevs@platzi.com
        </li>
        <li>
          <NavLink to='/my-orders'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
           My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex w-auto h-auto text-white gap-2 justify-center items-center font-semibold cursor-pointer' onClick={()=>{
          context.togglecheckout();
        }}>
          <ShoppingCartIcon className='w-6 h-6 '/>
          <p>{context.cartIconValue}</p>
           
        </li>
      </ul>
    </nav>
  );
}
export {NavBar};
