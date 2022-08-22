import styles from '../../styles/NewsHero.module.scss';
import Loader from '../../common/loader.gif';
import Image from "next/image";

const NewsHero: React.FC = ({articles}) => {
    const hero = articles.articles.articles[0];
    return(
        <>
        {!hero ? <Image 
                    src={Loader}
                    alt="Loading"
                    height={22}
                    width={22}
                /> :
          <article className={styles.newsHero}>
              <div className={styles.newsHero__imageContainer}>
                  <picture>
                      <img src={hero.image} alt={hero.title} />
                  </picture>
              </div>
              <div className={styles.newsHero__contentContainer}>
                  <h4>{hero.title}</h4>
                  <p>{hero.description}</p>
                  <p><span>Source:</span>{hero.source.name}</p>
              </div>
          </article>
           }
        </>
    )
}

export default NewsHero;