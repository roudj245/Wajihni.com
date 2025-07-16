import Navbar from './navbar.js';
import Button from './button.js';
import Home from './home.js';
import About from './about.js';
import Special from './specialities.js';
import CardSlider from './slider.js';
import Orange from './orange.js';
import CardSlider2 from './slider2.js';
import Organisers from './organisers.js';
import Footer from './footer.js';

function App() {
  return (
    <>
      <div id="navbar">
        <Navbar />
      </div>

      <div id="home">
        <Home />
      </div>

      <div id="button">
        <Button />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="special">
        <Special />
      </div>

      <div id="slider1">
        <CardSlider />
      </div>

      <div id="orange">
        <Orange />
      </div>

      <div id="slider2">
        <CardSlider2 />
      </div>

      <div id="organisers">
        <Organisers />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

