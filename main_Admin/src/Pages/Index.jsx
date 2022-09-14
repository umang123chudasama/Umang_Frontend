import React from 'react'

function Index() {
  return (
    <div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Welcome </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-6">
          <div className="alert alert-info back-widget-set text-center">
            <i className="fa fa-history fa-5x" />
            <h3>500+&nbsp; <i className="fa fa-dollar" /></h3>
            Amount Pending For Approval
          </div>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <div className="alert alert-success back-widget-set text-center">
            <i className="fa fa-bars fa-5x" />
            <h3>300+ Tasks</h3>
            Pending For New Events
          </div>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <div className="alert alert-warning back-widget-set text-center">
            <i className="fa fa-recycle fa-5x" />
            <h3>56+ Calls</h3>
            To Be Made For New Orders
          </div>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <div className="alert alert-danger back-widget-set text-center">
            <i className="fa fa-briefcase fa-5x" />
            <h3>30+ Issues </h3>
            That Should Be Resolved Now
          </div>
        </div>
      </div>              
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12">
          <div id="carousel-example" className="carousel slide slide-bdr" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item active">
                <img src="assets/img/1.jpg" alt />
              </div>
              <div className="item">
                <img src="assets/img/2.jpg" alt />
              </div>
              <div className="item">
                <img src="assets/img/3.jpg" alt />
              </div>
            </div>
            {/*INDICATORS*/}
            <ol className="carousel-indicators">
              <li data-target="#carousel-example" data-slide-to={0} className="active" />
              <li data-target="#carousel-example" data-slide-to={1} />
              <li data-target="#carousel-example" data-slide-to={2} />
            </ol>
            {/*PREVIUS-NEXT BUTTONS*/}
            <a className="left carousel-control" href="#carousel-example" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" />
            </a>
            <a className="right carousel-control" href="#carousel-example" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" />
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="panel panel-primary ">
            <div className="panel-heading">
              Recent Chat History
            </div>
            <div className="panel-body chat-widget-main">
              <div className="chat-widget-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor.
              </div>
              <div className="chat-widget-name-left">
                <img className="media-object img-circle img-left-chat" src="assets/img/user2.png" />
                <h4>  Amanna Seiar</h4>
                <h5>Time 2:00 pm at 25th july</h5>
              </div>
              <hr />
              <div className="chat-widget-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet.
              </div>
              <div className="chat-widget-name-right">
                <img className="media-object img-circle img-right-chat" src="assets/img/user2.png" />
                <h4>  Amanna Seiar</h4>
                <h5>Time 2:00 pm at 25th july</h5>
              </div>
              <hr />
              <div className="chat-widget-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet.
              </div>
              <div className="chat-widget-name-left">
                <img className="media-object img-circle img-left-chat" src="assets/img/user2.png" />
                <h4>  Amanna Seiar</h4>
                <h5>Time 2:00 pm at 25th july</h5>
              </div>
              <hr />
              <div className="chat-widget-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet.
              </div>
              <div className="chat-widget-name-right">
                <img className="media-object img-circle img-right-chat" src="assets/img/user2.png" />
                <h4>  Amanna Seiar</h4>
                <h5>Time 2:00 pm at 25th july</h5>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Index