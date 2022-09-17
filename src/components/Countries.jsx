import React, {useEffect, useState} from 'react'
import lightMode from '/src/images/light_mode_FILL0_wght400_GRAD0_opsz48.png'
import darkMode from '/src/images/dark_mode_FILL0_wght400_GRAD0_opsz48.png'
import search from '/src/images/search.png'
import axios from 'axios'

function Countries() {
    const [theme, setTheme] = useState(false)
     const [lightThemeBtn, setlightThemeBtn] = useState(false)
     const [darkThemeBtn, setdarkThemeBtn] =useState(true)
     const [countries, setCountries] = useState([])

    const darkToggle =()=>{
        setTheme(!theme)
       setlightThemeBtn(true)
       setdarkThemeBtn(false)
    }

    const lightToggle =()=>{
        setTheme(!theme)
       setlightThemeBtn(false)
       setdarkThemeBtn(true)
    }

    useEffect(()=>{
     axios.get('https://restcountries.com/v3.1/all')
     .then(res => {
      console.log(res)
     })
     .catch(err =>{
      console.log(err)
     })
    })


  return (
   <>
   <div className='container'>

     <div id="top"  className={theme ? 'dark-mode' : 'light-mode' } >
        <h3>Where in the world?</h3>

       {darkThemeBtn && (
         <div onClick={darkToggle} className="light">
         <img src={darkMode} alt='DarkMode image' /> 
              <p>Dark Mode</p>
           </div>
       )}
         
         {lightThemeBtn &&(
            <div onClick={lightToggle} className="dark">
            <img src={lightMode} alt='lightMode image' />      
               <p>Light Mode</p>      
            </div>
         )}

     </div>

{/* SEARCH BAR */}

     <div className={theme ? 'dark-mode' : 'light-mode' } id="input-search">
        <img src={search} alt="search Image" />

        <input type="search" name="Search" placeholder='Search for a country'  className={theme ? 'dark-mode' : 'light-mode' } />
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

{/* MAIN PART!! SETTING UP FOR THE COUNTRIES */}
   <div id="countries" className={theme ? 'dark-mode' : 'light-mode' } >
    <img src="" alt="" />
   
   <div className="details">
      <h3>Germany</h3>
      <p>Population:</p>
      <p>Region:</p>
      <p>Capital</p>
   </div>

  
   </div>


</div>
   </>
  )
}

export default Countries
