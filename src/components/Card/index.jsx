import styles from './Card.module.css'
import { PiFileHtml, PiFileCss, PiFileJs } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";


function Card({name, description, html_url}) {
    return(
    <section className={styles.card}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.cardfooter}>
            <div className={styles.cardicones}>
            <PiFileHtml />
            <PiFileCss />
            <PiFileJs />
            <FaReact />

 
            </div>
            <a href={html_url} className={styles.botao}
                Target = "_blanck">
            <FaArrowAltCircleRight />

            </a>


        </div>


    </section>
    )
    }
    export default Card