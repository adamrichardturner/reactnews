import { INewsCard } from '../../types/INewsCard';
import styles from '../../styles/NewsCard.module.scss';
import Link from 'next/link';

const NewsCard: React.FC<INewsCard> = ({title, image, description, url, source}) => {
    return(
        <>
            <Link href={{pathname: url}} passHref>
                <a target="_blank" rel="noreferrer">
                    <article className={styles.newsCard}>
                        <div className={styles.newsCard__imageContainer}>
                            <picture>
                                <img src={image} alt={title}/>
                            </picture>
                        </div>
                        <div className={styles.newsCard__contentContainer}>
                            <h4>{title}</h4>
                            <p>{description}</p>
                                <p>Source: <span>{source}</span></p>
                        </div>
                    </article>
                </a>
            </Link>
        </>
    )
}

export default NewsCard;