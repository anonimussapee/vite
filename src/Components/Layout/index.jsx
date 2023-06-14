
const Layout = ({children}) => {
  return (
    <div className='flex xs:mt-48 sm:mt-28 md:mt-20 flex-col items-center w-full'>
      {children}
    </div>
  );
}

export {Layout};