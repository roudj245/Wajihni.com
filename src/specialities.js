import './specialities.css';
import Logo from './logo2.png';
import circle3 from './circle1.png';

function Special() {
  return (
    <div className="Special">
         
      <div className="left">
        <h1>تعرف معنا على مختلف <br /> التخصصات</h1>
        <p>
          في فعالية "وجهني"، سنقدم لك نظرة شاملة على جميع التخصصات<br />
          المتاحة في الجامعة، مع شرح مبسّط لكل مسار، لمساعدتك<br />
          على اتخاذ القرار المناسب لمستقبلك الأكاديمي.
        </p>
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY5_C0ghzP49GfmHn7cLHXh5MxvQqa3wdcXJEKe4Zc-G__nA/viewform?pli=1"  target="_blank"
                  rel="noopener noreferrer">
        <button className="btn2">
          <span className="btn2-text">إنضم الينا</span>
          <img src={circle3} alt="icon" />
        </button>
        </a>

      </div>
      <img src={Logo} alt="Logo" className="LOGO" />

     
    </div>
  );
}

export default Special;
