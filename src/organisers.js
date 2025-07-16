import './organisers.css'
import picture from './profile.JPG';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import facebook from './facebook.png'
import instagram from './instagram.png'
import telegram from './telegram.png'
import pic4 from './pic.jpg'
import pic5 from './pic2.JPG'
import pic6 from './pic3.jpg'
import malek from './malek.webp'




import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  { img: pic6, titre: 'دية حمزة عبد العزيز', text7:'طالب بالمدرسة الوطنية العليا للذكاء الاصطناعي عضو شاب نشط في جمعية العلماء المسلمين بشرشال و عضو منظم لوجهني في طبعته الرابعة' , link1:'https://www.facebook.com/hamzaabdelaziz.dia' , link2:'https://www.instagram.com/hit.the.air/'},
  { img: picture, titre: 'روج عبد الغني',  text7:'طالب بالمدرسة العليا للاعلام الالي عضو شاب نشط في جمعية العلماء المسلمين بشرشال و عضو منظم لوجهني في طبعته الرابعة', link1: 'https://www.facebook.com/abd.el.ghani.roudj/' , link2:'https://www.instagram.com/roudjabdelghani/'},
  { img: malek, titre: 'أومونة عبد المالك' ,  text7:'طالب بالمدرسة الوطنية العليا للأشغال العمومية عضو شاب نشط في جمعية العلماء المسلمين بشرشال و عضو منظم لوجهني في طبعته الرابعة', link1:'https://www.facebook.com/mal.k.oumouna', link2:'https://www.instagram.com/_malek.omn_'},
  { img: pic4, titre: 'مادي محمد',  text7:'طالب بالمدرسة الوطنية متعددة التقنيات عضو شاب نشط في جمعية العلماء المسلمين بشرشال و عضو منظم لوجهني في طبعته الرابعة', link1:'https://www.facebook.com/mohamed.maddi.131222' , link2:'https://www.instagram.com/mohm_a2d/' },
  { img: pic5, titre: 'بلميلود إياد',  text7:'طالب بالإعلام الآلي عضو شاب نشط في جمعية العلماء المسلمين بشرشال و عضو منظم لوجهني في طبعته الرابعة', link1:'https://www.facebook.com/iyed.chen' , link2:'https://www.instagram.com/iyedbelm/' },
  
];

function CardSlider() {
  return (
    <div className='Organisers'>
    <p className='o-title'>تواصل مع المؤطرين</p>
    <div className="slider-wrapper3">
      <div className="custom-prev3 arrow3"></div>

      <div className="card-slider-container3">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: '.custom-prev3',
            prevEl: '.custom-next3',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card3">
                <img src={item.img} alt={item.titre} className="profile-img3" />
                <h3 className='titre3'>{item.titre}</h3>
                <p className='txt3'>{item.text7}</p>
                <div  className='icons'>
                   <a href ={item.link1} target="_blank" rel="noopener noreferrer"> <img src = {facebook} alt= "icon" className='facebook'></img> </a>
                  <a href = {item.link2} target="_blank" rel="noopener noreferrer">  <img src = {instagram} alt= "icon" className='insatgram'></img>  </a>
                   <a href ='https://t.me/wadjihni' target="_blank" rel="noopener noreferrer"> <img src = {telegram} alt= "icon" className='telegram'></img>  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-next3 arrow3"></div>
    </div>
    </div>
  );
}
export default CardSlider