import styles from '../../styles/NewsHero.module.scss'
import Link from 'next/link'
import { INewsHero } from '../../types/INewsHero'

const NewsHero: React.FC<INewsHero> = ({
  title,
  image,
  description,
  url,
  source,
}) => {
  return (
    <>
      <Link href={{ pathname: url }} passHref>
        <a target='_blank' rel='noreferrer'>
          <article className={styles.newsHero}>
            <div className={styles.newsHero__imageContainer}>
              <picture>
                <img src={image} alt={title} />
              </picture>
            </div>
            <div className={styles.newsHero__contentContainer}>
              <h4>{title}</h4>
              <p>{description}</p>
              <div className={styles.newsHero__contentContainer__badge}>
                {source}
              </div>
            </div>
          </article>
        </a>
      </Link>
    </>
  )
}

export default NewsHero
