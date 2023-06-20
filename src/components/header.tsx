import styles from '../styles/Header.module.css';
import { Saira_Stencil_One } from 'next/font/google';

const saira = Saira_Stencil_One({ 
    weight: ['400'],
    subsets: ['latin'] 
})

export function Header() {
    return(
        <header className={styles.header}>
            <a href='/' className={saira.className}>World Countries</a>
        </header>
    )
}