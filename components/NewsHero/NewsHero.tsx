import styles from '../../styles/NewsHero.module.scss';
import Loader from '../../common/loader.gif';
import Image from "next/image";
import Link from 'next/link';

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
        <Link href={{pathname: hero.url}} passHref>
            <a target="_blank" rel="noreferrer">
                <article className={styles.newsHero}>
                    <div className={styles.newsHero__imageContainer}>
                        <picture>
                            <img src={hero.image} alt={hero.title} />
                        </picture>
                    </div>
                    <div className={styles.newsHero__contentContainer}>
                        <h4>{hero.title}</h4>
                        <p>{hero.description}</p>
                        <p>Source: <span>{hero.source.name}</span></p>
                    </div>
                </article>
            </a>
          </Link>
           }
        </>
    )
}

export default NewsHero;