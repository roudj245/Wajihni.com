import './navbar.css';
import icon1 from './icon1.png';
import circle from './circle1.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img src={icon1} alt="" className="icon1" />
          <p>وجهني</p>
        </div>

        <div className="sections">
          <a href="#home">الرئيسية</a>
          <a href="#about">من نحن</a>
          <a href="#slider1">التخصصات</a>
          <a href="#footer">تواصل معنا</a>
        </div>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY5_C0ghzP49GfmHn7cLHXh5MxvQqa3wdcXJEKe4Zc-G__nA/viewform?pli=1"  target="_blank"
                  rel="noopener noreferrer">
          <button className="btn">
            <img src={circle} alt="icon2" />
            <p>انضم الينا</p>
          </button>
        </a>

        {/* Hamburger Icon (phone only) */}
        <div className="menu-icon" onClick={toggleSidebar}>
          <Menu size={28} />
        </div>
      </div>

      {/* Sidebar (phone only) */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleSidebar}>
          <X size={26} />
        </div>
        <a href="#home" onClick={toggleSidebar}>الرئيسية</a>
        <a href="#about" onClick={toggleSidebar}>من نحن</a>
        <a href="#slider1" onClick={toggleSidebar}>التخصصات</a>
        <a href="#footer" onClick={toggleSidebar}>تواصل معنا</a>
        <a href="#footer" onClick={toggleSidebar}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY5_C0ghzP49GfmHn7cLHXh5MxvQqa3wdcXJEKe4Zc-G__nA/viewform?pli=1"  target="_blank"
                  rel="noopener noreferrer">
          <button className="btn">
            <img src={circle} alt="icon2" />
            <p>انضم الينا</p>
          </button>
          </a>
        </a>
      </div>
    </>
  );
}

export default Navbar;
