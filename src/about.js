import './about.css'
import logo from './logo.png'
import circle from './circle1.png'

function About(){
    return(
  <div className='About'>
    <img src = {logo} alt = "photo jam3ia" className='picture'>
    
    </img>
    <div className='text5'>
        <p className='title2'>من نحن ؟</p>
        <p className='title3'>جمعية العلماء المسلمين</p>
        <p className='title4'>نحن هيئة علمية ثقافية تهدف إلى نشر العلم والمعرفة، وتعزيز القيم الإسلامية السامية في المجتمع <br></br>. نسعى لبناء جيل واعٍ ومثقف من خلال المحاضرات، والندوات،  والمبادرات التعليمية والتربوية. نؤمن بأن العلم هو السبيل إلى نهضة الأمة</p>
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY5_C0ghzP49GfmHn7cLHXh5MxvQqa3wdcXJEKe4Zc-G__nA/viewform?pli=1"  target="_blank"
                  rel="noopener noreferrer">
        <button className='btn2'>
           
            <img src ={circle} alt=""></img>
            <p>انضم الينا</p>
           
        </button>
        </a>


    </div>
  </div>

    );
}
export default About