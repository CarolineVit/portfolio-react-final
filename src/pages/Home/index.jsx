import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <>
     
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>Olá, me  chamo<br />
              <span>Caroline Vitorio</span> <br />
              Dev Front-end
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>Saiba mais sobre mim</Link>
          </div>
          <figure>
            <img className={styles.img_home} src='./public/logo_home_red.png'></img>
          </figure>

        </section>
      

    </>

  )
}

export default Home