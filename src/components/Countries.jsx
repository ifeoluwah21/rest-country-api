import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Countries({ theme, searchCountry, query, SetQuery }) {
  const [isloading, setisLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(res => {
        // console.log(res.data)
        // Filtered only the required data from the request
        const transformedData = res.data.map(country => {
          return {
            name: country?.name?.common,
            population: country?.population,
            region: country?.region,
            capital: country?.capital?.join(", "),
            tld: country?.tld?.join(", "),
            flags: {
              png: country?.flags.png, svg: country?.flags.svg,
            },
            get currencies() {
              let result = [];
              for (let key in country?.currencies) {
                result.push(country?.currencies[key].name)
              }
              return result.join(", ")
            },
            get languages() {
              let result = [];
              for (let key in country?.languages) {
                result.push(country?.languages[key])
              }
              return result.join(", ")
            },
            get borders() {
              let result = [];
              country.borders?.forEach(item => {
                res.data?.forEach(x => {
                  if (x.cca3 === item) {
                    result.push(x.name.common)
                  }
                })
              })
              if (!result || result.length === 0) {
                return `No border country`;
              }
              return result.join(", ");
            }
          }
        })
        console.log(transformedData);

        SetQuery(res.data)
        setisLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (isloading) {
    return <motion.h2 initial={{ x: '-250vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: '40' }} className='Loading-text'>Loading....</motion.h2>
  }


  return (
    <>
      <div className='container'>
        {
          query.filter((data) => {
            if (searchCountry == '') {
              return data
            }
            else if (data?.name?.common.toLowerCase().includes(searchCountry.toLowerCase())) {
              return data
            }
          }).map((data, index) =>
            <Link to={`/info/${data.ccn3}`}>
              <article key={index}>
                <div >
                  <img src={data?.flags?.png} alt={data?.name?.official} />

                  <div id="details" className={theme ? 'dark-mode' : 'light-mode'}>
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
