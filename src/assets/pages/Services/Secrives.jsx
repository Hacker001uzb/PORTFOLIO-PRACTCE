import React from 'react'
import './Services.scss'
import click from '../../components/img/click.png'

function Secrives() {
  return (
    <div className='Services'>
        <div className="services__wrapper">
            <div className="services__contact container">
                <h5 className='plans'>Plans</h5>
                <h1 className='our'>Our Services</h1>
                <p className='supra'>Lorem ipsum, dolor sit amet consectetur <br />
adipisicing elit.</p>
            </div>

            <div className="cash container">
                <div className="money">
                    <p className='bmw'>Basic</p>
                    <h1 className='h10'>$100<span>/month</span></h1>
                    <p className='merc'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Suscipit <br /> nemo hic quos, ab, dolor aperiam</p>

                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <button>Learn More</button>
                </div>

                <div className="money">
                    <p className='bmw'>Plus</p>
                    <h1 className='h10'>$250<span>/month</span></h1>
                    <p className='merc'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Suscipit  <br />nemo hic quos, ab, dolor aperiam</p>

                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <button>Learn More</button>
                </div>

                <div className="money">
                    <p className='bmw'>Pro</p>
                    <h1 className='h10'>$400<span>/month</span></h1>
                    <p className='merc'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Suscipit <br /> nemo hic quos, ab, dolor aperiam</p>

                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <p className='titan'><img src={click} alt="" />Lorem ipsum, dolor sit </p>
                    <button>Learn More</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Secrives