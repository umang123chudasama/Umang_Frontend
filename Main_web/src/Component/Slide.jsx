import React from 'react'

function Slide() {
  return (
<div className='container'>
  <section className="homepage-slider" id="home-slider">
    <div className="flexslider">
      <ul className="slides">
        <li>
          <img src="%PUBLIC_URL%/themes/images/carousel/banner-1.jpg" alt />
        </li>
        <li>
          <img src="%PUBLIC_URL%/themes/images/carousel/banner-2.jpg" alt />
          <div className="intro">
            <h1>Mid season sale</h1>
            <p><span>Up to 50% Off</span></p>
            <p><span>On selected items online and in stores</span></p>
          </div>
        </li>
      </ul>
    </div>			
  </section>
</div>

  )
}

export default Slide