import React from 'react'
import './Stories.css' 

import {Avatar} from '../Avatar'

export default function Stories() {
  return (
    <div className="container">
      <section className="stories">
        <div className="stories__container">

          <Avatar 
          image="https://i.pinimg.com/280x280_RS/d1/99/61/d1996167f4bb26299cd970a6e0685f90.jpg" 
          tamanho="grande" 
          selecionavel = {true}
          />  
        </div>
      </section>
    </div>
  )
}