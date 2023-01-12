// import logo from './logo.svg';
// import photo from './LR_photo.svg';
import photo from './photo_with_tocaboca_svg.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='card'>
          <h1 className='margin-bottom-0'>Ladipma's 5th Birthday Celebration</h1>
          <img className='photo' src={photo} alt='photo'/>
          <p className='margin-top-0'>
          <strong>Day: </strong> Saturday, 28th January
          <br></br>
          <strong>Time: </strong> 5:30 onwards
          <br></br>
          <strong>Venue: </strong> Ladipma's home
          </p>

          <h2 className="margin-bottom-0">Menu</h2>
          <p className='margin-top-0'>
          <strong>Starters: </strong> Momo, Alu Dum, Sel Roti, Oven Grilled Meat (chicken and pork), Achar
          
          <br></br>
          <strong>Mains: </strong> Dal Bhat
          </p>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
