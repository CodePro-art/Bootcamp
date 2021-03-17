import Hello from './components/ex1.1-hello/Hello'
import Display from './components/ex2.1-basic/Basic';
import Boxes from './components/ex3.1-boxes/Box1';
import Quiz from './components/ex3.2-quiz/Quiz';
import Buttons from './components/ex4.1-buttons/Buttons';
import Cards from './components/ex4.2-cards/Cards';
import ClassCards from './components/ex6.1-class_cards/Cards';
import Increment from './components/ex7.1-increment/Increment';
import HideAndSeek from './components/ex7.2-hide_and_seek/HideAndSeek';
import FavoriteColor from './components/ex8.1-life_cycle/FavoriteColor';
import AnimatedBoxes from './components/ex8.2-box_animation/Boxes';
import ChangingBox from './components/ex8.3-changing_box/ChangingBox';
import Timer from './components/ex9.1-spinner/Timer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hello/>
      <hr/>
      <Display/>
      <hr/>
      <Boxes/>
      <hr/>
      <Quiz/>
      <hr/>
      <Buttons/>
      <hr/>
      <Cards/>
      <hr/>
      <ClassCards/>
      <hr/>
      <Increment/>
      <hr/>
      <HideAndSeek/>
      <hr/>
      <FavoriteColor/>
      <hr/>
      <AnimatedBoxes/>
      <hr/>
      <ChangingBox/>
      <hr/>
      <Timer/>
    </div>
  );
}
 
export default App;

// npx kill-port 3000
