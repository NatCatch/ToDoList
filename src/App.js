
import './App.css';
import { MyList } from './MyList';
import imageTwo from './two.png';
import imageThree from './three.png';
function App () {
  return (
    <div className='app'>
      <div className="container">
      <img src={imageTwo} width="200px" alt="two"/>
      </div>
<div className="container">
    <h1 >DAILY TASK PLANNER</h1>
 
    </div>
   <MyList />
    <div className='appTwo container'>
      <img src={imageThree} width="200px" alt="three"/>
    </div>
    </div>
   
  );
}

export default App;
