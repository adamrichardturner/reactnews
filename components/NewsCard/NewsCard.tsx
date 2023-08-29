import { INewsCard } from '../../types/INewsCard'
import styles from '../../styles/NewsCard.module.scss'
import Link from 'next/link'
import formatDate from '../../util/formatDate'

const NewsCard: React.FC<INewsCard> = ({
  title,
  image,
  description,
  url,
  source,
  date,
}) => {
  function truncateString(inputString: string, maxLength: number): string {
    if (inputString.length <= maxLength) {
      return inputString
    } else {
      return inputString.slice(0, maxLength) + '...'
    }
  }

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    // Error handler for broken images
    e.currentTarget.src = '/fallback.png'
    e.currentTarget.onerror = null
  }

  return (
    <>
      <Link href={{ pathname: url }} passHref={true}>
        <article className={styles.newsCard}>
          <div className={styles.newsCard__imageContainer}>
            <picture>
              <img src={image} alt={title} onError={handleImageError} />
            </picture>
          </div>
          <div className={styles.newsCard__contentContainer}>
            <span style={{ fontSize: '12px', paddingTop: '5px' }}>
              🕒 {formatDate(date)}
            </span>
            <h4>{truncateString(title, 75)}</h4>
            <p>{truncateString(description, 150)}</p>
            <div className={styles.newsCard__contentContainer__badge}>
              <span>{source}</span>
            </div>
          </div>
        </article>
      </Link>
    </>
  )
}

export default NewsCard
