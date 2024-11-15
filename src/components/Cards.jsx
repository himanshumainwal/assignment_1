import React from 'react'
import '../css/projects&cards.css'

export default function Cards({image, title}) {
    return (
        <>
            <div className='card'>
                <img src={image} alt={title} />
                <div className='card_title'>
                    <h3>{title}</h3>
                    <h4>Read more...</h4>
                </div>
            </div>
        </>
    )
}
