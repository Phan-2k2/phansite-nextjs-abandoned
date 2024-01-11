import Image from 'next/image'
import styles from './page.module.css'
import WelcomeSpread from './mainpage/WelcomeSpread'
import NavBar from './mainpage/NavBar'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar/>
      <WelcomeSpread/>
    </main>
  )
}
