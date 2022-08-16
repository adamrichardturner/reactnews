import { INewsGrid } from '../../types/INewsGrid';
import styles from '../../styles/NewsGrid.module.scss';
import NewsHero from '../NewsHero/NewsHero';
import NewsCard from "../NewsCard/NewsCard";

type Props = {
    articles: INewsGrid;
}

const NewsGrid: React.FC<Props> = ({articles}) => {
    return(
        <div className={styles.newsContainer}>
            <div className={styles.newsContainer__heroContainer}>
                
            </div>
            <div className={styles.newsContainer__newsGrid}>

            </div>
        </div>
    )
}

export default NewsGrid;