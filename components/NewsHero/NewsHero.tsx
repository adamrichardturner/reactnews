import styles from '../../styles/NewsCard.module.scss';
import Image from 'next/image';
import testImage from './test.jpeg';
import { useArticles } from '../../context/ArticlesContext'

const NewsHero: React.FC = (articles) => {
    console.log(`articles in newshero: ${articles}`)
    return(
        <>
          <article className={styles.newsHero}>
              <div className={styles.newsHero__imageContainer}>
                  {/* <Image 
                    src={image}
                    alt={title}
                    layout="fill"
                  /> */}
              </div>
              <div className={styles.newsHero__contentContainer}>
                  {/* <h4>${articles[0].title}</h4>
                  <p>${articles[0].content}</p> */}
                  {/* <p><span>Source:</span> ${source}</p> */}
              </div>
          </article>
        </>
    )
}

export default NewsHero;