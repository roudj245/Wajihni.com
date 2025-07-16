import './slider2.css';
import picture from './last.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import picture2 from './last2.jpg';
import picture3 from './last3.jpg';
import picture4 from './last4.jpg';
import picture5 from './last5.jpg';
import picture6 from './last6.jpg';
import picture7 from './last7.jpg';
import picture9 from './last9.jpg';
import picture10 from './last10.jpg';
import picture11 from './last12.jpg';
import picture13 from './last13.jpg';
import picture14 from './last14.jpg';
import picture12 from './last15.jpg';
import picture15 from './last16.jpg';
import picture16 from './last17.jpg';
import picture17 from './last18.jpg';
import picture18 from './last19.jpg';
import picture19 from './last20.jpg';
import picture20 from './last21.jpg';
import picture21 from './last22.jpg';


import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  { img: picture },
  { img: picture2 },
  { img: picture3 },
  { img: picture4 },
  { img: picture5 },
  { img: picture6 },
  { img: picture7 },
  { img: picture12},
  { img: picture9},
  { img: picture10},
  { img: picture11},
  { img: picture13},
  { img: picture14},
  { img: picture15},
  { img: picture16},
  { img: picture17},
  { img: picture18},
  { img: picture19},
  { img: picture20},
  { img: picture21},
  
];

function CardSlider2() {
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  return (
    <div className="slider-wrapper">
      <div className="custom-prev arrow"></div>

      <div className="card-slider-container">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={40}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {groupedData.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="card-column">
                {group.map((item, idx) => (
                  <div className="image-card" key={idx}>
                    <img src={item.img} alt={`slide-${index}-${idx}`} />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-next arrow"></div>
    </div>
  );
}

export default CardSlider2;

