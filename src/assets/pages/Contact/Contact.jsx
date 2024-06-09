import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div className='Map'>
        <div className="map__wrapper container">
            <h1 className='us'>Contact Us</h1>
            <p className='batiskaf'>Lorem ipsum, dolor sit amet consectetur <br />
adipisicing elit.</p>
            <div className="map__contact">
              <h4 className='bike'>Name</h4>
                <input className='text'  type="text" />
                <h4 className='bike'>Email</h4>
                <input className='text' type="text" />
              <h4 className='bike'>Meassage</h4>
                <input   className='ford' type="text" />
                <button className='submit'>Submit</button>


              <div className="map__right">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.59996997053!2d69.11421745127342!3d41.28247944391445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1717481291562!5m2!1sru!2s" width="650" height="390"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact