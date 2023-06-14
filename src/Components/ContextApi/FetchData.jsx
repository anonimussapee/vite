import { useEffect, useState } from 'react';

 const FetchData = (url) => { 
    const [ data, setData] = useState([]);

    useEffect(()=>{
      fetch(url)
      .then(response => response.json())
      .then(dataReady => setData(dataReady))
      .catch(error=>console.log(error))
      .finally(()=>console.log("fetch realizado"));
  },[]);

  return {data};
 }

export {FetchData}; 