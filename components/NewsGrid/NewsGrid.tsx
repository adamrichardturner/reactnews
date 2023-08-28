import styles from '../../styles/NewsGrid.module.scss'
import NewsHero from '../NewsHero/NewsHero'
import NewsCard from '../NewsCard/NewsCard'
import { IArticlesProps } from '../../types/IArticlesProps'

const NewsGrid: React.FC<IArticlesProps> = ({ articles }: IArticlesProps) => {
  if (
    !articles ||
    !articles.articles ||
    !Array.isArray(articles.articles) ||
    articles.articles.length === 0
  ) {
    return null
  }

  const newsGrid: Array<object> = [...Object.values(articles.articles)]
  const article: any = newsGrid.shift()
  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsContainer__heroContainer}>
        <NewsHero
          title={article.title}
          image={article.image}
          description={article.description}
          source={article.source.name}
          url={article.url}
          date={article.publishedAt}
        />
      </div>
      <div className={styles.newsContainer__newsGrid}>
        {newsGrid.map((article: any, index: number) => {
          return (
            <NewsCard
              key={index}
              title={article.title}
              image={article.image}
              description={article.description}
              source={article.source.name}
              url={article.url}
              date={article.publishedAt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NewsGrid
