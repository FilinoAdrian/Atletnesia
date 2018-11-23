import React, { Component } from 'react';
import { Container, Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

import './ProgramCardSlider.css'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: "block", background: "#707070"}}
      onClick={onClick} >
    </div>
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: "block", background: "#707070"}}
      onClick={onClick} >
    </div>
  )
}

class ProgramCardSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: []
    };
  }

  componentDidMount = () => {
    axios.get("https://944e39ac-ba21-43ca-8109-ee0e8e9d997d.mock.pstmn.io/clubdata")
      .then(response => {
          this.setState({ programs: response.data })
      })
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      ]
    }

    return(
      <div className="cardlist mt-4">
        <Container>
          <div className="slider-title">Beasiswa Yang Tersedia</div>
          <Container>
            <Slider {...settings} >
              {
                this.state.programs.slice(0,5).map((item, key) => 
                  <div key={key}>
                    <Link to={`/beasiswa/${item.id}`}>
                      <Card className="card-list-program">
                        <CardBody>
                        <CardTitle className="program-title">{item.position}</CardTitle>
                        <CardSubtitle className="program-subtitle">{item.quota} Kuota</CardSubtitle>
                        <hr />
                        <div className="profil-klub">
                          <img className="rounded-circle" src={item.image} alt="" />
                          <div>
                            <p className="profil-data">{item.company}</p>
                            <p className="profil-data">{item.location}</p>
                          </div>
                        </div>
                        </CardBody>          
                      </Card>
                    </Link>
                  </div>
                )
              }
              <div className="see-more-wrapper">
                <h4>Lihat Beasiswa Lainnya</h4>
                <Link to="/beasiswa"><button type="button" className="see-more-btn">Lihat Lebih Banyak</button></Link>
              </div>
            </Slider>
          </Container>
        </Container>
      </div>
    )
  }
}

export default ProgramCardSlider

// https://944e39ac-ba21-43ca-8109-ee0e8e9d997d.mock.pstmn.io