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
  // Initialise state and state setter for articles
  const [ state, setState ] = useState({
    loading: true,
    articles: {}
  })

  // Initialise currentPage for changing page with AppDrawer

  const [ currentPage, setCurrentPage ] = useState("breaking-news")

  // API key for GNews API & initial endpoint

  const key = process.env.REACT_APP_NEWSAPI_KEY

  const endpoint = `top-headlines`

  const [ url, setUrl ] = useState(`https://gnews.io/api/v4/${endpoint}?token=${key}&country=gb`)

  // Fetch API and watch URL for change dependant on clicks on the AppDrawer anchors

  useEffect(() => {
    fetchNews()
  }, [url] )

  // Async fetch call to GNews API

  const fetchNews = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setState({
      articles: data.articles
    })
  }

  // Update the page topic based on the anchor, this function is passed as props 
  // to child Layout

  const updatePage = title => {
    setCurrentPage(title)
    setUrl(`https://gnews.io/api/v4/${endpoint}?token=${key}&country=gb&topic=${title}`)
  }

  // Initialise state & stateSetters for modalOpen status, article title, content, image
  // and sourceURL

  const [ modalOpen, setModalOpen ] = useState(false)
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")
  const [ image, setImage ] = useState("")
  const [ sourceURL, setSourceURL ] = useState("")

  // On opening the modal set the title, content, imageg, sourceURL and
  // status of modal.

  const openModal = (title, content, image, sourceURL) => {
    setTitle(title)
    setContent(content)
    setImage(image)
    setSourceURL(sourceURL)
    setModalOpen(true)
  }

  // Handle closing the modal

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="App">
      <Container maxWidth="lg" className="Container">
        <Layout updatePage={updatePage} 
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
          // Conditional renedering of loading gif
          state.loading === true ? <div className="ParentLoader">
            <img className="Loader" src={loading} alt="Loading" />
          </div>
          
          :
          // Iterate over the returned object from the fetch API call
          // and returns a NewsCard for each article, dependant on the
          // arguments given by user clicking on the AppDrawer anchors
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
