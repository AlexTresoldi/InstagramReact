import React from 'react'
import './Feed.css'

import { Avatar } from '../Avatar'

export default function Feed() {
  return (
    <div className="container">
      <section className="feed">
        <article className="post">
            <header className="post__header">
              <div className="user">  
                <Avatar image="https://i.pinimg.com/280x280_RS/d1/99/61/d1996167f4bb26299cd970a6e0685f90.jpg"/>
      
                <a href="/" className="user__thumb">Mestre Yoda</a>           
              </div>  
              
              <button className="post__context">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </header>

            <figure className="post__figure">
              <img src="img/profiles/yoda/yoda-1.jpg" alt="" />
            </figure>

            <nav className="post__controls">
              <button className="post__control">
                <i className="far fa-heart"></i>
              </button>

              <button className="post__control">
                <i className="far fa-comment"></i>
              </button>

              <button className="post__control">
                <i className="far fa-bookmark"></i>
              </button>
            </nav>

            <div className="post__status">
              <div className="user">

              <Avatar image="https://i.pinimg.com/280x280_RS/d1/99/61/d1996167f4bb26299cd970a6e0685f90.jpg"
              tamanho='pequeno'
              />

                <span>
                  curtido por <a href="/">Domino</a> e outras{" "}
                  <a href="/">7 pessoas</a>
                </span>
              </div>
            </div>
        </article>
  {/*       <article class="post">
          <header class="post__header">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/gamora/gamora-profile.jpg" alt=""/>
              </a>

              <a href="/" class="user__name">Gamora Zen</a>
            </div>

            <button class="post__context">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </header>

          <figure class="post__figure">
            <img src="img/profiles/gamora/gamora-1.jpg" alt=""/>
          </figure>

          <nav class="post__controls">
            <button class="post__control">
              <i class="far fa-heart"></i>
            </button>

            <button class="post__control">
              <i class="far fa-comment"></i>
            </button>

            <button class="post__control">
              <i class="far fa-bookmark"></i>
            </button>
          </nav>

          <div class="post__status">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/carol/carol-profile.jpg" alt=""/>
              </a>

              <span>
              curtido por <a href="/">Carol Danvers</a> e outras <a href="/">7 pessoas</a>
            </span>
            </div>
          </div>
        </article>

        <article class="post">
          <header class="post__header">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/black-panther/black-panther-profile.jpg" alt=""/>
              </a>

              <a href="/" class="user__name">T'Challa</a>
            </div>

            <button class="post__context">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </header>

          <figure class="post__figure">
            <img src="img/profiles/black-panther/black-panther-1.jpg" alt=""/>
          </figure>

          <nav class="post__controls">
            <button class="post__control">
              <i class="far fa-heart"></i>
            </button>

            <button class="post__control">
              <i class="far fa-comment"></i>
            </button>

            <button class="post__control">
              <i class="far fa-bookmark"></i>
            </button>
          </nav>

          <div class="post__status">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/bruce/bruce-profile.jpg" alt=""/>
              </a>

              <span>
              curtido por <a href="/">Bruce Wayne</a> e outras <a href="/">5 pessoas</a>
            </span>
            </div>
          </div>
        </article>

        <article class="post">
          <header class="post__header">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/carol/carol-profile.jpg" alt=""/>
              </a>

              <a href="/" class="user__name">Carol Danvers</a>
            </div>

            <button class="post__context">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </header>

          <figure class="post__figure">
            <img src="img/profiles/carol/carol-1.jpg" alt=""/>
          </figure>

          <nav class="post__controls">
            <button class="post__control">
              <i class="far fa-heart"></i>
            </button>

            <button class="post__control">
              <i class="far fa-comment"></i>
            </button>

            <button class="post__control">
              <i class="far fa-bookmark"></i>
            </button>
          </nav>

          <div class="post__status">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/yoda/yoda-profile.jpg" alt=""/>
              </a>

              <span>
              curtido por <a href="/">Mestre Yoda</a> e outras <a href="/">7 pessoas</a>
            </span>
            </div>
          </div>
        </article>

        <article class="post">
          <header class="post__header">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/domino/domino-profile.jpg" alt=""/>
              </a>

              <a href="/" class="user__name">Domino</a>
            </div>

            <button class="post__context">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </header>

          <figure class="post__figure">
            <img src="img/profiles/domino/domino-1.jpg" alt=""/>
          </figure>

          <nav class="post__controls">
            <button class="post__control">
              <i class="far fa-heart"></i>
            </button>

            <button class="post__control">
              <i class="far fa-comment"></i>
            </button>

            <button class="post__control">
              <i class="far fa-bookmark"></i>
            </button>
          </nav>

          <div class="post__status">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/black-panther/black-panther-profile.jpg" alt=""/>
              </a>

              <span>
              curtido por <a href="/">T'Challa</a> e outras <a href="/">3 pessoas</a>
            </span>
            </div>
          </div>
        </article>

        <article class="post">
          <header class="post__header">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/bruce/bruce-profile.jpg" alt=""/>
              </a>

              <a href="/" class="user__name">Bruce Wayne</a>
            </div>

            <button class="post__context">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </header>

          <figure class="post__figure">
            <img src="img/profiles/bruce/bruce-1.jpg" alt=""/>
          </figure>

          <nav class="post__controls">
            <button class="post__control">
              <i class="far fa-heart"></i>
            </button>

            <button class="post__control">
              <i class="far fa-comment"></i>
            </button>

            <button class="post__control">
              <i class="far fa-bookmark"></i>
            </button>
          </nav>

          <div class="post__status">
            <div class="user">
              <a href="/" class="user__thumb">
                <img src="img/profiles/gamora/gamora-profile.jpg" alt=""/>
              </a>

              <span>
              curtido por <a href="/">Gamora Zen</a> e outras <a href="/">2 pessoas</a>
            </span>
            </div>
          </div>
        </article> */}
      </section>
    </div>
  )
}