import React, {useState} from 'react'
import search from '/src/images/search.png'
function Filters({theme, searchCountry, setSearchCountry}) {
    
     
  return (
    <>
        <div className={theme ? 'dark-mode' : 'light-mode' } id="input-search">
        <img src={search} alt="search Image" />

        <input type="search" name="Search" placeholder='Search for a country'  className={theme ? 'dark-mode' : 'light-mode' } value={searchCountry} onChange={(e)=>setSearchCountry(e.target.value)} />
     </div>

   <div className="region">
    <select className={theme ? 'dark-mode' : 'light-mode' } >
        <option value="0"  hidden>Filter by Region</option>
        <option value="1">Africa</option>
        <option value="2">America</option>
        <option value="3">Asia</option>
        <option value="4">Europe</option>
        <option value="5">Oceania</option>
    </select>
   </div>
    </>
  )
}

export default Filters
