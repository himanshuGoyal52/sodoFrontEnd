import React from 'react'

export const Contact = () => {
  return (
    <div id='contact_container'>
      <h2 style={{    'margin': '1rem','fontSize': '3rem'}}>Contact us</h2>
      <div id='form_container'>
        <div style={{
          'display':'flex',
          'width':'100%'
        }}>
          <input style={{'marginRight':'2rem'}} type='text'  className='fw' placeholder='Enter your first name'/>
          <input className='fw' type='text' placeholder='Enter you last name' />
        </div>
        <input type='email' className='fw' placeholder='Enter your email address' />

        <textarea   rows={6} cols={6} placeholder='Enter your message' className='fw'/>

        <button style={{
          'border' : 'none',
          'cursor':'pointer',
          'marginLeft':'auto',
        }} className='btn' >Submit Message</button>
      </div>
    </div>
  )
}
    