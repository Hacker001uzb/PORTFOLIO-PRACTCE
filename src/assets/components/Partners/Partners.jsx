import React from 'react'
import './Partners.scss'
import facebook from '../../components/img/facebook.png'
import airbnb from '../../components/img/airbnb.png'
import google from '../../components/img/google.svg'
import spotify from '../../components/img/spotify.png'
import microsoft from '../../components/img/microsoft.svg'




function Partners() { 
  return (
    <div className='partners'>
        <div className="partners__wrapper container">
            <div className="home__contact">
                <h4 className='green'>partners</h4>
                <h2>Lorem Ipsum Dolor</h2>
                <p>Lorem ipsum, dolor sit amet consectetur 
                  <br />  adipisicing elit.</p>
                  <div className="img">
                  <img src={google} alt="" />
                  <img src={microsoft} alt="" />
                  <img src={airbnb} alt="" />
                  <img src={facebook} alt="" />
                  <img src={spotify} alt="" />
                  </div>
            
                  <button className='button'>Learn More</button>
            </div>
        </div>
     
    </div>
  )
}

export default Partners