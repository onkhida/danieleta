import Link from 'next/link'

function Work({ job, location, separator, description, url }) {
    return ( 
        <div className="work">
            <div className="title">
                <span className="job">
                    {job}
                </span>
                 {separator}
                <Link href={url}>
                    <a className="location">
                         {location}
                    </a>
                </Link>
            </div>

            <div className="description">
                {description}
            </div>
        </div>
     );
}

export default Work;