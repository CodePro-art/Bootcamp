import Hello from './components/hello/hello'
import Display from './components/basic/basic';
import Boxes from './components/boxes/box1';
import Quiz from './components/quiz/quiz';
import Buttons from './components/buttons/buttons';
import Cards from './components/cards/cards'

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
    </div>
  );
}

export default App;

// npx kill-port 3000
