import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import arrowLeft from '/src/images/arrow_back_FILL0_wght400_GRAD0_opsz48.png'

function CountryInfo({query,theme,imageTheme}) {
  const {ccn3} = useParams()
    
  return (
    <>
      <div id="Country-info"  className={theme ? 'dark-mode' : 'light-mode' }>

       <Link to='/'  className={theme ? 'dark-mode' : 'light-mode' } >
       <div className="go-back">
        <img src={arrowLeft} alt='going back arrow' className={imageTheme ? 'imageDark-mode' : 'imageLight-mode'}  />
            <h3>Back</h3>
        </div>
       </Link>
    
            {
                query.map((i,key)=>
                <div className='info' key={key}>
                
                        <section >
                         
                        <img src={i?.flags?.png} alt="" />
                       {ccn3}
                       <div id="info-details" >
                          <h2>  {i?.name?.common} </h2>
                          <p>Native Name: {i?.name?.official} </p>
                          <p> Population: {i.population}  </p>
                          <p> Region:  {i.region} </p>
                          <p>Sub Region: {i.subregion} </p>
                          <p> Capital: {i.capital}  </p>
       
                          <div className="little-space">
                           <p>Top Level Domain:  </p>
                           <p>Currencies: {i?.GTQ?.name}</p>
                           {/* <p>Languages: {i?.languages?.} </p> */}
                          </div>
       
                          <div className="border-countries">
       
                        <h3>Border Countries:</h3>
       
                        <div className="borders">
                           <div> {i?.borders?.[0]} </div>
                           <div>{i?.borders?.[1]}</div>
                           <div> {i?.borders?.[2]} </div>
                           </div>
       
                          </div>
       
                        </div>
       
                          </section>
                  
            </div>
                )
            }
       
      </div>
    </>
  )
}

export default CountryInfo
