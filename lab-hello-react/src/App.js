import './App.css';
import logo from './images/ironhack-logo-xs.png';
import logo2 from './images/menu-top-xs.png';
import logo3 from './images/icon1.png';
import logo4 from './images/icon2.png';
import logo5 from './images/icon3.png';
import logo6 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <div className="divAzul">
        <div className="ironLogo">
          <div><img src={logo} alt="Logo" /></div>
          <div><img src={logo2} alt="Logo" /></div>
        </div>

        <div className="title" style={{ fontSize: "56px" }}>
          <b><p>Say hello to</p>
          <p>ReactJS</p></b>
        </div>

        <div className="paragraph">
          <p>You will learn how to use</p>
          <p>the most popular frontend library,</p>
          <p>and become a super Ninja developer.</p>
        </div>

        <div className="whiteButton">
          <button style={{ fontSize: "17px" }}><b>Awesome!</b></button>
        </div>
      </div>

      <div className="imagesDiv">
        <div>
          <div><img src={logo3} alt="Logo" /></div>
          <p style={{ fontSize: "20px" }}><b>Declarative</b></p>
          <p>React makes it</p>
          <p>painless to create</p>
          <p>interactive UIs.</p>
        </div>

        <div>
          <div><img src={logo4} alt="Logo" /></div>
          <p style={{ fontSize: "20px" }}><b>Components</b></p>
          <p>Build encapsulated</p>
          <p>components that</p>
          <p>manage their state.</p>
        </div>

        <div>
          <div><img src={logo5} alt="Logo" /></div>
          <p style={{ fontSize: "20px" }}><b>Single-Way</b></p>
          <p>A set of immutable</p>
          <p>values are passed to</p>
          <p>the components.</p>
        </div>

        <div>
          <div><img src={logo6} alt="Logo" /></div>
          <p style={{ fontSize: "20px" }}><b>JSX</b></p>
          <p>Statically-typed,</p>
          <p>designed to run on</p>
          <p>modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
