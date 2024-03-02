import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { mainCarouselData } from './mainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items  = mainCarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.imageUrl} alt=""/>)
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
    />
  )
}

export default MainCarousel