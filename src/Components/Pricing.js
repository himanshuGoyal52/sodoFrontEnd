import React from 'react'

export const Pricing = () => {
  return (
    <div id='pricing_container'>
      <div className='pricing_item'>
        <h2>Free</h2>
        <span><h1 style={{'display':'inline'}}>$0</h1>&nbsp;/ month</span>
        <p><i className='bx bx-check'></i>Lorem ipsum dolor</p>
        <p><i className='bx bx-check'></i>Lorem ipsum dolor</p>
        <p><i className='bx bx-check'></i>Lorem ipsum dolor</p>
        <a href='/' className='btn'>Sign up</a>
      </div>
      <div className='pricing_item_ct'>
        <span id='mostPOP'>MOST POPULAR</span>
        <h2>Standard</h2>
        <span><h1 style={{'display':'inline'}}>$9</h1>&nbsp;/ month</span>
        <p><i className='bx bx-check'></i>Lorem ipsum dolor</p>
        <p><i className='bx bx-check'></i>Lorem ipsum dolor</p>
        <p><i className='bx bx-check'></i>Lorem ipsum dolor</p>
        <a href='/' className='btn'>Sign up</a>
      </div>
      <div className='pricing_item'>
        <h2>Enterprise</h2>
        <span><h1 style={{'display':'inline'}}>$16</h1>&nbsp;/ month</span>
        <p><i className='bx bx-check'></i>Lorem ipsum dolor</p>
        <p><i className='bx bx-check'></i>Lorem ipsum dolor</p>
        <p><i className='bx bx-check'></i>Lorem ipsum dolor</p>
        <a href='/' className='btn'>Sign up</a>
      </div>
    </div>
  )
}
    