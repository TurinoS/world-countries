import styles from '../styles/SearchInput.module.css';
import { BiSearch } from 'react-icons/bi';

interface InputProps {

}

export function SearchInput(props: InputProps) {
    return(
        <>
            <BiSearch className={styles.icon} />
            <input className={styles.input} type='text' name='search' id='search' placeholder='Search for a country...' />
        </>
    )
}