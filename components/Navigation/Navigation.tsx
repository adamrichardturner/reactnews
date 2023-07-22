import Image from 'next/image'
import Logo from '../../common/reactnews-logo-white.svg'
import Link from 'next/link'
import styles from '../../styles/Navigation.module.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlameLight from '../../common/flame-light.svg'
import FlameDark from '../../common/flame-dark.svg'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Navigation = () => {
  const router = useRouter()
  let pageTitle =
    router.pathname.charAt(1).toUpperCase() + router.pathname.slice(2)
  if (pageTitle === 'Uk') {
    pageTitle = 'United Kingdom'
  }
  // State for burger menu
  const [navActive, setNavActive] = useState(false)
  // State for dark theme
  const [darkTheme, setDarkTheme] = useState(false)

  // Flips dark mode value
  const handleToggle = () => {
    setDarkTheme((current) => !current)
  }
  // Handles navigation active status
  const handleClick = () => {
    setNavActive((current) => !current)
  }

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark')
        window.localStorage.setItem('theme', 'dark')
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme')
        window.localStorage.setItem('theme', 'light')
      }
    }
  }, [darkTheme])

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    )
    // Set initial darkmode to dark
    setDarkTheme(initialColorValue === 'dark')
  }, [])

  return (
    <>
      <header
        className={`${styles.header} ${
          navActive ? styles.headerResponsive : ''
        }`}
      >
        <nav
          className={`${styles.header__nav} ${
            navActive ? styles.header__navResponsive : ''
          }`}
        >
          <Link href='/'>
            <div className={styles.header__logo}>
              <h1>ReactNews</h1>
              <Image src={Logo} alt='React News Logo' width={30} height={30} />
            </div>
          </Link>
          <ul
            className={`${styles.header__nav} ${
              navActive ? styles.headerResponsive__navResponsive : ''
            }`}
          >
            <Link href='/'>
              <li onClick={handleClick}>
                <a className={router.pathname == '/' ? styles.active : ''}>
                  World
                </a>
              </li>
            </Link>
            <Link href='/uk'>
              <li onClick={handleClick}>
                <a className={router.pathname == '/uk' ? styles.active : ''}>
                  United Kingdom
                </a>
              </li>
            </Link>
            <Link href='/entertainment'>
              <li onClick={handleClick}>
                <a
                  className={
                    router.pathname == '/entertainment' ? styles.active : ''
                  }
                >
                  Entertainment
                </a>
              </li>
            </Link>
            <Link href='/sports'>
              <li onClick={handleClick}>
                <a
                  className={router.pathname == '/sports' ? styles.active : ''}
                >
                  Sports
                </a>
              </li>
            </Link>
            <Link href='/technology'>
              <li onClick={handleClick}>
                <a
                  className={
                    router.pathname == '/technology' ? styles.active : ''
                  }
                >
                  Technology
                </a>
              </li>
            </Link>
            <Link href='/health'>
              <li onClick={handleClick}>
                <a
                  className={router.pathname == '/health' ? styles.active : ''}
                >
                  Health
                </a>
              </li>
            </Link>
          </ul>
          <div className={styles.header__icons}>
            <div className={styles.header__icons__flame}>
              <Image
                src={darkTheme ? FlameDark : FlameLight}
                alt='Dark Mode Toggle'
                onClick={handleToggle}
              />
            </div>
            <div className={styles.header__icons__toggle}>
              <FontAwesomeIcon
                icon={navActive ? faTimes : faBars}
                onClick={handleClick}
              />
            </div>
          </div>
        </nav>
      </header>
      <div className={styles.headerSpacer}>
        <div className={styles.headerSpacer__pageTitle}>
          <h2>{pageTitle ? pageTitle : 'World'} News</h2>
        </div>
      </div>
    </>
  )
}

export default Navigation
