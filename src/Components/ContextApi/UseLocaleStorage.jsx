import { useEffect, useState } from 'react'

const UseLocaleStorage = (name, initialValue) => {

  const [data, setData] = useState(initialValue);

  let dataJson = localStorage.getItem(name);

  useEffect(()=>{
    setTimeout(() => {
      try {
        
      let dataLocal = JSON.parse(dataJson) || initialValue ;
      setData(dataLocal);

      } catch (error) {
        console.log(error);
      }
    }, 200);
  },[]);

  const save = (value) => {
    setData(value)
    localStorage.setItem(name, JSON.stringify(value));
    
  }

  return {data,save};
}

export {UseLocaleStorage};