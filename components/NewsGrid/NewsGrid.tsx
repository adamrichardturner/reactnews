import styles from '../../styles/NewsGrid.module.scss';
import NewsHero from '../NewsHero/NewsHero';
import NewsCard from "../NewsCard/NewsCard";

const NewsGrid: React.FC = (articles) => {
    const newsGrid = [];
    Object.values(articles.articles.articles).forEach((article) => newsGrid.push(article));
    newsGrid.shift();
    return(
        <div className={styles.newsContainer}>
            <div className={styles.newsContainer__heroContainer}>
                <NewsHero articles={articles}/>
            </div>
            <div className={styles.newsContainer__newsGrid}>
                {newsGrid.map((article, index) => {
                    return <NewsCard key={index} article={article}/>
                })}
            </div>
        </div>
    )
}

export default NewsGrid;