import './App.css';
import logo from './images/ironhack-logo-xs.png';

function App() {
  return (
    <div className="App">
      <div className="divAzul">
        <div className="ironLogo">
          <img src={logo} alt="Logo" />
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
          <button>Awesome!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
