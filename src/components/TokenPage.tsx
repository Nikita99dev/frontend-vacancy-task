import React from 'react'
import { ITokenPage } from '../types'

export const TokenPage: React.FC<ITokenPage> = ({ setLocation, icons, name }) => {
  return (
    <div>
      <div
        className='tokenPage'
        onClick={() => setLocation(-1)}
      >
        <div className="icon">{icons.tokens}</div>
        <div className="icon">{'Токены'}</div>
      </div>
      <h1>{name}</h1>
    </div>
  )
}
