import { useContext, useState } from 'react';
import { Layout } from '../../Components/Layout';
import { Link } from 'react-router-dom';
import { ContextUser } from '../../Components/ContextApi/contextUser';

const SignIn = () => {

  const [user, setUser ]= useState({});
  const context = useContext(ContextUser);


  return (
      <Layout>
       <p className='text-xl text-black'>SignIn</p>

        <form className='w-[90%] min-w-[320px] max-w-[600px] flex flex-col gap-2 justify-center items-center mt-5' onSubmit={(e)=>e.preventDefault()}>

          <label className='flex flex-col gap-1 justify-center items-center'  htmlFor="urlToUser">
          <span>Ingresa el URL para tu foto de perfil</span>
        <input className='w-52 h-auto border-[2px] border-black rounded-lg  p-1' type="text" required value={user?.image} id="urlToUser" onChange={(e)=>{
          let newUser = {...user};
          newUser.image =e.target.value;
          setUser(newUser);
        }}/>

        </label>
        <label className='flex flex-col gap-1 justify-center items-center' htmlFor="nameToUser">
          <span>Ingresa tu nombre</span>
        <input className='w-52 h-auto border-[2px] border-black rounded-lg p-1' type="text" required  value={user?.name} id="nameToUser" onChange={(e)=>{
          let newUser = {...user};
          newUser.name =e.target.value;
          setUser(newUser);
        }}/>

        </label>
          <p>{context.user.data.name}</p>
          <Link to='/my-account'>
          <button className='w-36 h-auto p-2 border-[2px] border-gray-700 bg-gray-950 text-white' onClick={()=>{
            context.user.save([user]);
          }}>Iniciar Sessión</button>
          </Link>
        </form>
        
      </Layout>
  )
}

export {SignIn};
