import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className='gifs animate__animated animate__backInLeft animate__fast'>
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}
