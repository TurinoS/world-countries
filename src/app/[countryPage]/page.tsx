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

  console.log(countryData)
  
  return (
    <main className={styles.main}>
      <button>Back</button>
      <div className={styles.container}>
        <img src={countryData[0].flags.png} alt={countryData[0].flags.alt} />
        <div className={styles.info}>
          <h2>{countryData[0].name.common}</h2>
          <div>
            <p><span>Native name:</span></p>
            <p><span>Population:</span></p>
            <p><span>Region:</span></p>
            <p><span>Sub region:</span></p>
            <p><span>Capital:</span></p>
            <p><span>Currencies:</span></p>
            <p><span>Languages:</span></p>
          </div>
        </div>
      </div>
    </main>
  )
}
