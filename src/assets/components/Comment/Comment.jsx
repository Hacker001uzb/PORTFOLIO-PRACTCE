import React from 'react'
import logo from '../../components/img/secondimg.png'
import './Comment.scss'
function Comment() {
  return (
    <div className='comment'>
        <div className="comment__wrapper container">
         <img src={logo} alt="" />
            <div className="comment__contact">
            <h2 className='dias'>Lorem ipsum dolor  sit  amet consectetur </h2>
            <p className='pa'>Lorem ipsum, dolor sit  amet  consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
            <button className='btnn'>Learn More</button>
            </div>
        </div>
    </div>
  )

}

export default Comment