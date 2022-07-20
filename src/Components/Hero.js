import React from 'react'

export const Hero = () => {
  return (
    <div className='hero_container'>
        <div className='hero_item'>
            <h1>Lorem ipsum dolor sit amet. </h1>
            <p>Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.</p>
            <div>
                <a className='btn' href='/'>Primary action</a>
                <a style={{'margin' :'0 2rem'}} href='/'>Secondary action</a>
            </div>
        </div>
        <div className='hero_item' >
            <img style={{'maxWidth':'100%'}} alt='loo' src='./img/small.png' />
        </div>
    </div>
  )
}
