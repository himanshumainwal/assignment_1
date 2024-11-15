import React from 'react'
import '../css/projects&cards.css'
import Cards from './Cards'

export default function Projects() {
    let image_1 = './image_1.jpeg'
    let image_2 = './image_2.jpeg'
    let image_3 = './image_3.jpeg'
    let image_4 = './image_4.jpeg'
    let image_5 = './image_5.jpeg'
    return (
        <>
            <div className='container'>
                <p>\ Up Coming Projects \</p>
                <h1>Our Upcoming Projects</h1>
                <div className='cardss'>
                <Cards image={image_1} title={"All in one application"}/>
                <Cards image={image_2} title={"Coding war"}/>
                <Cards image={image_3} title={"Edutech application"}/>
                <Cards image={image_4} title={"Chat application"}/>
                <Cards image={image_5} title={"Chess application"}/>
                <Cards image={image_1} title={"Speed dating"}/>
                </div>
            </div>
        </>
    )
}
