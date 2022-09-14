import React from 'react'

function Banner2({title}) {
  return (
<div>
  {/* Breadcrumb Section Begin */}
  <section className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__text">
            <h4>{title}</h4>
            <div className="breadcrumb__links">
              <a href="/index">Home</a>
              <span>{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
</div>

  )
}

export default Banner2
