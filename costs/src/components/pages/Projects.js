import styles from './Projects.module.css'

import { useLocation } from 'react-router-dom'

import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'

function Projects() {

    const location = useLocation()

    let message = ''
    console.log('location ', location)
    if(location.state) {
        message = location.state.message
    }


    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            { message && <Message msg={message} type="success" />}
            <Container customClass="start">Projetos...</Container>
        </div>
    )
}

export default Projects