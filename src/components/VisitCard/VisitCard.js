import React from 'react'
import styles from './VisitCard.module.scss'
import Button from '../Button/Button'

function VisitCard() {
  return (
    <section className={styles.visitCard}>
      <div>
        <h2>Neurology visit</h2>
        <p>September 14, 2021</p>
        <Button>Check in</Button>
        <hr />
        <div>
          <div>
            <p>Check-in</p>
            <p>2:45 PM PST</p>
          </div>
          <div>
            <p>Visit start</p>
            <p>3:00 PM PST</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitCard
