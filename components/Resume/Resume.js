import Work from '../Work'

// import data to populate it with
import PastWork from './PastWork';
import CurrentWork from './CurrentWork';

function Resume({ isDark }) {
    return ( 
        <div className="resume-container">
            <div className="resume-text">   
                <div className="past-work">
                    <h1>Past Work</h1>
                        {
                            PastWork.map((work, index) => (
                                <Work 
                                    job={work.job}
                                    location={work.location}
                                    separator={work.seperator}
                                    url={work.url}
                                    description={work.description}
                                    isDark={isDark}
                                    index={index}
                                />    
                            ))
                        }
                </div>

                <div className="current-work">
                    <h1>Currently</h1>
                    {
                            CurrentWork.map((work, index) => (
                                <Work 
                                    job={work.job}
                                    location={work.location}
                                    separator={work.seperator}
                                    url={work.url}
                                    description={work.description}
                                    isDark={isDark}
                                    index={index}
                                />    
                            ))
                        }
                </div>
            </div>
        </div>
     );
}

export default Resume;