import styles from '../styles/Footer.module.css';
import { Saira_Stencil_One } from 'next/font/google';

const saira = Saira_Stencil_One({ 
    weight: ['400'],
    subsets: ['latin'] 
})

export function Footer() {
    return(
        <footer className={styles.footer}>
            <p>Desenvolvido por <span className={saira.className}>Paulo Turino</span>.</p>
        </footer>
    )
}