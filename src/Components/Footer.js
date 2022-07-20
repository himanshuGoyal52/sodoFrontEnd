import React from 'react'

export const Footer = () => {
  return (
    <div id='footer_container'>
      <div id='social' >
        <span style={{'display':'block' , 'fontSize':'2rem'}}><img alt='sodo' src='./img/logo.png'/>sodo</span>
        <div style={{'fontSize':'1.4rem','margin':'2rem 0'}}>
          <i className='bx bxl-facebook' ></i>
          <i className='bx bxl-instagram' ></i>
          <i className='bx bxl-twitter' ></i>
          <i className='bx bxl-youtube' ></i>
        </div>
      </div>
      <div className='footer_text'>
        <h3>Company</h3>
        <a href='/'>About us</a>
        <a href='/'>Meet the team</a>
        <a href='/'>Careers</a>
        <a href='/'>Blog</a>
      </div>
      <div className='footer_text'>
        <h3>Product</h3>
        <a href='/'>product</a>
        <a href='/'>product</a>
        <a href='/'>product</a>
        <a href='/'>product</a>
      </div>
      <div className='footer_text'>
        <h3>Product</h3>
        <a href='/'>product</a>
        <a href='/'>product</a>
        <a href='/'>product</a>
      </div>
      <div className='phoneBtn fw'>
        <a className='btn' style={{'backgroundColor':'white','margin':'0 1rem' , 'color':'black'}} href='/'><i className='bx bxl-apple' ></i> Apple Store</a>
        <a className='btn' style={{'backgroundColor':'white','margin':'0 1rem' , 'color':'black'}} href='/'><i className='bx bxl-play-store' ></i> Play Store</a>
      </div>
    </div>
  )
}
    