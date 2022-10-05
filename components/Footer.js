import Link from 'next/link'

function Footer({ isDark }) {
    return ( 
        <div className="footer-container">
            <div className="links">
                <ul>
                    <li>
                        <Link href="#">
                            <a className={`${isDark ? "" : "black-txt"}`}>About</a> 
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={`${isDark ? "" : "black-txt"}`}>Projects</a> 
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
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

            <div className="about">
                <p className={`${isDark ? "" : "black-txt"}`}>© 2022 Daniel Eta. All rights reserved.</p>
                <small className={`${isDark ? "" : "black-txt"}`}>Icons & SVG Credits</small>
            </div>
        </div>
     );
}

export default Footer;