import '@fontsource/roboto';
import './App.css';
import Container from '@material-ui/core/Container';
import Layout from './components/Layout'
import NewsCard from './components/NewsCard'

function getNews() {
  const key = process.env.REACT_APP_NEWSAPI_KEY
  const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${key}`;
  const req = new Request(url);
  fetch(req)
    .then(function(response) {
        return response.json()
    })
}

function App() {
  getNews()
  return (
    <div className="App">
      <Container maxWidth="lg" className="Container">
        <Layout />
      </Container>
    </div>
  );
}

export default App;
