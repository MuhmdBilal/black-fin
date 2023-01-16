import React from 'react'
import Slider from "react-slick";
import image1 from "../../Assets/cadillac.webp";
import image2 from "../../Assets/chevrolet.webp"
import image3 from "../../Assets/ford.webp"
import image4 from "../../Assets/lincoln.webp"
import image5 from "../../Assets/mercede.webp"

function Slickimagr() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
      speed: 10000,
      autoplaySpeed: 2000,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>
            <div className='col-12'>
            
        <Slider {...settings}>
          <div>
            <img src={image1} />
          </div>
          <div>
          <img src={image2} />
          </div>
          <div>
          <img src={image3} />
          </div>
          <div>
          <img src={image4} />
          </div>
          <div>
          <img src={image5} />
          </div>
          
        </Slider>
            </div>
        </div>
       
      </div>
  )
}

export default Slickimagr