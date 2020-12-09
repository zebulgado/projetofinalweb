import React from 'react'
import styles from '../../styles/tituloH1.module.css'

export default function titulo( props ) {
    return (
        <div>
            <h1 className={styles.titulo}>{ props.texto }</h1>
        </div>
    )
}
