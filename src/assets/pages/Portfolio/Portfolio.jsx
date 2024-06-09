import React from 'react'
import png4 from '../../components/img/4.png'
import png3 from '../../components/img/3.png'
import png2 from '../../components/img/2.png'
import png10 from '../../components/img/10.png'
import png5 from '../../components/img/5.png'
import png6 from '../../components/img/6.png'
import png1 from '../../components/img/1.png'
import png7 from '../../components/img/7.png'

import './Portfolio.scss'

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="portfolio__wrapper container">
        <div className="contact">
          <h5 className='h5'>Works</h5>
          <h1 className='h1'>Portfolio</h1>
          <p className='papa'>Lorem ipsum, dolor sit amet consectetur <br />
            adipisicing elit.</p>
        </div>
        <div className="portfolio__img">
          <img src={png4} alt="" />
          <img src={png3} alt="" />
          <img src={png2} alt="" />
          <img src={png10} alt="" />
          <img src={png5} alt="" />
          <img src={png6} alt="" />
          <img src={png1} alt="" />
          <img src={png7} alt="" />
        </div>
        <div className="button">
          <button className='more'>Learm More</button>
        </div>

      </div>
    </div>
  )
}

export default Portfolio