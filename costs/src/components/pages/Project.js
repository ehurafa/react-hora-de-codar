import styles from './Project.module.css'

import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'

function Project() {

    const { id } = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then((data) => {
            console.log('data ', data)
            setProject(data)
        })
        .catch(err =>  console.log)
    }, [id])

    console.log('project ', project.name)

    return (<p>{project.name}</p>)
}

export default Project