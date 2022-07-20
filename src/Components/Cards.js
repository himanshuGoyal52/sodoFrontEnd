import React from 'react'

export const Cards = () => {
  return (
    <div id='card_container'>
        {/* ----------------------- */}
        <div className='cards'> 
            <img alt='png' src='./img/large.png' />
            <div className='card_text'>
                <h3 >Lorem ipsum</h3>
                <p>
                Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.
                </p>
            </div>
            <a className='btn' href='/'>Button</a>
        </div>
        {/* ----------------------- */}
        <div className='cards'> 
            <img alt='png' src='./img/large.png' />
            <div className='card_text'>
                <h3 >Lorem ipsum</h3>
                <p>
                Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.
                </p>
            </div>
            <a className='btn' href='/'>Button</a>
        </div>
        {/* ----------------------- */}
        <div className='cards'> 
            
            <img alt='png' src='./img/large.png' />
            <div className='card_text'>
                <h3 >Lorem ipsum</h3>
                <p>
                Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.
                </p>
            </div>
            <a className='btn' href='/'>Button</a>
        </div>
    </div>
  )
}
