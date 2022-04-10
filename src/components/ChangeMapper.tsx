import React from 'react'
import { IPriceChange } from '../types'

export const PrizeChangeMapper: React.FC<IPriceChange> = ({
  days365,
  days7,
  hours24,
}) => {
  return (
    <div className='priceChangeBlock'>
      <p className='title' style={{ color: hours24 > 0 ? 'green' : 'red', marginBlock: '5px'}}>{ hours24 > 0 ? `+${hours24}%`:`${hours24}%` }</p>
      <p className='title priceChange'>&#183;</p>
      <p className='title' style={{ color: days7 > 0 ? 'green' : 'red', marginBlock: '5px'}}>{days7 > 0 ? `+${days7}%`:`${days365}%` }</p>
      <p className='title priceChange'>&#183;</p>
      <p className='title' style={{ color: days365 > 0 ? 'green' : 'red', marginBlock: '5px' }}>{days365 > 0 ? `+${days365}%`:`${days365}%` }</p>
    </div>
  )
}
