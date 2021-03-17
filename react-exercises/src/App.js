import Hello from './components/hello/hello'
import Display from './components/basic/basic';
import Boxes from './components/boxes/box1';
import Quiz from './components/quiz/quiz';
import Buttons from './components/buttons/buttons';
import Cards from './components/cards/cards';
import ClassCards from './components/cards.class.component/cards';
import Increment from './components/increment/increment';
import HideAndSeek from './components/hideAndseek/hideAndseek';
import FavoriteColor from './components/lifeCycle/favoriteColor';
import AnimatedBoxes from './components/boxAnimation/boxes';
import ChangingBox from './components/changingBox/changingBox';
import Timer from './components/spinner/timer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <hr/>
      <Display></Display>
      <hr/>
      <Boxes></Boxes>
      <hr/>
      <Quiz></Quiz>
      <hr/>
      <Buttons></Buttons>
      <hr/>
      <Cards></Cards>
      <hr/>
      <ClassCards></ClassCards>
      <hr/>
      <Increment></Increment>
      <hr/>
      <HideAndSeek></HideAndSeek>
      <hr/>
      <FavoriteColor></FavoriteColor>
      <hr/>
      <AnimatedBoxes></AnimatedBoxes>
      <hr/>
      <ChangingBox></ChangingBox>
      <hr/>
      <Timer></Timer>
    </div>
  );
}
 
export default App;

// npx kill-port 3000
