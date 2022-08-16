import { INewsHero } from '../../types/INewsHero';
import styles from '../../styles/NewsCard.module.scss';
import Image from 'next/image';
import testImage from './test.jpeg';

type Props = {
    article: INewsHero;
};

const NewsHero: React.FC<Props> = ({article}) => {
    return(
        <>
          <article className={styles.newsHero}>
              <div className={styles.newsHero__imageContainer}>
                  <Image 
                    src={testImage}
                    alt="Title for Article"
                  />
              </div>
              <div className={styles.newsHero__contentContainer}>
                  <h4>Article Title</h4>
                  <p>Truncated content...</p>
                  <p><span>Source:</span> NewsSource</p>
              </div>
          </article>
        </>
    )
}

export default NewsHero;