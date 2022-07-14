import Image from 'next/image'
import Pill from './Pill'

function Project({ styles, source, name, about, tags, isDark }) {
    return ( 
        <div id={`${isDark ? "" : "black-txt"}`} className={styles.project}>
            <h4>{name}</h4>
            <p>{about}</p>
            <div className={styles.pills}>
                {
                    tags.map((tag, index) => (
                        <Pill styles={styles} name={tag} key={index} />
                    ))
                }
            </div>

            <div className={styles.imagewrapper}>
                <Image 
                    className={styles.imagee} 
                    src={source} 
                    alt="project" 
                    width="300" 
                    height="200"
                    layout="responsive"
                />
            </div>
        </div>
     );
}

export default Project;