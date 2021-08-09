import '@fontsource/roboto';
import './App.css';
import Container from '@material-ui/core/Container';
import Layout from './components/Layout'
import NewsCard from './components/NewsCard'
import React, { useEffect, useState } from 'react';
import placeholder from './reactnews-placeholder.jpg'
import loading from './Rocket.gif'

function App() {

  const key = "4e0068669dcd4f46809b33ea160a0948"

  const [ state, setState ] = useState({
    loading: true,
    articles: {}
  })

  const [ currentPage, setCurrentPage ] = useState("general")

  const [ url, setUrl ] = useState(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${key}&category=${currentPage}`)

  useEffect(() => {
    fetchNews()
  }, [url] )

  const fetchNews = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setState({
      articles: data.articles
    })
  }

  const updatePage = title => {
    setCurrentPage(title)
    setUrl(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${key}&category=${title}`)
    console.log(`URL before: ${url}`)
    fetchNews()
    console.log(`URL after: ${url}`)
  }

  return (
    <div className="App">
      <Container maxWidth="lg" className="Container">
        <Layout updatePage={updatePage} />
        {
          state.loading === true ? <div className="ParentLoader">
            <img className="Loader" src={loading} alt="Loading" />
          </div>
          
          :

          Object.keys(state.articles).map(function(article) {
            return <div className="newsCard">
                    <div className="card">
                    <NewsCard 
                        key={state.articles[article].title}
                        title={state.articles[article].title} 
                        description={state.articles[article].description}  
                        image=
                        {
                          state.articles[article].urlToImage !== null 
                          ? 
                          state.articles[article].urlToImage 
                          : placeholder
                        }  
                      />
                    </div>
                      
                   </div>
          })
        }
      </Container>
    </div>
  );
}

export default App;
