import SiteLogo from "./assets/img/logo.svg"
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
    </>
   
  );
}    

export default App;
