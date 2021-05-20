import './App.css';
import './components/feed';
import Feed from './components/feed';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Feed/>
    </div>
  );
}

export default App;
