import '@fontsource/roboto';
import './App.css';
import Container from '@material-ui/core/Container';
import Layout from './components/Layout'
import NewsCard from './components/NewsCard'
import React, { useEffect, useState } from 'react';

function App() {

  const [ state, setState ] = useState({
    loading: true,
    articles: {}
  })

  useEffect(() => {
    fetchNews()
  }, [] )

  const fetchNews = async () => {
    const key = process.env.REACT_APP_NEWSAPI_KEY
    const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${key}`
    const response = await fetch(url)
    const data = await response.json()
    setState({
      articles: data.articles
    })
  }

  return (
    <div className="App">
      <Container maxWidth="lg" className="Container">
        <Layout />
        {
          Object.keys(state.articles).map(function(article) {
            console.log(state.articles[article].urlToImage)
            return <div className="newsCard">
                      <NewsCard 
                        title={state.articles[article].title} 
                        description={state.articles[article].description}  
                        image={state.articles[article].urlToImage}  
                      />
                   </div>
          })
        }
      </Container>
    </div>
  );
}

export default App;
