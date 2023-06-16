import { SearchInput } from '@/components/search-input';
import styles from './page.module.css';
import { RegionSelect } from '@/components/region-select';
import { DisplayCountries } from '@/components/display-countries';
import { stringify } from 'querystring';

const getData = async () => {
    
  const data = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,subregion,currencies,languages,borders,alpha3Code`);

  if(!data.ok) {
    console.log(data)
  }
  
  return data.json() 
}

export default async function Home() {

  const data = await getData()

  console.log(typeof(data))

  return (
    <main className={styles.main}>
      <div className={styles.filter}>
        <SearchInput />
        <RegionSelect />
      </div>

      <DisplayCountries name={data.name} />
    </main>
  )
}
