import styles from './Page404.module.css'

function Page404() {
    return (
        <>
            
                <h2 className={styles.titulo2}>Algo de errado aconteceu nessa página!</h2> 
                <div className={styles.texto}>
                    <span className={styles.erro}>ERROR 404</span> <br />
                    <strong className={styles.texto2}>página não localizada</strong>
                </div>
           
        </>
    )
}
export default Page404