import styles from '../styles/Header.module.css';
import { Saira_Stencil_One } from 'next/font/google';

const saira = Saira_Stencil_One({ 
    weight: ['400'],
    subsets: ['latin'] 
})

interface HeaderProps {

}

export function Header(props: HeaderProps) {
    return(
        <header className={styles.header}>
            <a href='/' className={saira.className}>World Countries</a>
        </header>
    )
}