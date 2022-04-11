export interface ITokentElement {
  id: number
  name: string
  symbol: string
  address: string
  logoURI: string
  categories: string[]
  description: string
  price: number
  priceChange: IPriceChange
  volume: number
  volumeChangePercentage: number
  tvl: number
  tvlChangePercentage: number
  users: number
  setLocation: React.Dispatch<React.SetStateAction<number>>
}

export interface IPriceChange {
  hours24: number
  days7: number
  days365: number
}

export interface CategoryItem {
  id: string
  title: string
}

export interface ITokenPage {
  setLocation: React.Dispatch<React.SetStateAction<number>>
  icons: {
    tokens: JSX.Element
    search: JSX.Element
  }
  name: string
}
