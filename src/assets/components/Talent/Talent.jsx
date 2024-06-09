import React from 'react'
import './Talent.scss'
import first from '../../components/img/firsrt.png'
import second from '../../components/img/second.png'
import said from '../../components/img/said.png'
import fourth from '../../components/img/fourth.png'

function Talent() {
  return (
    <div className='Talent'>
        <div className="talent__wrapper container">
            <div className="talent__contact">
                <h5 className='name'>TEAM</h5>
                <h2 className='our'>Our Talents</h2>
                <p className='lorem'>Lorem ipsum, dolor sit amet consectetur <br />
Suscipit nemo hic quos, ab,</p>
                <div className="photo">
                    <div className="member">
                    <img className='pic' src={first} alt="" />
                    <h4 className='h4'>Peg Legge</h4>
                    <p className='pi'>CEO</p>
                    </div>
                    <div className="member">
                    <img className='pic' src={second} alt="" />
                    <h4 className='h4'>Richard Guerra</h4>
                    <p className='pi'>CTO</p>
                    </div>
                    <div className="member">
                    <img className='pic' src={said} alt="" />
                    <h4 className='h4'>Alexandra Stolz</h4>
                    <p className='pi'>DESIGNER</p>
                    </div>
                    <div className="member">          
                    <img className='pic' src={fourth} alt="" />
                    <h4 className='h4'>Janet Bray</h4>
                    <p className='pi'>DEVELOPER</p>
                    </div>


                </div>
                <button className='redmi'>View Team</button>
            </div>
        </div>

    </div>
  )
}

export default Talent