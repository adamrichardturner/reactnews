import Image from "next/image";
import Logo from '../../common/react-news-logo.png';
import LogoWhite from '../../common/reactnews-logo-white.png';
import Link from "next/link";
import styles from '../../styles/Navigation.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();

    // State for burger menu
    const [navActive, setNavActive] = useState(false);
    // State for dark theme
    const [darkTheme, setDarkTheme] = useState(false);
    // Flips dark mode value
    const handleToggle = () => {
        setDarkTheme(current => !current);
    };
    // Handles navigation active status
    const handleClick = () => {
        setNavActive(current => !current);
    }

    useEffect(() => {
        if (darkTheme !== undefined) {
          if (darkTheme) {
            // Set value of darkmode to dark
            document.documentElement.setAttribute('data-theme', 'dark');
            window.localStorage.setItem('theme', 'dark');
          } else {
            // Set value of  darkmode to light
            document.documentElement.removeAttribute('data-theme');
            window.localStorage.setItem('theme', 'light');
          }
        }
      }, [darkTheme]);

      useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
          '--initial-color-mode'
        );
        // Set initial darkmode to dark
        setDarkTheme(initialColorValue === 'dark');
      }, []);

    return(
        <>
            <header className={`${styles.header} ${navActive ? styles.headerResponsive : ''}`}>
                <Link href="/">
                    <div className={styles.header__logo}>
                        <h1>ReactNews</h1>
                        <Image 
                        src={darkTheme === true ? LogoWhite : Logo}
                        alt="React News Logo"
                        height={22}
                        width={22}
                        />
                    </div>
                </Link>
                <nav className={`${styles.header__nav} ${navActive ? styles.header__navResponsive : ''}`}>
                    <ul className={`${styles.header__nav} ${navActive ? styles.headerResponsive__navResponsive : ''}`}>
                        <Link href="/world">
                            <li onClick={handleClick}>
                                <a className={router.pathname == "/world" ? styles.active : ""}>World</a>
                            </li>
                        </Link>
                        <Link href="/uk">
                            <li onClick={handleClick}>                 
                                <a className={router.pathname == "/uk" ? styles.active : ""}>United Kingdom</a>
                            </li>
                        </Link>
                        <Link href="/entertainment">
                            <li onClick={handleClick}>
                                <a className={router.pathname == "/entertainment" ? styles.active : ""}>Entertainment</a>
                            </li>
                        </Link>
                        <Link href="/sports">
                            <li onClick={handleClick}>
                                <a className={router.pathname == "/sports" ? styles.active : ""}>Sports</a>
                            </li>
                        </Link>
                        <Link href="/technology">
                            <li onClick={handleClick}>
                                <a className={router.pathname == "/technology" ? styles.active : ""}>Technology</a>
                            </li>
                        </Link>
                        <Link href="/health">
                            <li onClick={handleClick}>
                                <a className={router.pathname == "/health" ? styles.active : ""}>Health</a>
                            </li>
                        </Link>
                    </ul>
                    <div className={`${styles.header__nav__bulb} ${navActive ? styles.headerResponsive__navResponsive__bulb : ''}`}>
                        <FontAwesomeIcon 
                            icon={faLightbulb}
                            onClick={handleToggle}
                        />
                    </div>
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