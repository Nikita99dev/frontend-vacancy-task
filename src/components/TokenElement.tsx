import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { persentageParser, stringParser } from '../helpers/StringParsing'
import { PrizeChangeMapper } from './ChangeMapper'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { IoIosArrowUp } from 'react-icons/io'
import { ITokentElement } from '../types'


export const TokenElement: React.FC<ITokentElement> = ({
  address,
  categories,
  description,
  id,
  logoURI,
  name,
  price,
  priceChange,
  symbol,
  tvl,
  tvlChangePercentage,
  users,
  volume,
  volumeChangePercentage,
  setLocation
}) => {
  const [open, setOpen] = useState(false)

  return (
      <div className="tokenElement" style={{height: open?'135px':'91px'}} >
        <div onClick={()=>setLocation(id)}>
          <h4
            style={{ color: '#93949D', fontSize: '16px', fontWeight: '300' }}
          >{`#${id}`}</h4>
        </div>
        <div style={{ marginRight: '5px', width: '70px' }}>
          <img src={logoURI}></img>
        </div>
        <div style={{ marginLeft: '5px' }} className="">
          <h3 className="title" style={{ fontSize: '18px' }}>
            {name}
          </h3>
          <h4 className="subTitle">{symbol}</h4>
        </div>
        <div className="priceC">
          <h4 className="title" style={{ color: '#6347f5', marginBottom: '2px' }}>{`${price} $`}</h4>
          <PrizeChangeMapper {...priceChange} />
          {}
        </div>
        <div className="inlineItem">
          <h4 className="title">{`${stringParser(volume)} $`}</h4>
          <h4 className="title percents">{persentageParser(volumeChangePercentage)}</h4>
        </div>
        <div className="inlineItem">
          <h4 className="title">{`${stringParser(tvl)} $`}</h4>
          <h4 className="title percents">{persentageParser(tvlChangePercentage)}</h4>
        </div>
        <div className="inlineItem" style={{flexWrap: 'nowrap'}}>
          <MdOutlinePeopleAlt style={{ marginRight: '5px', color: '#6347f5' }} />
          <h4 className="title">{stringParser(users)}</h4>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            float: 'right',
            marginRight: '5px',
          }}
        >
          <button
            style={{ height: '20px', borderStyle: 'hidden', background: '#FFFFFF' }}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <IoIosArrowUp style={{ color: '#6347f5', fontSize: '25' }} />
            ) : (
              <IoIosArrowDown style={{ color: '#6347f5', fontSize: '25' }} />
            )}
          </button>
        </div>
        {open && <div className='lastItem title'>{description}</div>}
      </div>
  )
}
