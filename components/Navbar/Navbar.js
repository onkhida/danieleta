import Link from 'next/link'


import Sun from './Sun'
import Moon from './Moon'

import HamburgerLight from './HamburgerLight'
import HamburgerDark from './HamburgerDark'

export default function Header({ isDark, toggleOverlay, toggleDark }) {
    return (
        <nav>
            <div className="icon">
                <Link href="/">
                    <a className={`${isDark ? "" : "black-txt"}`}>
                        de.
                    </a>
                </Link>
            </div>
            <div className="navlinks">
                <ul>
                    <li>
                        <Link href="#">
                            <a className={`${isDark ? "" : "black-txt"}`}>About</a> 
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">
                            <a className={`${isDark ? "" : "black-txt"}`}>Projects</a> 
                        </Link>
                    </li>
                    <li>
                        <Link href="/articles">
                            <a className={`${isDark ? "" : "black-txt"}`}>Articles</a> 
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={`${isDark ? "" : "black-txt"}`}>Design & UI</a> 
                        </Link>
                    </li>
                </ul>
            </div>

            <a className="toggletheme" onClick={toggleDark}>
                    {isDark ? <Sun /> : <Moon /> } 
            </a>

            <div className="open-nav" onClick={ toggleOverlay }>
                    {isDark ? <HamburgerLight /> : <HamburgerDark />} 
            </div>

        </nav>
    )
  }