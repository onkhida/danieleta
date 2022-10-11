import Image from 'next/image'
import profilePic from '../public/eta.png'
import Link from 'next/link'

function Info({ isDark }) {

    const bgStyle = {
        background: `${isDark ? "rgba(49, 4, 146, 0.41)" : "#EEEEEE"}`
    }

    const addBackground = (e) => {
        // e.target.style.background = ''
        e.target.style.background = `${isDark ? "rgba(49, 4, 146, 0.41)" : "#EEEEEE"}`
    }

    const removeBackground = (e) => { 
        e.target.style.background = 'none'
     }

    return ( 
        <div className="info-text">
            <div className="image-wrapper">
                <Image
                    src={profilePic}
                    alt="Daniel Eta👑"
                    height="200px"
                    width="200px"
                /> 
            </div>

            <h1 className={`${isDark ? "" : "black-txt"}`}>Hi there, my name is Daniel Eta.</h1>
            <h3 className={`${isDark ? "" : "black-txt"}`}>I make software & tell stories</h3>

            <p className={`${isDark ? "" : "black-txt"}`}>Leveraging emerging technologies to foster communal growth is my genuine passion. Translating a burdensome problem into a ground-breaking solution gives me fulfillment. I derive raw gratification from building systems that work. In whatever work I do, I’m constantly looking to satisfy these 3 needs and leave my footprint of excellence. </p>

            <div className="btn-group">
                <Link href='#'>
                    <a 
                        style={bgStyle}
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        Twitter
                    </a>
                </Link>

                <Link href='https://github.com/danieldoteta'>
                    <a 
                        onMouseEnter={addBackground} 
                        onMouseLeave={removeBackground}
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        Github
                    </a>
                </Link>

                <Link href='https://www.linkedin.com/in/daniel-eta/'>
                    <a 
                        onMouseEnter={addBackground} 
                        onMouseLeave={removeBackground}
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        Linkedin
                    </a>
                </Link>

                <Link href='https://www.youtube.com/channel/UCosyGC0IbmwtOzMRpVfrVWw'>
                    <a 
                        onMouseEnter={addBackground} 
                        onMouseLeave={removeBackground}
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        YouTube
                    </a>
                </Link>

                <Link href='#'>
                    <a 
                        onMouseEnter={addBackground} 
                        onMouseLeave={removeBackground}
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        Medium
                    </a>
                </Link>
            </div>

            <div className="mobile-btn-group">
                <Link href='#'>
                    <a 
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        TW
                    </a>
                </Link>

                <Link href='https://github.com/danieldoteta'>
                    <a 
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        GH
                    </a>
                </Link>

                <Link href='https://www.linkedin.com/in/daniel-eta/'>
                    <a 
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        LI
                    </a>
                </Link>

                <Link href='https://www.youtube.com/channel/UCosyGC0IbmwtOzMRpVfrVWw'>
                    <a 
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        YT
                    </a>
                </Link>

                <Link href='#'>
                    <a 
                        className={`${isDark ? "" : "black-txt"}`}
                    >
                        MD
                    </a>
                </Link>
            </div>
        </div>
     );
}

export default Info;