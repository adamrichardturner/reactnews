import Image from "next/image";
import Logo from '../../common/react-news-logo.png';
import Link from "next/link";
import styles from '../../styles/Navigation.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";

const Navigation = () => {
    const [navActive, setNavActive] = useState(false);

    const handleClick = () => {
        setNavActive(current => !current);
    }
    return(
        <>
            <header className={`${styles.header} ${navActive ? styles.headerResponsive : ''}`}>
                <Link href="/">
                    <div className={styles.header__logo}>
                        <h1>React News</h1>
                        <Image 
                        src={Logo}
                        alt="React News Logo"
                        height={22}
                        width={22}
                        />
                    </div>
                </Link>
                <nav className={`${styles.header__nav} ${navActive ? styles.header__navResponsive : ''}`}>
                    <ul className={`${styles.header__nav} ${navActive ? styles.headerResponsive__navResponsive : ''}`}>
                        <li>
                            <Link href="/world">
                                <a>World</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/uk">
                                <a>United Kingdom</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/entertainment">
                                <a>Entertainment</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sports">
                                <a>Sports</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/technology">
                                <a>Technology</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/health">
                                <a>Health</a>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.header__icon}>
                        <FontAwesomeIcon 
                            icon={faBars}
                            onClick={handleClick} 
                            />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navigation;