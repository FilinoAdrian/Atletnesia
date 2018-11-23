import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AthleteCard from './AthleteCard';

import './AthleteCard.css'

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

class AthleteCardSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
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

    const atletData = [
      {
        name: 'Rio Mario',
        age: 15,
        cabang: 'Bulu Tangkis',
        image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
        quote: '"Menjadi seorang atlet merupakan impianku sejak kecil. Beruntung menemukan platform yang bias menghubungkan ke klub favorit dengan biaya yang murah"'
      },
      {
        name: 'Rio Mario',
        age: 15,
        cabang: 'Bulu Tangkis',
        image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
        quote: '"Menjadi seorang atlet merupakan impianku sejak kecil. Beruntung menemukan platform yang bias menghubungkan ke klub favorit dengan biaya yang murah"'
      },
      {
        name: 'Rio Mario',
        age: 15,
        cabang: 'Bulu Tangkis',
        image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
        quote: '"Menjadi seorang atlet merupakan impianku sejak kecil. Beruntung menemukan platform yang bias menghubungkan ke klub favorit dengan biaya yang murah"'
      },
      {
        name: 'Rio Mario',
        age: 15,
        cabang: 'Bulu Tangkis',
        image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
        quote: '"Menjadi seorang atlet merupakan impianku sejak kecil. Beruntung menemukan platform yang bias menghubungkan ke klub favorit dengan biaya yang murah"'
      },
    ];

    return(
      <div className="cardlist-wrapper mt-4">
        <Container>
          <div className="slider-title">Apa Kata Mereka</div>
            <Container>
              <Slider {...settings} >
                {atletData.map((item, key) => {
                  return(
                    <div key={key}>
                      <AthleteCard item={item} />
                    </div>
                  )
                })
                }
              </Slider>
            </Container>
        </Container>
      </div>
    )
  }
}

export default AthleteCardSlider