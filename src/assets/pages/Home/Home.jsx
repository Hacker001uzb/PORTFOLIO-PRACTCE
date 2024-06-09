import React from 'react'
import group from '../../components/img/group.png'
import './Home.scss'
import Partners from '../../components/Partners/Partners'
import Comment from '../../components/Comment/Comment'
import Womment from '../../components/Womment/Womment'
import Talent from '../../components/Talent/Talent'



function Home() { 
  return (
    <div className='home '>
      <div className="home1">
      <div className="home__wrapper container">
        <div className="home__contact">
          <h5 className='rs'>WELCOME</h5>
          <h4 className='loremmm'>Lorem ipsum dolor sit amet  consectetur </h4>
          <p className='loremm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
          <button className='knopka'>Explore</button>
        </div>
     
        <img className='picture' src={group} alt="" />
      </div>
      </div>
    
      <Partners/>
      <Comment/>
      <Womment/>
      <Talent/>
  
    </div>
  )
}

export default Home