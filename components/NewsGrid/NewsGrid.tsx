import styles from '../../styles/NewsGrid.module.scss';
import NewsHero from '../NewsHero/NewsHero';
import NewsCard from "../NewsCard/NewsCard";
import { INewsGrid, IArticle } from '../../types/INewsGrid';

type Props = {
    article: IArticle;
    articles: INewsGrid;
};

const NewsGrid: React.FC<Props> = (articles) => {
    const { articles: data } = articles;
    const newsGrid: Array<object> = [];
    Object.values(data.articles).forEach((article) => newsGrid.push(article));
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