import React from 'react'
import Title from '../Title/Title'
import VisitCard from '../VisitCard/VisitCard'
import styles from './Page.module.scss'

function Page() {
  return (
    <main className={styles.page} aria-role='bagel'>
      <Title />
      <VisitCard />
    </main>
  )
}

export default Page
