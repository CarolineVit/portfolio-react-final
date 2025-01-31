import Card from '../../components/Card'
import styles from './Projetos.module.css'
import { useEffect, useState } from 'react'

function Projetos() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/CarolineVit/repos')

            const data = await response.json();
            setRepositories(data)
        }
        buscarRepositorios()


    }, [])

    return (
        <section className={styles.projetos}>

            <h1>projetos</h1>

            {
                repositories.length > 0 ?

                    (
                        <section className={styles.lista}>
                            {
                                repositories.map((repo) => (
                                < Card
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            html_url={repo.html_url}
                        />
                                ))
                            }

                        </section>
                    )




                    : (<p>nao contém repositorio</p>)
            }

        </section>
    )



}

export default Projetos