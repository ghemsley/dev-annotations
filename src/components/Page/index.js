import React from 'react'
import Title from '../Title'
import VisitCard from '../VisitCard'
import styles from './Page.module.scss'

function Page() {
  return (
    <main className={styles.page} role='none'>
      <Title />
      <VisitCard />
    </main>
  )
}

export default Page
