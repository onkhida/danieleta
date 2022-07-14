import Link from 'next/link'
import { useState } from 'react'
import Sun from '../components/Sun'
import Moon from '../components/Moon'
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
                        <Link href="https://medium.com/@daniel.eta">
                            <a className={`${isDark ? "" : "black-txt"}`}>Writing</a> 
                        </Link>
                    </li>

                    <li>
                        <Link href="/software">
                            <a className={`${isDark ? "" : "black-txt"}`}>Software</a> 
                        </Link>
                    </li>
                    <li>
                        <Link href="/design">
                            <a className={`${isDark ? "" : "black-txt"}`}>Design & UI</a> 
                        </Link>
                    </li>
                </ul>

                <a className="toggletheme" onClick={toggleDark}>
                    {isDark ? <Sun /> : <Moon /> } 
                </a>
            </div>
            <div className="open-nav" onClick={ toggleOverlay }>
                    {isDark ? <HamburgerLight /> : <HamburgerDark />} 
            </div>

        </nav>
    )
  }