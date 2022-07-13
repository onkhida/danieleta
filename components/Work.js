import Link from 'next/link'

function Work({ job, location, separator, description, url, isDark }) {
    return ( 
        <div className="work">
            <div className={`title ${isDark ? "" : "black-txt"}`}>
                <span className="job">
                    {job}
                </span>
                 {separator}
                <Link href={url}>
                    <a id={`${isDark ? "" : "dark-blue-txt"}`} className="location">
                         {location}
                    </a>
                </Link>
            </div>

            <div className={`description ${isDark ? "" : "black-txt"}`}>
                {description}
            </div>
        </div>
     );
}

export default Work;