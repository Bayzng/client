import React from 'react'
// import Footer from '../General/Footer/Footer'
import Navbar from '../General/Navbar/Navbar'
import Hero from '../General/Hero/Hero'
import Content from '../General/Content/Content'
import Offer from '../General/Offer/Offer'

const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
          <Hero/>
        </div>
        <div>
          <Content/>
        </div>
        <div>
          {/* <Offer/> */}
        </div>
        <div>
          {/* <Footer/> */}
        </div>
    </div>
  )
}

export default Home