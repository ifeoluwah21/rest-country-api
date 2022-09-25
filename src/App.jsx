import { useState } from 'react'
import './App.css'
import Countries from './components/Countries'
import CountryInfo from './components/CountryInfo'
import Filters from './components/Filters'
import Top from './components/Top'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(false)
  const [searchCountry, setSearchCountry] = useState('')
  const [query, SetQuery] = useState([])
  const  [imageTheme, setImageTheme] = useState(true)

  return (
    <div className="App">
   <Top  theme={theme} setTheme={setTheme}  imageTheme={imageTheme} setImageTheme={setImageTheme} />

  
     <Router>
    
     
       
      <Routes>
  

      <Route path='/' element={
      <>
<Filters theme={theme} setTheme={setTheme}  searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
      <Countries theme={theme} setTheme={setTheme}  searchCountry={searchCountry} query={query} SetQuery={SetQuery} />
      </>
    }/>
     
      

      <Route path='/info/:ccn3' element={ <CountryInfo theme={theme} imageTheme={imageTheme} setImageTheme={setImageTheme} query={query} />} />
     
    

      </Routes>

     </Router>
     
    </div>
  )
}

export default App
