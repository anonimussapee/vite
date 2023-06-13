import { NavLink } from 'react-router-dom';
import '../../Pages/App/App.css';

const NavBar = () => {

  const activeStyle = 'underline font-semibold underline-offset-4';

  return(
    <nav className=' flex justify-between items-center fixed top-0 z-10 w-full p-4 text-sm font-light bg-emerald-700 text-white'>
      <ul className=' flex items-center gap-3 ' >
        <li className=' text-lg font-semibold'>
          <NavLink to='/'
          className={({ isActive}) =>
          isActive ? activeStyle : undefined
        }
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/all'
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
      <ul className=' flex items-center gap-3'>
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
        <li>
          &#169; 0 
        </li>
      </ul>
    </nav>
  );
}

export {NavBar};