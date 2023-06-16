import styles from '../styles/DisplayCoutries.module.css';

interface DisplayProps {
    name: string
}

export function DisplayCountries(props: DisplayProps) {
    return(
        <section className={styles.container}>
            <h2>oioio {props.name}</h2>
        </section>
    )
}