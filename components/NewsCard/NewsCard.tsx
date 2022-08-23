import { INewsCard } from '../../types/INewsCard';
import styles from '../../styles/NewsCard.module.scss';
import Link from 'next/link';
import Placeholder from '../../common/reactnews-placeholder.jpg';

type Props = {
    article: INewsCard;
};

const NewsCard: React.FC<Props> = ({article}) => {
    const truncate = (str: string) => {
        return str.length > 80 ? str.substr(0, 80 - 1) + "..." : str
    }
    return(
        <>
            <Link href={{pathname: article.url}} passHref>
                <a target="_blank" rel="noreferrer">
                    <article className={styles.newsCard}>
                        <div className={styles.newsCard__imageContainer}>
                            <picture>
                                <img src={article.image === undefined ? Placeholder : article.image} alt={article.title}/>
                            </picture>
                        </div>
                        <div className={styles.newsCard__contentContainer}>
                            <h4>{article.title}</h4>
                            <p>{truncate(article.description)}</p>
                                <p>Source: <span>{article.source.name}</span></p>
                        </div>
                    </article>
                </a>
            </Link>
        </>
    )
}

export default NewsCard;