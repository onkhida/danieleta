import styles from '../styles/Articles.module.css'
import Image from 'next/image'
import kasparov from '../public/articles/kasparov.png'

export default function Article({ isDark }) {

    const bgStyle = {
        background: `${isDark ? "rgba(49, 4, 146, 0.41)" : "#EEEEEE"}`
    }

    return (
        <div style={bgStyle} className={styles.article}>
            <div className={styles.img}>
                <Image 
                    src={kasparov}
                    alt="Garry"
                />
            </div>

            <div className={styles.text}>
                <small id={`${isDark ? "" : "black-txt"}`}>SEPTEMBER 13, 2022</small>
                <h1 id={`${isDark ? "" : "black-txt"}`}>Friedrich Nietzsche and the Regret Monsters</h1>
                <p id={`${isDark ? "" : "black-txt"}`}>
                    Nunc vel pellentesque libero. Aenean at sagittis dolor. Nam fermentum quam metus, et finibus est condimentum non. Curabitur sed est semper, fermentum lectus in, consequat erat. Maecenas eleifend magna eget purus commodo vehicula. Sed volutpat faucibus ex, sit amet pellentesque est dictum ut. Vivamus eget aliquam justo, at placerat justo. Morbi fringilla quis neque quis vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies est quis justo pellentesque malesuada.
                </p>
                <a href="#">5 mins.</a>
            </div>
        </div>
    )
}