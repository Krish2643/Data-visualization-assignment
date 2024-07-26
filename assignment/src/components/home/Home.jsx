import React from "react"
import Cards from "../cards/Cards"
import Charts from "../charts/Charts"
import Map from "../Map/Map"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container'>
          <div className='heading flexSB'>
            <h3>Data Visualization</h3>
          </div>
          <Cards />
          <Charts />
          <Map />
          <h1>END</h1>
        </div>
      </section>
    </>
  )
}

export default Home
