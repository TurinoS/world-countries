import { SearchInput } from '@/components/search-input'
import styles from './page.module.css'
import { RegionSelect } from '@/components/region-select'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.filter}>
        <SearchInput />
        <RegionSelect />
      </div>
    </main>
  )
}
