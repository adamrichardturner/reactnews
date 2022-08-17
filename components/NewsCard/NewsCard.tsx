import { INewsCard } from '../../types/INewsCard';
import styles from '../../styles/NewsCard.module.scss';
import testImage from './test.jpeg';

type Props = {
    article: INewsCard;
};

const NewsCard: React.FC<Props> = ({article}) => {
    return(
        <>
          <article className={styles.newsCard}>
              <div className={styles.newsCard__imageContainer}>
                  <picture>
                      <img src={article.image} alt={article.title}/>
                  </picture>
              </div>
              <div className={styles.newsCard__contentContainer}>
                  <h4>Article Title</h4>
                  <p>Truncated content...</p>
                  <p><span>Source:</span> NewsSource</p>
              </div>
          </article>
        </>
    )
}

export default NewsCard;