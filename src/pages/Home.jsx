import React from 'react'
import Banner from '../components/Banner'
import Comments from '../components/Comments'
import Product from '../components/Product'

const Home = () => {
  return (
    <section>
      <Banner/>
      <Product/>
      <Comments/>
    </section>
  )
}

export default Home