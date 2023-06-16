import styles from '../styles/RegionSelect.module.css';

interface SelectProps {

}

export function RegionSelect(props: SelectProps) {
    return(
        <select className={styles.select} name='regions' id='regions'>
            <option defaultValue='' disabled hidden>Filter by region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>  
            <option value='asia'>Asia</option>  
            <option value='europe'>Europe</option>  
            <option value='oceania'>Oceania</option>  
        </select>
    )
}