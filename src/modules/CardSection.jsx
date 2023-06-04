import React from 'react'
import Card from './Card'
import { featuresData } from '../data/features-data'

function CardSection() {
  return (
    <div className='-mt-14 w-full md:w-8/12 m-auto flex items-center justify-center'>
        <div className='flex flex-wrap w-full items-center justify-center md:justify-start m-auto'>
            {featuresData.map((feature, index) => {
                return (
                    <Card 
                        key={index}
                        title={feature.title}
                        src={feature.src}
                        alt={feature.alt}
                        description={feature.description}
                        link={feature.link}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default CardSection
