import React from 'react'
import logo from '../../components/img/third.png'
import './Womment.scss'

function Womment() {
  return (
    <div className='Womment'>
        <div className="womment__wrapper container" >
            <div className="womment__contact">
            <h2 className='win'>Lorem ipsum dolor sit amet  consectetur </h2>
            <p className='dog'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
            <button className='space'>Learn More</button>
            </div>
            <img src={logo} alt="" />        
        </div>

    </div>
  )
}

export default Womment