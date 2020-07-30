import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default function Home(){
    return (
 <section className="section5">
    <div className="container">
      <div className="section-intro text-center">
        <p className="section-intro__title"></p>
        <h2 className="primary-text">Available food</h2>
      </div>

      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <div className="scheduleTab">
            <ul className="nav nav-tabs">
              <li className="nav-item text-center">
                <a data-toggle="tab" href="#day1">
                  <h4>Tunis</h4>
                  <p></p>
                </a>
              </li>
              <li className="nav-item text-center">
                <a className="active" data-toggle="tab" href="#day2">
                  <h4>Manouba</h4>
                  <p></p>
                </a>
              </li>
              <li className="nav-item text-center">
                <a data-toggle="tab" href="#day3">
                  <h4>bizerte</h4>
                  <p></p>
                </a>
              </li>
              <li className="nav-item text-center">
                <a data-toggle="tab" href="#day4">
                  <h4>Nabeul</h4>
                  <p></p>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="day1" className="tab-pane">

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt="" />
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <p className="schedule-date">9.00 AM - 10.30 AM</p>
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt=""/>
                        <h3>balaf</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div id="day2" className="tab-pane active">

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt=""/>
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis2.jpg" alt=""/>
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis.jpg" alt=""/>
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div id="day3" className="tab-pane">
                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt=""/>
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt="" />
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt=""/>
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="day4" className="tab-pane">
                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt="" />
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt="" />
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#" >
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt="" />
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="schedule-card">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <div className="card-identity">
                        <img src="img/testimonial/RestauTunis1.jpg" alt="" />
                        <h3>Hatab</h3>
                        <p>Rue Ghana</p>
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <div className="schedule-content">
                        <a className="schedule-title" href="#">
                          <h3>Left overs :</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </section> )}
