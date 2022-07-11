import './App.css';
import logo from './images/ironhack-logo-xs.png';
import logo2 from './images/menu-top-xs.png';

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
    </div>
  );
}

export default App;
