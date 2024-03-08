import logo from './logo.svg';
import './App.css';
import GameComponent from './Component/gameComponent';
import { useState } from 'react';
import HomePageComponent from './Component/homePageComponent';

function App() {
  const [clicked, setClicked] = useState(false);

  const handleClicked = (value) => {
    setClicked(value);
  };

  return (
    <div className="App">
      {clicked ? <GameComponent /> : <HomePageComponent onGame={handleClicked}/>}
    </div>
  );
}

export default App;
