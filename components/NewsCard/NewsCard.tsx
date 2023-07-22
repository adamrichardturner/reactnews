import { INewsCard } from '../../types/INewsCard'
import styles from '../../styles/NewsCard.module.scss'
import Link from 'next/link'

const NewsCard: React.FC<INewsCard> = ({
  title,
  image,
  description,
  url,
  source,
}) => {
  function truncateString(inputString: string, maxLength: number): string {
    if (inputString.length <= maxLength) {
      return inputString
    } else {
      return inputString.slice(0, maxLength) + '...'
    }
  }
  return (
    <>
      <Link href={{ pathname: url }} passHref>
        <a target='_blank' rel='noreferrer'>
          <article className={styles.newsCard}>
            <div className={styles.newsCard__imageContainer}>
              <picture>
                <img src={image} alt={title} />
              </picture>
            </div>
            <div className={styles.newsCard__contentContainer}>
              <h4>{truncateString(title, 75)}</h4>
              <p>{truncateString(description, 150)}</p>
              <div className={styles.newsCard__contentContainer__badge}>
                <span>{source}</span>
              </div>
            </div>
          </article>
        </a>
      </Link>
    </>
  )
}

export default NewsCard
