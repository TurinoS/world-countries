import Link from 'next/link';
import styles from '../styles/DisplayCoutries.module.css';
interface DisplayProps {
    flag: string
    alt: string
    name: string
    population: number
    region: string
    capital: string
}

export function DisplayCountries(props: DisplayProps) {
    return(
        <Link href={`/${props.name}`} className={styles.card}>
            <img src={props.flag} alt={props.alt}/>
            <div className={styles.country_info}>
                <h2>{props.name}</h2>
                <div>
                    <p><span>Population:</span> {props.population}</p>
                    <p><span>Region:</span> {props.region}</p>
                    <p><span>Capital:</span> {props.capital}</p>
                </div>
            </div>
        </Link>
    )
}