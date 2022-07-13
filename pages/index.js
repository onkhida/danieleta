import Info from '../components/Info'
import Resume from '../components/Resume'
import Footer from '../components/Footer'
import Image from 'next/image'
import fingersCrossed from '../public/fingers-crossed.png'
import pointingFingers from '../public/pointing-fingers.png'

export default function Home({ isDark }) {
  return (
    <>
      <Info isDark={isDark} />
      <Resume isDark={isDark} />
      <Footer isDark={isDark} />

      <div className="fingers-crossed">
        <Image 
          src={fingersCrossed}
          alt="more ahead"
        />
      </div>

      <div className="pointing-fingers">
      <Image 
          src={pointingFingers}
          alt="more to come"
        />
      </div>
    </>
  )
}
