import { Content } from './components/Content';
import { Counter } from './components/Counter';
import "./App.css";
import { TextInputComponent } from './components/Input/Input';


function App() {
  return (
    <main className='fon'>
    <div className='container'>
      <h1>Выберите тариф</h1>
      <Content />
      <Counter />
      <TextInputComponent />
    </div>
    </main>
  );
}

export default App;
