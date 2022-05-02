import React from 'react'
import './Stories.css' 

import {Avatar} from '../Avatar'

export default function Stories({dados}) {
  return (
    <div className="container">
      <section className="stories">
        <div className="stories__container">

          {dados.map((story) => (
            <Avatar
            key={(story.id)} 
            image={story.story}
            tamanho="grande" 
            selecionavel = {true}
          />
        ))}      
          
        </div>
      </section>
    </div>
  )
}