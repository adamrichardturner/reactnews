import '@fontsource/roboto';
import './App.css';
import Container from '@material-ui/core/Container';
import Layout from './components/Layout'
import NewsCard from './components/NewsCard'
import React, { useEffect, useState } from 'react';

function App() {

  const [ appState, setAppState ] = useState({
    loading: false,
    articles: []
  })

  useEffect(() => {
    setAppState({ loading: true });
    const key = process.env.REACT_APP_NEWSAPI_KEY
    const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${key}`;
    fetch(url)
      .then((res) => res.json())
      .then((articles) => {
        setAppState({ loading: false, articles: articles.articles });
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setAppState({ loading: true });
      });
  }, [setAppState]);

  const displayNews = () => {
    const articles = appState.articles
    console.log(typeof articles)
  }

  return (
    <div className="App">
      <Container maxWidth="lg" className="Container">
        <Layout />
        {displayNews()}
      </Container>
    </div>
  );
}

export default App;
