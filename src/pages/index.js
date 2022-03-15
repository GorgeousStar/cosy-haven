import React from "react";
import room from "../images/room.png";
import mason from "../images/mason.png";
import "../App.css";
import { Container, Row, Col } from "react-grid-system";
const Home = () => {
  return (
    <div>
      <section className="home__section-top">
        <Container className="home__section-top-container">
          <Row>
            <Col
              xs={6}
              style={{
                justifyContent: "center",
                color: "#fff",
                padding: "50px",
              }}
            >
              <h4 className="home__text__header">
                Quality solution for home repairs, maintenance and upgrade
              </h4>
              <br />
              <p className="home__text__body">
                Cosy Haven provides rapid response and planned maintenance
                services to homes, offices and commercial facilities quality
                repair and maintenance.
              </p>
              <div
                style={{
                  // padding: '150px 0px',
                  backgroud:
                    "linear-gradient(180deg, #F6AB0E 0%, #F6AB0E 50%, #C84016 100%)",
                }}
              >
                {/* <a href="#contact" className='btn btn-primary' style={{width: '388px',
                height:'82px',
                left: '112px',
                top: '712px',}}>I want an easy life</a> */}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "188px",
                    height: "52px",
                    left: "12px",
                    top: "712px",
                    marginTop: "20px",
                    alignSelf: "center",
                  }}
                >
                  <a
                    href="#contact"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontFamily: "Roboto",
                      fontSize: "18px",
                    }}
                  >
                    Book us
                  </a>{" "}
                </button>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col
                      style={{
                        color: "#063863",
                        marginTop: "15px",
                      }}
                    >
                      <h4>50</h4>
                      <hr
                        style={{
                          borderBottom: "2px solid #063863",
                          width: "47px",
                        }}
                      />
                      <br />
                      <p>Homes</p>
                    </Col>
                    <Col
                      style={{
                        color: "#063863",
                        marginTop: "15px",
                      }}
                    >
                      <h4>100</h4>
                      <hr
                        style={{
                          borderBottom: "2px solid #063863",
                          width: "47px",
                        }}
                      />
                      <br />
                      <p>Professionals</p>
                    </Col>
                    <Col
                      style={{
                        color: "#063863",
                        marginTop: "15px",
                      }}
                    >
                      <h4>1000</h4>
                      <hr
                        style={{
                          borderBottom: "2px solid #063863",
                          width: "47px",
                        }}
                      />
                      <br />
                      <p>Customers</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col xs={4} >
              <img src={room} alt="" style={{
                height: '360px',
                marginLeft: '20px'
              }} />
            </Col>
            <Col xs={2}>
              <div className="header__socials">
                <a
                  href="tel:+2347-677-754-666"
                  target="_blank"
                  rel="noreferrer"
                >
                  +2347677754666
                </a>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <a
                  href="mailto:contact@cosyhavven.com"
                  target="_blank"
                  rel="noreferrer"
                >
                 contact@cosyhavven.com
                </a>
          
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section > className='our__goal__section'  */}
      <section style={{
           padding: '64px',
           position: 'relative',
           width: '100%',
          width: '1440px',
          height: '508px',
          left: '50px',
          marginRight: '50px',
          top: '50px',
          justifyContent: 'space-between',
          marginTop: '50px',
          background: '#063863',
      }}>
        <Container>
          <Row>
            <Col>
                <img src={mason} alt='image'/>
            </Col>
            <Col style={{
              justifyContent: 'center',
              color: '#fff',
            }}> 
            <h4 className='our__goal__text__header' style={{
              fontSize: '30px',
              marginTop : '50px'
            }}>Our goal</h4>
            <br/>
            <p className='our__goal__text__body' style={{
              fontSize: '25px',
            }}>
            Our goal is to leave at the end of the day and to have our customers glad
             that they chose us for their home/office repairs and improvement needs
               </p>
            </Col>
          </Row>
        </Container>
    </section>
    <section className="about__section-mission">
        <div class="about__section-mission-container">
          <div class="row">
            <div className="mission__text__column">
              <h5>Subscribe to get the latest news about us</h5>
              <p>
              Enter your email to get news about our latest updates and offers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
