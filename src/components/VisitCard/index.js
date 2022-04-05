import React from 'react'
import styles from './VisitCard.module.scss'
import Button from '../Button'

function VisitCard() {
  return (
    <section className={styles.visitCard}>
      <h2>Neurology visit</h2>
      <p>September 14, 2021</p>
      <Button>Check in</Button>
      <hr role='none' />
      <div>
        <p>Check-in</p>
        <p>2:45 PM PST</p>
        <p>Visit start</p>
        <p>3:00 PM PST</p>
      </div>
    </section>
  )
}

export default VisitCard
