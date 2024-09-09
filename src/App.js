import SiteLogo from "./assets/img/logo.svg"
import mainFoto from "./assets/img/fftt.svg"
import IconIcon from "./assets/img/icon-1.svg"
import Icon2 from "./assets/img/icon-2.svg"
import Icon3 from "./assets/img/icon-3.svg"

import './App.css';

function App() {
  return (
    <>
    <header className="header">
      <div className='logo'>
        <img src={SiteLogo} alt='logo'></img>
      </div>
<nav>
  <ul className="ul">
    <li>
      <a href='#'>Home</a>
    </li>
    <li>
      <a href='#'>Services</a>
    </li>
    <li>
      <a href='#'>Portfolio</a>
    </li>
    <li>
      <a href='#'>Blog</a>
    </li>
  </ul>
</nav>
<button className="contact-btn">Contact us</button>
    </header>

    <main>
      <div className="cont">
      <h1 className="cont-h1">Smart Web <br/>
      Design Agency</h1>
      <p className="cont-p">We will provide best web design and business devlopment <br/>
      service clients expectation and satisfaction guarantee.</p>
      <button className="cont-btn">Free consultation</button>
      </div>

      <div className="main-foto">
        <img src={mainFoto}></img>
      </div>
    </main>
    <p className="provide">We Provide the Best Web services</p>

    <section className="cards">
      <div className="card">
        <img src={IconIcon}></img>
        <p className="card-p">5200+</p>
        <p className="card-p2">Projects completed</p>
      </div>

      <div className="card">
        <img src={Icon2}></img>
        <p className="card-p">500+</p>
        <p className="card-p2">Active clients</p>
      </div>

      <div className="card">
        <img src={Icon3}></img>
        <p className="card-p">4500+</p>
        <p className="card-p2">Happy clients</p>
      </div>
    </section>

    </>
   
  );
}    

export default App;
