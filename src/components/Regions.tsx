import Link from 'next/link'
import styles from '../styles/Regions.module.css'

export default function Regions() {
    return(
        <section className={styles.container}>
            <h2>Filter by region:</h2>
            <div>
                <Link href='/region/Africa'>Africa</Link>
                <Link href='/region/Americas'>Americas</Link>
                <Link href='/region/Asia'>Asia</Link>
                <Link href='/region/Europe'>Europe</Link>
                <Link href='/region/Oceania'>Oceania</Link>
                <Link href='/'>World</Link>
            </div>
        </section>
    )
}