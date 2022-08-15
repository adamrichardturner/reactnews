import Image from "next/image";
import Logo from '../../common/react-news-logo.png';
import Link from "next/link";
import styles from '../../styles/Navigation.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();

    const [navActive, setNavActive] = useState(false);

    const handleClick = () => {
        setNavActive(current => !current);
    }

    return(
        <>
            <header className={`${styles.header} ${navActive ? styles.headerResponsive : ''}`}>
                <Link href="/">
                    <div className={styles.header__logo}>
                        <h1>ReactNews</h1>
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
                        <Link href="/world">
                            <li>
                                <a className={router.pathname == "/world" ? styles.active : ""}>World</a>
                            </li>
                        </Link>
                        <Link href="/uk">
                            <li>                 
                                <a className={router.pathname == "/uk" ? styles.active : ""}>United Kingdom</a>
                            </li>
                        </Link>
                        <Link href="/entertainment">
                            <li>
                                <a className={router.pathname == "/entertainment" ? styles.active : ""}>Entertainment</a>
                            </li>
                        </Link>
                        <Link href="/sports">
                            <li>
                                <a className={router.pathname == "/sports" ? styles.active : ""}>Sports</a>
                            </li>
                        </Link>
                        <Link href="/technology">
                            <li>
                                <a className={router.pathname == "/technology" ? styles.active : ""}>Technology</a>
                            </li>
                        </Link>
                        <Link href="/health">
                            <li>
                                <a className={router.pathname == "/health" ? styles.active : ""}>Health</a>
                            </li>
                        </Link>
                    </ul>
                    <div className={styles.header__icon}>
                        <FontAwesomeIcon 
                            icon={navActive ? faTimes : faBars}
                            onClick={handleClick} 
                            />
                    </div>
                </nav>
            </header>
            <div className={styles.headerSpacer}></div>
        </>
    )
}

export default Navigation;