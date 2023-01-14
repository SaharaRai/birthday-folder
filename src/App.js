// import logo from './logo.svg';
// import photo from './LR_photo.svg';
import photo from './photo_with_tocaboca_svg.svg';
import './App.css';
import { GiForkKnifeSpoon, GiBalloons, GiMusicalNotes } from 'react-icons/gi';
import { BsMoonStarsFill } from 'react-icons/bs';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='card padding-sides-0'>
          <h1 className='margin-bottom-0'>
          <span style= {{color: '#154c79' }}><BsMoonStarsFill/> </span>
          <span style= {{color: 'green' }}>L</span>
          <span style= {{color: '#DC143C' }}>a</span>
          <span style= {{color: '#00008B' }}>d</span>
          <span style= {{color: '#800080' }}>i</span>
          <span style= {{color: '#FFD700' }}>p</span>
          <span style= {{color: '#FF1493' }}>m</span>
          <span style= {{color: '#800000' }}>a</span>
          <span style= {{color: '#800080' }}>'</span>
          <span style= {{color: 'orange' }}>s </span>

          <small>
            5
            <sup><small>th </small></sup> 
            <span style= {{color: '' }}>Birthday </span> 
            <span style= {{color: '' }}>Celebration</span>
          </small>
            <span style= {{color: 'purple' }}><GiBalloons/></span>
          
          </h1>
          <img className='photo' src={photo} alt='photo'/>

          <p className='margin-top-0' style= {{color: '' }}>
            <strong>Day: </strong> Saturday, 28th January
            <br></br>
            <strong>Time: </strong> 5:30 onwards
            <br></br>
            <strong>Venue: </strong> Ladipma's home
          </p>

          <div style= {{backgroundColor: 'white', color: 'darkblue'}} className='padding-top-5 padding-bottom-5'>
            
            <h3 className="margin-bottom-0" style= {{fontSize: '25px' }}> <span style={{ color: 'grey' }}><GiForkKnifeSpoon /></span> Menu:</h3>
            <p className='margin-top-0'>
              <strong>Starters: </strong> 
              Momo, Alu Dum, Sel Roti, Oven Grilled Meat (chicken and pork), Achar
              
              <br></br>
              <strong>Mains: </strong> Dal Bhat
            </p>
          </div>

          <h3 className="margin-bottom-0" style= {{fontSize: '25px' }}><GiMusicalNotes/> Entertainment Volunteers</h3>
          <p className='margin-top-0'>
            We would love it if you are able to do any dance, singing or any other performance.
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
