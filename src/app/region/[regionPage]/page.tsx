"use client"

import styles from '../../../styles/page.module.css';
import Regions from '@/components/Regions';
import { usePathname } from 'next/navigation';
import { DisplayCountries } from '@/components/display-countries';

const getRegionCountries = async (region: string) => {   
    
    const data = await fetch(`https://restcountries.com/v3.1/${region}`);
  
    if(!data.ok) {
      return []
    }
    
    return await data.json()
  };

  export default async function RegionPage() {

    const pathname = usePathname();
    const data = await getRegionCountries(pathname)
    console.log
    
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