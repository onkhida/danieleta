import Image from 'next/image'
import profilePic from '../public/eta.png'
import Link from 'next/link'

function Info({ isDark }) {
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

            <p className={`${isDark ? "" : "black-txt"}`}>Leveraging emerging technologies to foster communal growth is my genuine passion. Translating a burdensome problem into a ground-breaking solution gives me fulfillment. I derive raw gratification from building systems that work. In whatever work I do, I’m also constantly looking to satisfy these 3 needs and leave my footprint of excellence. </p>

            <div className="btn-group">
                <Link href='/'>
                    <a>Writing</a>
                </Link>
                <Link href='/'>
                    <a>Code</a>
                </Link>
                <Link href='/'>
                    <a>Design & UI</a>
                </Link>
            </div>
        </div>
     );
}

export default Info;