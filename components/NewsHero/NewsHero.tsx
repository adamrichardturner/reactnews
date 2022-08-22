import styles from '../../styles/NewsCard.module.scss';
import { useArticles } from '../../context/ArticlesContext'

const NewsHero: React.FC = () => {
    const { articles } = useArticles();
    const image = articles.data.articles[0].image;
    const title = articles.data.articles[0].title;
    const description = articles.data.articles[0].description;
    return(
        <>
          <article className={styles.newsHero}>
              <div className={styles.newsHero__imageContainer}>
                  <picture>
                      <img src={image} alt={title} />
                  </picture>
              </div>
              <div className={styles.newsHero__contentContainer}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <p><span>Source:</span></p>
              </div>
          </article>
        </>
    )
}

export default NewsHero;