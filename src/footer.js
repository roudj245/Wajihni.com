import './footer.css' 
import icon1 from './icon5.png'
import facebook1 from './facebook1.png'
import instagram2 from './instagram1.png'
import telegram2 from './telegram1.png'
import pic3 from './circle3.png'


function Footer(){
    return(
    <div className='Footer'>
        <div className='left1'>
            <div className = "logo4">
                        
            <img src ={icon1} alt ="" className='icon1'></img>
            <p>وجهني</p>
            </div>
            <p className="style">فرصتك للتعرف على تخصصك الجامعي</p>
            <div className='icons2'>
               <a href ="https://www.facebook.com/profile.php?id=61578612024749&mibextid=wwXIfr&rdid=sgY1pjuTOblSUBnS&share_url=https " target="_blank" rel="noopener noreferrer"> <img src= {facebook1} className='facebook1'></img>
            </a>
            <a href ="https://www.instagram.com/wadjihni.cherchell/" target="_blank" rel="noopener noreferrer"> <img src= {instagram2} className='instagram2'></img> </a>
               <a href ='https://t.me/wadjihni' target="_blank" rel="noopener noreferrer">  <img src= {telegram2} className='telegram2'></img> </a>



            </div>

            </div> 
        <div className='middle1'>
            <p className="style2">معلومات</p>
            <div className='features'>
            <a href='#about' className="style">من نحن</a>
            <a href='#slider1' className="style">التخصصات</a>
            <a href ='#slider2' className="style">الطبعات السابقة</a>
            <a href='#organisers' className="style">المؤطرون</a>
            </div>
        

        </div>
        <div className='middle2'>
        <p className="style2">انضم الينا</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY5_C0ghzP49GfmHn7cLHXh5MxvQqa3wdcXJEKe4Zc-G__nA/viewform?pli=1"  target="_blank"
                  rel="noopener noreferrer">
        <button className='btn3'>
        <img src = {pic3} alt=""></img>
        <p>انضم الينا</p>
        </button>
        </a>
        </div>

        <div className='right1'>
            <p className="style2">تواصل معنا</p>
            <div className='fin'>
                <p className="style">0553314664</p>
                <p className="style">0553667954</p>
                <p className="style">wadjihni.event@gmail.com</p>

            </div>


        </div>
        



        </div>


    );
}
export default Footer