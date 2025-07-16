import './button.css';
import temps from './temps.png';
import check from './check.png';
import medical from './medical-symbol.png';

function Button() {
  return (
    <div className="Buttons">
      <div className="button">
        <img src={temps} alt="icon" className="icon3" />
        <div className="text-button">
          <p className="button-title">4 طبعات سابقة</p>
          <p className="desc">فعالية موجهة بخبرة وتجربة</p>
        </div>
      </div>

      <div className="button">
        <img src={check} alt="icon" className="icon3" />
        <div className="text-button">
          <p className="button-title">أكثر من 50 تخصص</p>
          <p className="desc">استفسر، تعلم، واختر بثقة تخصصك الجامعي</p>
        </div>
      </div>

      <div className="button">
        <img src={medical} alt="icon" className="icon3" />
        <div className="text-button">
          <p className="button-title">لقاء مع نخبة الطلبة</p>
          <p className="desc">اسأل واطّلع على تجارب من سبقوك</p>
        </div>
      </div>
    </div>
  );
}

export default Button;


