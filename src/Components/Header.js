import React from 'react'

export const Header = () => {
  return (
    <header id='header'>
        <div id='header_left'>
            <img src='./img/logo.png' alt='logo'></img>
            <h3>sodo</h3>
            <ul>
                <li><a href='/'>About us</a></li>
                <li><a href='/'>Download</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </div>
        <div id="header_right">
            <img alt='hamburger' src='./img/ham.png' />
            <a href='/' style={{'marginRight':'1rem' , 'color' :'#5555FF' ,'fontWeight':500}}>Log in</a>
            <a href='/' className='btn'>Primary action</a>
        </div>
    </header>
  )
}
