import Link from 'next/link';
import styles from '../../styles/CountryPage.module.css';

const getData = async (name: string) => {   
    
  const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if(!data.ok) {
    return []
  }
  
  return await data.json()
};

export default async function CountryPage() {

  const countryData = await getData('brazil')

  const countryInfo = [
    countryData[0].name.official, 
    countryData[0].population, 
    countryData[0].region,
    countryData[0].subregion,
    countryData[0].capital,
    countryData[0].demonyms.eng.m,
    countryData[0].borders,
    countryData[0].name.common,
  ]

  console.log(countryData[0])
  
  return (
    <main className={styles.main}>
      <button>Back</button>
      <div className={styles.container}>
        <img src={countryData[0].flags.png} alt={countryData[0].flags.alt} />
        <div className={styles.info}>
          <h2>{countryData[0].name.common}</h2>
          <div>
            <p><span>Official name:</span> {countryInfo[0]}</p>
            <p><span>Population:</span> {countryInfo[1]}</p>
            <p><span>Region:</span> {countryInfo[2]}</p>
            <p><span>Sub region:</span> {countryInfo[3]}</p>
            <p><span>Capital:</span> {countryInfo[4]}</p>
            <p><span>Demonym:</span> {countryInfo[5]}</p>
          </div>
        </div>
        <div className={styles.borders}>
          <h4>Border countries:</h4>
          <ul>
            {countryInfo[6] ? countryInfo[6].map((item: string ) => (
              <li key={countryInfo[1]}>
                <Link href={`/${countryInfo[7]}`}>{item}</Link>
              </li>
            )) : <p>{countryInfo[0]} is an island</p>}
          </ul>
          </div>
      </div>
    </main>
  )
}
