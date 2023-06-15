import React from 'react'
import { Link } from 'react-router-dom'
import "./home_style.css"

export default function Home() {

  return (
    <div>
      <div className="header">
        <div className="quote">
          <h1> " Etiquette means behaving yourself a little better than is absolutely essential."  </h1>
          <h1 className='author'> - Will Cuppy</h1>
          <a href="#first" className='down_home'></a>
          
        </div>

      </div>

      <div className="content_div" id='first'>
        <div className="image" id="first_image"></div>
        <div className="content">Find Someone Who Can Teach You Etiquette</div>
      </div>
      <div className="content_div" >
        <div className="content">Teach other people Etiquettes</div>
        <div className="image" id="second_image"></div>
      </div>

{/* 
      <div className="footer">
        <div className="name">
          <p className="name_of_website">CommunityCatalyst</p>
        </div>
        <div className="links">
          <Link target="_blank" className='link_item' to="https://www.instagram.com/">
              <img  src={require('../assets/instagram.png')}  className='link_img'/>
          </Link>
          <Link target="_blank" className='link_item' to="https://www.twitter.com/">
            <img  src={require('../assets/twitter.png')}  className='link_img'/>
          </Link>
          <Link target="_blank" className='link_item' to="https://www.facebook.com/">
            <img  src={require('../assets/facebook.png')}  className='link_img'/>
          </Link>
          <p className="creator">Made With ❤️ by Shubhankar</p>

        </div>
      </div> */}
    </div>
  )
}
