import '@fontsource/roboto';
import './App.css';
import Layout from './components/Layout'
import NewsCard from './components/NewsCard'

function App() {
  return (
    <div className="App">
      <Layout />
      
      <header className="App-header">
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
