import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Facts from './components/Facts';
import PlayStore from './components/PlayStore';

function App() {
  return (
    <div className="App">
      <Item/>
      <Facts/>
      <PlayStore/>
    </div>
  );
}

export default App;
