import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/men_kurta'


const Homepage = () => {
  return (
     
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel  data={mens_kurta} sectionName={"Men's Kurta"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"women's Saree"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"women's Dress"}/>
        </div>
    </div>
  )
}

export default Homepage