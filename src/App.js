import '@fontsource/roboto';
import './App.css';
import Container from '@material-ui/core/Container';
import Layout from './components/Layout'
import NewsCard from './components/NewsCard'
import SimpleModal from './components/SimpleModal'
import React, { useEffect, useState } from 'react';
import placeholder from './reactnews-placeholder.jpg'
import loading from './Rocket.gif'

function App() {

  const [ state, setState ] = useState({
    loading: true,
    articles: {}
  })

  const [ currentPage, setCurrentPage ] = useState("breaking-news")
  
  const key = process.env.REACT_APP_NEWSAPI_KEY

  const endpoint = `top-headlines`

  const [ url, setUrl ] = useState(`https://gnews.io/api/v4/${endpoint}?token=${key}&country=gb`)

  useEffect(() => {
    fetchNews()
  }, [url] )

  const fetchNews = async () => {
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setState({
      articles: data.articles
    })
  }

  const updatePage = title => {
    setCurrentPage(title)
    setUrl(`https://gnews.io/api/v4/${endpoint}?token=${key}&country=gb&topic=${title}`)
  }

  const searchPage = term => {
    setUrl(`https://gnews.io/api/v4/search?q=${term}&token=${key}`)
  }

  const [ modalOpen, setModalOpen ] = useState(false)

  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")
  const [ image, setImage ] = useState("")
  const [ sourceURL, setSourceURL ] = useState("")

  const openModal = (title, content, image, sourceURL) => {
    setTitle(title)
    setContent(content)
    setImage(image)
    setSourceURL(sourceURL)
    setModalOpen(true)
    console.log(`Source URL IS!!! ${sourceURL}`)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="App">
      <Container maxWidth="lg" className="Container">
        <Layout updatePage={updatePage} 
                searchPage={searchPage}
                openModal={openModal}
        />
        <SimpleModal display={modalOpen} 
                     closeModal={closeModal}
                     title={title}
                     content={content}
                     image={image}
                     source={sourceURL}
                     />
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
                        content={state.articles[article].content}
                        source={state.articles[article].url}
                        openModal={openModal}  
                        image=
                        {
                          state.articles[article].image !== null 
                          ? 
                          state.articles[article].image 
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
