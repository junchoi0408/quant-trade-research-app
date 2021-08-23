import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing'

function App() {
  return (
    <div className="App">
      <header class="l-header">
        <Nav />
      </header>
      
      <main className="l-main">
        <Landing />
      </main>

    </div>
  );
}

export default App;
