import React from 'react'
import CardData from './CardData'
import CardBuilder from './CardBuilder'
import './CardStyles.css'
function Card() {
    return (
        <>
        
            <div className='cards'>
                {CardData.map((data, indx) => {
                    return (

                        <CardBuilder key={indx}
                            img={data.blogImg}
                            title={data.title}
                            description={data.description}
                            date={data.date}
                            author={data.author} />
                    )
                })}
            </div>
        </>
    )
}

export default Card