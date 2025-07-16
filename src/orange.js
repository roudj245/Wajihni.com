import './orange.css'
import pic2 from './circle3.png'


function Orange(){
    return(
     <div className = 'section4'>
       
        <div className='Orange'>
            <h1 className='w-title'>
                انضم إلينا في هذه التجربة الفريدة
            </h1>
            <p>
                      اكتشف عالم الجامعة من خلال فعاليتنا، حيث تنتظرك جلسات توجيهية، ورشات تفاعلية، وفرص للتعرّف<br></br> على التخصصات، النوادي، والخدمات التي سترافقك في رحلتك الأكاديمية.

             </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY5_C0ghzP49GfmHn7cLHXh5MxvQqa3wdcXJEKe4Zc-G__nA/viewform?pli=1"  target="_blank"
                  rel="noopener noreferrer">
            <button className='btn3'>
                <img src = {pic2} alt=""></img>
                <p>انضم الينا</p>
            

            </button>
            </a>

        </div>
         <p className='txt4'>حول الطبعات السابقة</p>
    </div>


    );
}
export default Orange