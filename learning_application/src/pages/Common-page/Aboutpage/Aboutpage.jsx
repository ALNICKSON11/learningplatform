import React from 'react'
import ImageSlider from '../../../components/imageslider/ImageSlider'
import { SliderData } from '../../../components/imageslider/SliderData'
import Intro from '../../../components/intro/Intro'

function Aboutpage() {
  return (
    <div>
      <ImageSlider slides={SliderData}/>
      <Intro/>

    </div>
  )
}

export default Aboutpage