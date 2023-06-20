'use client'

import styles from '../styles/page.module.css';
import { DisplayCountries } from '@/components/display-countries';
import Regions from '@/components/Regions';

const getData = async () => {   
    
  const data = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`);

  if(!data.ok) {
    return []
  }
  
  return await data.json() 
};

export default async function Home() {
    
  let data = await getData()

  return (
    <main className={styles.main}>
      <Regions />

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
