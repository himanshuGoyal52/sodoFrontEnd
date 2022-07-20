import React from 'react'

export const Company = () => {
  return (
    <div style={{
      'margin':'2rem 6rem',
      'display' : 'flex',
      'flexDirection' :'column',
      'flexWrap':'wrap'
    }}>
      <h2>Trusted by</h2>
      <div id='company_container'>
        <img src='./img/Monzo.png' alt='google' />
        <img src='./img/Zoopla.png' alt='google' />
        <img src='./img/Google.png' alt='google' />
        <img src='./img/Nike.png' alt='google' />
        <img src='./img/Amazon.png' alt='google' />
      </div>
    </div>
  )
}
