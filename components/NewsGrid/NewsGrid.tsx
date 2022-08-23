import styles from '../../styles/NewsGrid.module.scss';
import NewsHero from '../NewsHero/NewsHero';
import NewsCard from "../NewsCard/NewsCard";
import { IArticlesProps } from '../../types/IArticlesProps';


const NewsGrid: React.FC<IArticlesProps> = ({articles}: IArticlesProps) => {
    const newsGrid: Array<object> = [];
    Object.values(articles.articles).forEach((article) => newsGrid.push(article));
    const article = newsGrid.shift();
    return(
        <div className={styles.newsContainer}>
            <div className={styles.newsContainer__heroContainer}>
                <NewsHero {...article} />
            </div>
            <div className={styles.newsContainer__newsGrid}>
                {newsGrid.map((article, index) => {
                    return <NewsCard key={index} article={article} />
                })}
            </div>
        </div>
    )
}

export default NewsGrid;