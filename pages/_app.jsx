import '../styles/globals.css'
import Head from 'next/head'
import { useState } from 'react'
import Overlay from '../components/Navbar/Overlay'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  
  const [ overlay, setOverlay ] = useState(false)

  const handleSetOverlay = () => {
      setOverlay(
          (prevbool) => !prevbool
      )
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
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

            <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet"></link>

            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css" />
            <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
            {/* <script>hljs.initHighlightingOnLoad();</script> */}
          </Head>


          <Overlay isDark={darktheme} toggleDark={ handleSetDarkTheme } openOverlay={overlay} toggleOverlay={ handleSetOverlay } />
          <div className={`main-wrapper ${darktheme ? "" : "white-bg"}  `}>
              <Component handleSetOverlay={handleSetOverlay} handleSetDarkTheme={handleSetDarkTheme} isDark={darktheme} {...pageProps} />
            <Footer isDark={darktheme} />
          </div>
        </>

}

export default MyApp
