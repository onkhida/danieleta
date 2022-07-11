import Link from 'next/link'

function Footer() {
    return ( 
        <div className="footer-container">
            <h1>Leave a message</h1>
            <p>Have an interesting idea you think we can work with? Or do you just want to ask about work?</p>
            
            <div className="contacts">
                <span>
                    <Link href="https://github.com/danieldoteta">
                        <a>
                            github.com/danieldoteta
                        </a>
                    </Link>
                </span>
                <span>
                    <Link href="https://linkedin.com/in/daniel-eta">
                        <a>
                            linkedin.com/in/daniel-eta
                        </a> 
                    </Link>
                </span>
                <span>
                    <Link href="mailto:daniel.eta@outlook.com">
                        <a>
                            daniel.eta@outlook.com
                        </a>
                    </Link>
                </span>
            </div>

        </div>
     );
}

export default Footer;