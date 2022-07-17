import React, { useState } from 'react'
import css from './styles.module.css'
import { data, divisions } from '@data/index'
import cn from 'classnames'

export const Filter = ({ setFighters }) => {
  const [current, setCurrent] = useState(null)

  const filter = division => {
    if (current === division) {
      setCurrent(null)
      setFighters(data)
    } else {
      setFighters(
        data.filter(fighter => {
          return fighter.division.includes(division)
        }),
      )
      setCurrent(division)
    }
  }

  console.log(current)

  return (
    <ul className={css.container}>
      {divisions.map(division => {
        const isActive = current === division
        return (
          <li key={division} className={css.item}>
            <button
              onClick={() => filter(division)}
              className={cn(css.btn, isActive && css.active)}
            >
              {division}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
