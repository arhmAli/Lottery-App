import logo from './logo.svg';
import './App.css';
import Ball from './Ball';
import Loterry from './Loterry';
function App() {
  return (
    <div className="App">
      
      <Loterry />
      <Loterry title='Mini-Daily' maxBall={10} numBalls={3} />
    </div>
  );
}

export default App;
