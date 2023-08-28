import styles from '../../styles/NewsHero.module.scss'
import Link from 'next/link'
import { INewsHero } from '../../types/INewsHero'
import formatDate from '../../util/formatDate'

const NewsHero: React.FC<INewsHero> = ({
  title,
  image,
  description,
  url,
  source,
  date,
}) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    // Error handler for broken images
    e.currentTarget.src = '../../public/fallback.png'
  }
  return (
    <>
      <Link href={{ pathname: url }} passHref={true}>
        <article className={styles.newsHero}>
          <div className={styles.newsHero__imageContainer}>
            <picture>
              <img src={image} alt={title} onError={handleImageError} />
            </picture>
          </div>
          <div className={styles.newsHero__contentContainer}>
            <span style={{ fontSize: '12px', paddingTop: '10px' }}>
              🕒 {formatDate(date)}
            </span>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className={styles.newsHero__contentContainer__badge}>
              {source}
            </div>
          </div>
        </article>
      </Link>
    </>
  )
}

export default NewsHero
