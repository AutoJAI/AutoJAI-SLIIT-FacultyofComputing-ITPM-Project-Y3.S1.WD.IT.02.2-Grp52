import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import MI22 from "../../assets/images/MI22.jpg";
import MI20 from "../../assets/images/MI20.jpg";
import MI21 from "../../assets/images/MI21.jpg";
import car4 from "../../assets/images/car4.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <header id="home"></header>

        <div className="main-top py-1">
          <div className="container">
            <div className="nav-content">
              <h1>
                <a id="logo" className="logo" href="/">
                  <img
                    src={Logo}
                    alt=""
                    style={{ marginLeft: -100  }}
                  />
                 JAI Repair & Services
                </a>
              </h1>

              <div className="nav_web-dealingsls">
                <nav>
                  <label htmlFor="drop" className="toggle">
                    Menu
                  </label>
                  <input type="checkbox" id="drop" />
                  <ul className="menu">
                    <li>
                      <a href="/" className="active-page">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="booking.html">Bookings</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="/login">Login</a>
                    </li>

                    <li>
                      <a href="/register">Register</a>
                    </li>
                    <li>
                      <Link
                        to="https://w3layouts.com/"
                        target="_blank"
                        className="dwn-button ml-lg-5"
                      ></Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="baneer-w3ls">
          <div className="row no-gutters">
            <div className="col-xl-5 col-lg-6">
              <div className="banner-left-w3">
                <div className="container">
                  <div className="banner-info_agile_w3ls">
                    <h4>Discover all our specials</h4>
                    <h3 className="text-da mb-4">
                      <span>JAI Auto Mart</span> Repair & Services
                    </h3>
                    <p className="text-para">
                      JAI Auto Mart offers a range of services and solutions for all your premium automotive need with the technical expertise, state of the art equipment and diagnostic tools collectively with the care and trust of JAI to give you and your loved automobile the best care.
                    </p>
                    <a href="/" className="button-w3ls active mt-5">
                      Read More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="/login" className="button-w3ls speed mt-5 ml-2">
                      Book Now
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 callbacks_container">
              <div className="csslider infinity" id="slider1">
                <input
                  type="radio"
                  name="slides"
                  defaultChecked="checked"
                  id="slides_1"
                />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />
                <ul className="banner_slide_bg">
                  <li>
                    <div className="banner-top1" />
                  </li>
                  <li>
                    <div className="banner-top2" />
                  </li>
                  <li>
                    <div className="banner-top3" />
                  </li>
                </ul>
                <div className="arrows">
                  <label htmlFor="slides_1" />
                  <label htmlFor="slides_2" />
                  <label htmlFor="slides_3" />
                </div>
                <div className="navigation">
                  <div>
                    <label htmlFor="slides_1" />
                    <label htmlFor="slides_2" />
                    <label htmlFor="slides_3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix" />

        <div className="about-bottom">
          <div className="row no-gutters">
            <div className="col-lg-5 col-md-6 about"></div>
            <div className="col-lg-7 col-md-6 about-right-w3 text-right py-md-5">
              <div className="right-space py-xl-5 py-lg-3">
                <div className="title-section mb-4">
                  <p className="w3ls-title-sub">About Us</p>
                  <h3 className="w3ls-title">
                    Welcome to <span>JAI Auto Mart</span>
                  </h3>
                </div>
                <p className="about-text">
                With years of technical expertise  and qualified technicians to handle your vehicle and original vehicle diagnostic scanners and improved processes such as online booking, online payment, live feedback and pick up and drop off of the vehicle within Colombo. You are completely at peace of mind.
                We offer complete repair solutions ranging from Periodic maintenance, Mechanical Repairs, Electrical, A/C and wheel alignment and accident  repairs and even Vehicle Detailing, Nano Coating and washing making us a one stop shop.
                The Dedicated centre for Detailing and High End Vehicles to give the best of the best to the Super Luxury Cars and Sport Cars to feel special and cared for. With a dedicated qualified technicians to handle with caution and extra care and keep these beauties well and looking new.
                </p>
                <a href="/" className="button-w3ls mt-5">
                  Read More
                  <span className="fa fa-caret-right ml-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="blog_w3ls py-5">
          <div className="container pb-xl-5 pb-lg-3">
            <div className="title-section text-center mb-md-5 mb-4">
              <p className="w3ls-title-sub">JAI Auto Mart</p>
              <h3 className="w3ls-title">
                Our <span>Services</span>
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 med-blog">
                  
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="/">Multi-Point Vehicle Inspection</a>
                    </h5>
                    <p className="mt-3">
                    220 points, components & diagnostic report. Includes accident free certification. The most comprehensive auto service offering bundled up with mechanical and electrical inspection as well as superior interior and exterior detailing.
                    </p>
                  </div>

                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src={MI22}
                        alt="Cardimage cap"
                      />
                    </a>
                    <a href="/login" className="btn button-w3ls mt-4 mb-3">
                      View More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src={MI20}
                        alt="Cardimage cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="menu.html">
                        Accident Free Certification
                      </a>
                    </h5>
                    <p className="mt-3">
                    Verify and buy with confidence from vehicle dealers who display. A value added service package that is offered to meet all your hybrid demand, whatever it maybe.
                    </p>
                    <a href="/login" className="button-w3ls active mt-4 mb-3">
                      View More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                <div className="card border-0 med-blog">
                  
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="menu.html">
                        Mobile Vehicle Inspection
                      </a>
                    </h5>
                    <p className="mt-3">
                    Talk to us about your fleet requirements.  With years of technical expertise  and qualified technicians to handle your vehicle and original vehicle diagnostic scanners and improved processes such as online booking, online payment, live feedback and pick up and drop off of the vehicle within Colombo.
                    </p>
                    
                  </div>

                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src={MI21}
                        alt="Cardimage cap"
                      />
                    </a>
                    <a href="/login" className="button-w3ls mt-4 mb-3">
                      View More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="offer pt-lg-3">
          <div className="row no-gutters">
            <div className="col-md-6 p-0">
              <div className="blog-sec-w3">
                <div className="text-blog-w3 text-center p-2">
                  <h4 className="text-wh mb-3">
                    <a href="menu.html">OUR VISION</a>
                  </h4>
                  <h5 className="text-li">
                  To become the obvious choice!
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="blog-sec-w3 blog-sec-w3-2">
                <div className="text-blog-w3 text-center p-2">
                  <h4 className="text-wh mb-3">
                    <a href="menu.html">OUR MISSION</a>
                  </h4>
                  <h5 className="text-li">
                  To achieve unparalleled recognition as the premium auto care service provider by objectifying trust, convenience and uniqueness; guiding our work force as a team striving “to become the obvious choice”.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <br/><br/>

        <section className="wthree-slider" id="masthead"></section>

        <section className="subscribe-main py-5">
          <div className="container py-xl-5 py-3">
            <div className="row pb-lg-4 pt-lg-5">
              <div className="col-lg-6 col-md-9 text-center">
                <p className="mb-xl-5 mb-4">Schedule Your Appointment Now</p>
                <h3 className="w3ls-title mb-2">Check it, don’t regret it!</h3>
                <br/>
                <h1 className="mb-xl-5 mb-4">
                  Call: 0702 20 75 20
                </h1>
                <a href="/login" className="button-w3ls speed mt-5 ml-2">
                      Appoinment
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                </a>

              </div>
              <div className="col-lg-6 col-md-3"></div>
            </div>
            <img src={car4} alt="" className="img-fluid sub-img" />
          </div>
        </section>

        <footer className="py-5">
          <div className="container py-xl-4">
            <div className="row footer-top">
              <div className="col-lg-4 footer-grid_section_1its footer-text">
                {/* logo */}
                <h2>
                  <a className="logo text-wh" href="index.html">
                    <img src={Logo} alt="" className="img-fluid" />
                    <br />
                    <span></span> JAI Auto Mart
                  </a>
                </h2>
              </div>
              <div className="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
                <div className="footer-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="footer-text mt-4">
                  <p>Address : Negombo-Kuliyapitiya Main Rd, Dankotuwa</p>
                  <p className="my-2">Phone : +94- 702 20 75 20</p>
                  <p>
                    Email :{" "}
                    <a href="mailto:info@example.com">
                     jaiautomart@gmail.com
                    </a>
                  </p>
                </div>
                <div className="footer-title">
                  <h3>Open Hours</h3>
                </div>
                <div className="footer-text mt-4">
                  <p>Mon-Fri: 8.30am to 4.30pm</p>
                  <p>Sat: 9.00am to 11.30am</p>
                </div>

              </div>
              <div className="col-lg-4 footer-grid_section_1its">
                <div className="footer-title">
                  <h3>Request Info</h3>
                </div>
                <div className="info-form-right mt-4 p-0">
                  <form action="/" method="post">
                    <div className="row">
                      <div className="col-lg-6 form-group mb-2 pr-lg-1">
                        <input
                          type="text"
                          className="form-control"
                          name="Name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 form-group mb-2 pl-lg-1">
                        <input
                          type="text"
                          className="form-control"
                          name="Phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="email"
                        className="form-control"
                        name="Email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group mb-2">
                      <textarea
                        name="Comment"
                        className="form-control"
                        placeholder="Comment"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn submit-contact ml-auto"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="cpy-right text-center py-3">
          <p>© 2022 JAI AUTO MART - DANKOTUWA - All rights reserved</p>
        </div>
        <a href="#home" className="move-top text-center">
          <span className="fa fa-level-up" aria-hidden="true" />
        </a>
      
      </div>
    );
  }
}

export default Home;
