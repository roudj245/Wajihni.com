
import './CardSlider.css';
import picture from './medical.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import pic1 from './telecharger2.png'
import { useRef, useEffect, useState } from 'react';
import laptop from './laptop.png'
import intelligence from './ai.png.png'
import poly from './polytechnique.png'
import conception from './conception.png'
import tech from './tech.png'
import travaux from './travaux.png'
import tech2 from './tech2.png'
import cyber from './cyber.png'
import math from './math.png'
import drone from './drone.png'
import  nano   from './nano.png'
import  gestion  from './gestion.png'
import  management  from './management.png'
import  commerce   from './commerce.png'
import eng from './eng.png'
import statistique from './statistique.png'
import agro from './ouvrier.png'
import veterinaire from './veterinaire.png'
import histoire from './lhistoire.png'
import dentaire from './dentaire.png'
import arts from './arts.png'
import alimentaire from './alimentaire.png'
import presse from './presse.png'
import musique from './musique.png'
import medecine from './medecine.png'
import para from './para.png'
import medicament from './medicament.png'
import bio from './bio.png'
import chimie from './chimie.png'
import renouv from './renouv.png'
import ingenieur from './ingenieur.png'
import electro from './electro.png'
import petro from './petro.png'
import france from './france.png'
import geologie from './geologie.png'
import politic from './politic.png'
import droit from './droit.png'
import sport from './sport.png'


import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  { img: poly, titre: 'المدرسة الوطنية المتعددة التقنيات',txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: travaux, titre: 'المدرسة الوطنية العليا للأشغال العمومية' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: tech, titre: 'المدرسة الوطنية العليا للتقنيات المتقدمة' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: conception, titre: 'المدرسة العليا للهندسة المعمارية والتعمير' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: tech2, titre: 'المدرسة العليا للعلوم التطبيقية والتكنولوجيا' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: laptop, titre : 'المدرسة الوطنية العليا للإعلام الآلي' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: intelligence, titre: 'المدرسة الوطنية العليا للذكاء الاصطناعي' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: cyber, titre: 'المدرسة الوطنية العليا للأمن السيبراني' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: math, titre: 'المدرسة الوطنية العليا للرياضيات' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: laptop, titre: 'المدرسة الوطنية العليا للإعلام الآلي  سيدي بلعباس' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: drone, titre: 'المدرسة العليا للنظم الذاتية سيدي عبد الله' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: nano, titre: 'المدرسة العليا لتقنيات النانو سيدي عبد الله' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: commerce, titre: 'المدرسة العليا للدراسات التجارية' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: gestion, titre: 'المدرسة الوطنية العليا للتسيير' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: management, titre: 'المدرسة العليا للمانجمنت' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: statistique, titre: 'المدرسة الوطنية العليا للإحصاء والاقتصاد التطبيقي' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: math, titre: 'المدرسة العليا للأساتذة رياضيات' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: eng, titre: 'المدرسة العليا للأساتذة اللغة الإنجليزية' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: histoire, titre: 'المدرسة العليا للأساتذة التاريخ والجغرافيا' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: veterinaire, titre: 'المدرسة الوطنية العليا للبيطرة' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: agro, titre: 'المدرسة الوطنية العليا للفلاحة' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: arts, titre: 'المدرسة العليا للفنون الجميلة' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: musique, titre: 'المعهد الوطني العالي للموسيقى' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: presse, titre: 'المدرسة الوطنية العليا للصحافة و علوم الإعلام' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: alimentaire, titre: 'المدرسة العليا لعلوم التغذية والصناعات الغذائية' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: medecine, titre: 'كلية الطب' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: dentaire, titre: 'كلية طب الأسنان' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: medicament, titre: 'كلية الصيدلة' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: para, titre: 'المعهد الوطني للتكوين العالي شبه الطبي' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: ingenieur, titre: 'العلوم والتكنولوجيا هندسة مدنية' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: renouv, titre: 'العلوم والتكنولوجيا الطاقات المتجددة' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: electro, titre: 'العلوم والتكنولوجيا إلكترونيك' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: chimie, titre: 'العلوم والتكنولوجيا هندسة الطرائق' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: bio, titre: ' كلية علوم الطبيعة والحياة' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: sport, titre: 'معهد التربية البدنية والرياضية' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: conception, titre: 'كلية الهندسة المعمارية' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: laptop, titre: 'كلية الرياضيات والإعلام الآلي' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: gestion, titre: 'كلية العلوم الاقتصادية' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: droit, titre: 'كلية الحقوق' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: politic, titre: 'كلية العلوم السياسية' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: geologie, titre: 'كلية علوم الأرض والكون' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: france, titre: 'كلية اللغة الفرنسية ' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: electro, titre: 'المعهد الوطني للإلكترونيك والكهرباء - بومرداس' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},
  { img: petro, titre: 'المعهد الوطني للمحروقات - بومرداس' ,txt :'اكتشف مميزات هذا التخصص، مجالات العمل المتاحة، والمسارات الدراسية التي يمكنك اتباعها لتحقيق طموحاتك.'},

];

function CardSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <div className="slider-wrapper2">
      {/* Flèche gauche */}
      <div ref={nextRef} className="custom-prev2 arrow2"></div>

      <div className="card-slider-container2">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Attendre que le DOM soit prêt
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy(); // reset
              swiper.navigation.init();    // re-init
              swiper.navigation.update();  // mise à jour
              setSwiperReady(true);       // indicateur OK
            });
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card2">
                <img src={item.img} alt={item.titre} className="profile-img" />
                <h3 className="titre">{item.titre}</h3>
                <p className="txt">{item.txt}</p>
                <a
                  href="https://eddirasa.com/%D9%85%D8%B9%D8%AF%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A8%D9%88%D9%84-%D9%84%D8%AD%D8%A7%D9%85%D9%84%D9%8A-%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D8%A7-2024/#google_vignette"
                  target="_blank"
                  rel="noopener noreferrer" download
                >
                  <button className="btn2">
                    <p>معدلات القبول</p>
                  </button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Flèche droite */}
      <div ref={prevRef} className="custom-next2 arrow2"></div>
    </div>
  );
}

export default CardSlider;

