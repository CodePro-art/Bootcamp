import Hello from './components/ex1.1-hello/hello'
import Display from './components/ex2.1-basic/Basic';
import Boxes from './components/ex3.1-boxes/box1';
import Quiz from './components/ex3.2-quiz/quiz';
import Buttons from './components/ex4.1-buttons/buttons';
import Cards from './components/ex4.2-cards/cards';
import ClassCards from './components/ex6.1-class_cards/cards';
import Increment from './components/ex7.1-increment/increment';
import HideAndSeek from './components/ex7.2-hide_and_seek/hideAndseek';
import FavoriteColor from './components/ex8.1-life_cycle/favoriteColor';
import AnimatedBoxes from './components/ex8.2-box_animation/boxes';
import ChangingBox from './components/ex8.3-changing_box/changingBox';
import Timer from './components/ex9.1-spinner/timer';

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
