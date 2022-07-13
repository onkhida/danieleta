import Link from 'next/link'

function Footer({ isDark }) {
    return ( 
        <div className="footer-container">
            <h1 className={`${isDark ? "" : "black-txt"}`}>Leave a message</h1>
            <p className={`${isDark ? "" : "black-txt"}`}>Have an interesting idea you think we can work with? Or do you just want to ask about work?</p>
            
            <div className="contacts">
                <span>
                    <Link href="https://github.com/danieldoteta">
                        <a className={`${isDark ? "" : "gray-txt"}`}>
                            github.com/danieldoteta
                        </a>
                    </Link>
                </span>
                <span>
                    <Link href="https://linkedin.com/in/daniel-eta">
                        <a className={`${isDark ? "" : "gray-txt"}`}>
                            linkedin.com/in/daniel-eta
                        </a> 
                    </Link>
                </span>
                <span>
                    <Link href="mailto:daniel.eta@outlook.com">
                        <a className={`${isDark ? "" : "gray-txt"}`}>
                            daniel.eta@outlook.com
                        </a>
                    </Link>
                </span>
            </div>

        </div>
     );
}

export default Footer;