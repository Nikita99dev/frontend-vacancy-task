import React from 'react'

interface ITokenPage {
  setLocation: React.Dispatch<React.SetStateAction<number>>
  icons: {
    tokens: JSX.Element
    search: JSX.Element
  }
  name: string
}
export const TokenPage: React.FC<ITokenPage> = ({
  setLocation,
  icons,
  name,
}) => {
  return (
    <div>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}
        onClick={() => setLocation(-1)}
      >
        <div className="icon">{icons.tokens}</div>
        <div className="icon">{'Токены'}</div>
      </div>
      <h1>{name}</h1>
    </div>
  )
}
