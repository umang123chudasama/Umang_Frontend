import React from 'react'

function Modal() {
  return (
    <div>
         <div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-3 bg-secondary d-none d-lg-block">
        <a href className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
          <h1 className="m-0 display-3 text-primary">Klean</h1>
        </a>
      </div>
      <div className="col-lg-9">
        <div className="row bg-dark d-none d-lg-flex">
          <div className="col-lg-7 text-left text-white">
            <div className="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-3">
              <i className="fa fa-envelope text-primary mr-2" />
              <small>info@example.com</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-2 px-2">
              <i className="fa fa-phone-alt text-primary mr-2" />
              <small>+012 345 6789</small>
            </div>
          </div>
          <div className="col-lg-5 text-right">
            <div className="d-inline-flex align-items-center pr-2">
              <a className="text-primary p-2" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-primary p-2" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="text-primary p-2" href>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-primary p-2" href>
                <i className="fab fa-instagram" />
              </a>
              <a className="text-primary p-2" href>
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
          <a href className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-primary">Klean</h1>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto py-0">
              <a href="index.html" className="nav-item nav-link active">Home</a>
              <a href="about.html" className="nav-item nav-link">About</a>
              <a href="service.html" className="nav-item nav-link">Service</a>
              <a href="project.html" className="nav-item nav-link">Project</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" className="dropdown-item">Latest Blog</a>
                  <a href="single.html" className="dropdown-item">Blog Detail</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href className="btn btn-primary mr-3 d-none d-lg-block">Get A Quote</a>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#header-carousel" data-slide-to={0} className="active" />
        <li data-target="#header-carousel" data-slide-to={1} />
        <li data-target="#header-carousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex align-items-center justify-content-center">
            <div className="p-5" style={{width: '100%', maxWidth: 900}}>
              <h5 className="text-primary text-uppercase mb-md-3">Cleaning Services</h5>
              <h1 className="display-3 text-white mb-md-4">Best Quality Solution In Cleaning</h1>
              <a href className="btn btn-primary">Get A Quote</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex align-items-center justify-content-center">
            <div className="p-5" style={{width: '100%', maxWidth: 900}}>
              <h5 className="text-primary text-uppercase mb-md-3">Cleaning Services</h5>
              <h1 className="display-3 text-white mb-md-4">Highly Professional Cleaning Services</h1>
              <a href className="btn btn-primary">Get A Quote</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="img-fluid" src="img/carousel-3.jpg" alt="Image" />
          <div className="carousel-caption d-flex align-items-center justify-content-center">
            <div className="p-5" style={{width: '100%', maxWidth: 900}}>
              <h5 className="text-primary text-uppercase mb-md-3">Cleaning Services</h5>
              <h1 className="display-3 text-white mb-md-4">Experienced &amp; Expert Cleaners</h1>
              <a href className="btn btn-primary">Get A Quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Contact Info Start */}
  <div className="container-fluid pb-5 contact-info">
    <div className="row">
      <div className="col-lg-4 p-0">
        <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
          <i className="fa fa-3x fa-map-marker-alt text-secondary mr-4" />
          <div className>
            <h5 className="mb-2">Our Office</h5>
            <p className="m-0">123 Street, New York, USA</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 p-0">
        <div className="contact-info-item d-flex align-items-center justify-content-center bg-secondary text-white py-4 py-lg-0">
          <i className="fa fa-3x fa-envelope-open text-primary mr-4" />
          <div className>
            <h5 className="mb-2">Email Us</h5>
            <p className="m-0">info@example.com</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 p-0">
        <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
          <i className="fa fa-3x fa-phone-alt text-secondary mr-4" />
          <div className>
            <h5 className="mb-2">Call Us</h5>
            <p className="m-0">+012 345 6789</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal