import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";


function Contatos() {
    return (
        <>

            <section className={styles.contatos}>
                <h1>Contatos</h1> <br />
                <h3>Entre em contato</h3> <br />
                <p>Para que possamos conversar mais sobre</p>
                <div className={styles.icons}>
                    <a href='coralestuda@gmail.com' target='_blank' rel='noopener'>
                        <GoMail /></a>
                    <a href='https://www.instagram.com/caroline.vts/' target='_blank' rel='noopener'>
                        <BsInstagram /></a>
                    <a href='https://www.linkedin.com/in/caroline-vitorio-69bb061a0/' target='_blank' rel='noopener'>
                        <BsLinkedin /></a>
                    <a href='https://github.com/CarolineVit' target='_blank' rel='noopener'>
                        <BsGithub /></a>

                </div>
            </section>

        </>
    )
}
export default Contatos