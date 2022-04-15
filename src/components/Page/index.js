import React from 'react'
import Title from '../Title'
import VisitCard from '../VisitCard'
import styles from './Page.module.scss'

function Page() {
  return (
    <main className={styles.page} id='main'>
      <Title />
      <VisitCard />
    </main>
  )
}

export default Page
