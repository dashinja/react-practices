import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [currentAmount, setCurrentAmount] = useState<number>(0)

  return (
    <div className={styles.myCenter}>
      <h3>Main Page</h3>

      <form>
        <label htmlFor='initial-amount'>Choose an Initial Number</label>
        <br />
        <input
          id='initial-amount'
          type={'text'}
          onChange={(e) => {
            !Number.isNaN(parseInt(e.target.value)) ? setCurrentAmount(parseInt(e.target.value)) : setCurrentAmount(0)
          }}
          value={currentAmount}
        />
        <br />

        <button
          onClick={(e): void => {
            e.preventDefault()
            const newAmount = currentAmount + 1
            setCurrentAmount(newAmount)
          }}
        >
          +1 Value
        </button>

        <button
          onClick={(e): void => {
            e.preventDefault()
            const newAmount = currentAmount - 1
            setCurrentAmount(newAmount)
          }
          }
        >
          -1 Value
        </button>


        <button
          onClick={(e) => {
            e.preventDefault()
            console.log("I'm clicked")
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
