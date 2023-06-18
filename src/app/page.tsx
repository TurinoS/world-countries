import styles from '../styles/page.module.css';
import { SearchInput } from '@/components/search-input';
import { RegionSelect } from '@/components/region-select';
import { DisplayCountries } from '@/components/display-countries';

const getData = async () => {   
    
  const data = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags,population,region`);

  if(!data.ok) {
    return []
  }
  
  return await data.json() 
};

export default async function Home() {

  const data = await getData()

  return (
    <main className={styles.main}>
      <div className={styles.filter}>
        <SearchInput />
        <RegionSelect />
      </div>

      <div className={styles.container}>
        {data.map((country: any) => (
          <DisplayCountries 
            key={country.population}
            flag={country.flags.png}
            alt={country.flags.alt}
            name={country.name.common} 
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </main>
  )
}
