import React from 'react'
import './Footer.scss'
import facebo from '../../components/img/facebo.png'
import ins from '../../components/img/ins.png'
import a from '../../components/img/a.png'
import tiktok from '../../components/img/tiktok.png'
import whatsapp from '../../components/img/whatsapp.png'
import youtube from '../../components/img/youtube.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__wrapper container">
          <div className="icon__wrapper">
            <a className="icon__item"><img src={facebo} alt="" /></a>
            <a className="icon__item"><img src={ins} alt="" /></a>
            <a className="icon__item"><img src={a} alt="" /></a>
            <a className="icon__item"><img src={tiktok} alt="" /></a>
            <a className="icon__item"><img src={whatsapp} alt="" /></a>
            <a className="icon__item"><img src={youtube} alt="" /></a>
          </div>
          <p className='cs'>© Start, 2022. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer