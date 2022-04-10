import React from 'react'
import { CategoryItem } from '../types'



export const TokenHeading: React.FC<{
  categories: CategoryItem[]
  category: CategoryItem
  setCategory: (value: any) => void
}> = ({ categories, setCategory, category }) => {
  return (
    <div className="tokenHeaderWrapper">
      <div className="tokenHeader">
        <h2>Токены Everscale</h2>
        <div className="filters">
          {categories.map((el, i) => (
            <button
              style={{
                background:
                  el.title === category.title
                    ? 'linear-gradient(200deg, #B380FD 12%, #6347F5 78%)'
                    : undefined,
                color: el.title === category.title ? 'white' : '#93949D',
              }}
              onClick={() => setCategory(categories[i])}
              key={i}
            >
              {el.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
