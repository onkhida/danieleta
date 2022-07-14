import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Overlay from '../components/Overlay'

function MyApp({ Component, pageProps }) {
  
  const [ overlay, setOverlay ] = useState(false)

  const handleSetOverlay = () => {
      setOverlay(
          (prevbool) => !prevbool
      )

      console.log(overlay)
  }

  const [ darktheme, setDarkTheme ] = useState(true)

  const handleSetDarkTheme = () => {
    setDarkTheme(
      (prevbool) => !prevbool
    )
  }

  return <>
          <Head>
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Daniel Eta👋🏾</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap" rel="stylesheet" />
          </Head>


          <Overlay isDark={darktheme} toggleDark={ handleSetDarkTheme } openOverlay={overlay} toggleOverlay={ handleSetOverlay } />
          <div className={`main-wrapper ${darktheme ? "" : "white-bg"}  `}>
            <div className="content-wrapper">
              <Navbar isDark={darktheme} toggleOverlay={ handleSetOverlay } toggleDark={ handleSetDarkTheme } />
              <Component isDark={darktheme} {...pageProps} />
            </div>
          </div>
         </>

}

export default MyApp
