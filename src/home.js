import './home.css';
import circle from './circle1.png';
import photo1 from './photo.png';

function Home() {
  return (
    <div className="home">
      <div className="text">
        <span className="title">جمعية العلماء المسلمين</span>
        <p className="bold">
          ابدأ رحلتك الجامعية مع فعالية <br /> وجهني
        </p>
        <p className="normal">
          انضم إلينا لتكتشف التخصصات، الخدمات الجامعية، وفرص التطوع والانخراط.
        </p>
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY5_C0ghzP49GfmHn7cLHXh5MxvQqa3wdcXJEKe4Zc-G__nA/viewform?pli=1"  target="_blank"
                  rel="noopener noreferrer">
        <button className="btn2">
          <img src={circle} alt="icon" />
          <span>انضم الينا</span>
        </button>
        </a>
      </div>
      <img src={photo1} alt="decoration" className="photo1" />
    </div>
  );
}

export default Home;
