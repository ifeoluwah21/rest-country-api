import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Countries({theme, searchCountry,query,SetQuery}) {
   const [isloading, setisLoading] = useState(true)
    
    

    

    useEffect(()=>{
     axios.get(`https://restcountries.com/v3.1/all`)
     .then(res => {
      console.log(res.data)
      SetQuery(res.data)
      setisLoading(false)
     })
     .catch(err =>{
      console.log(err)
     })
    },[])

    if (isloading) {
      return <motion.h2 initial={{x:'-250vw'}} animate={{x:0}} transition={{type:'spring', stiffness:'40' }}className='Loading-text'>Loading....</motion.h2>
    }


  return (
   <>
   <div className='container'>

     

   
   
    {
        query.filter((data)=>{
          if (searchCountry == ''){
            return data
          }
          else if(data?.name?.common.toLowerCase().includes(searchCountry.toLowerCase())){
            return data
          }
        }).map((data, index) =>  
      <Link to={`/info/${data.ccn3}`}>
       <article key={index}>
          <div >
          <img src={data?.flags?.png} alt={data?.name?.official}  />
        
      <div id="details"  className={theme ? 'dark-mode' : 'light-mode' }>
           <h3> {data?.name?.common} </h3>
          <p> Population: {data.population} </p>
          <p> Region: {data.region} </p>
          <p> Capital: {data.capital} </p>
      </div>
       
        </div>
       </article>
      </Link>
        )
      }
  
   


</div>
   </>
  )
}

export default Countries
