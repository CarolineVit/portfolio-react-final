import styles from './Sobre.module.css'
import html from './imagens/icon-html.svg'
import css from './imagens/icon-css.svg'
import js from './imagens/icon-js.svg'
import node from './imagens/icon-node.svg'
import react from './imagens/icon-react.svg'
import avatar from './imagens/fotocarol.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar} className={styles.avatar}></img>
            
            <div className={styles.texto}>
                <h2>Sobre</h2>
                <p>Sou
                    <span> Caroline Vitorio</span> <br />
                    <strong>Estudante de Full Stack</strong> 
                    <p>Trabalho com desenvolvimento web desde fevereiro de 2024</p>

                    <p>Estudante de letras em transição de carreira para a área tech, com foco em línguistica computacional.
                    </p>

                </p>

            </div>
            </div>
            <div className={styles.tech}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html}></img>
                    <img src={css}></img>
                    <img src={js}></img>
                    <img src={react}></img>
                    <img src={node}></img>
                </div>                
            </div>



        </section >
    )
}
export default Sobre