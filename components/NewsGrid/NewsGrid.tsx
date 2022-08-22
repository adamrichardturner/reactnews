import { INewsGrid } from '../../types/INewsGrid';
import styles from '../../styles/NewsGrid.module.scss';
import NewsHero from '../NewsHero/NewsHero';
import NewsCard from "../NewsCard/NewsCard";
import { useArticles } from '../../context/ArticlesContext'

const NewsGrid: React.FC = () => {
    const { articles } = useArticles();
    return(
        <div className={styles.newsContainer}>
            <div className={styles.newsContainer__heroContainer}>
                <NewsHero />
            </div>
            <div className={styles.newsContainer__newsGrid}>
                
            </div>
        </div>
    )
}

export default NewsGrid;