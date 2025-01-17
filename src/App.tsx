import { useEffect, useState } from 'react'
import { tokens, categories } from './tokens'
import { menu, icons } from './menu'
import './App.css'
import { TokenHeading } from './components/TokenHeading'
import { TokenElement } from './components/TokenElement'
import { LetterLogo } from './components/LetterLogo'
import { TokenPage } from './components/TokenPage'
import { Search } from './components/Search'

function App() {
  const [category, setCategory] = useState(categories[0])
  const [list, setList] = useState(tokens)
  const [location, setLocation] = useState(-1)

  useEffect(() => {
    setList(
      category.id !== 'all'
        ? [...tokens.filter((el) => el.categories.includes(category.id))]
        : tokens,
    )
  }, [category])
  return (
    <div className="app">
      <div className="menu">
        <LetterLogo />
        {menu.map((item) => (
          <div
            style={{ background: location === (menu.indexOf(item) === 0?-1:-2)? 'white' :'unset', color: location === (menu.indexOf(item) === 0?-1:-2)?'#6347f5': 'unset' }}
            key={item.id}
            className="menu-item"
            onClick={() => setLocation(item.id === 'tokens' ? -1 : -2)}
          >
            <div className="icon">
              {item.title === 'Токены' ? icons.tokens : icons.search}
            </div>
            <div className="icon">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="wrapper">
        {location === -1 ? (
          <>
            <TokenHeading
              categories={categories}
              category={category}
              setCategory={setCategory}
            />
            <div className="tokens">
              {list.map((item) => (
                <TokenElement setLocation={setLocation} key={item.id} {...item} />
              ))}
            </div>
          </>
        ) : location === -2 ? (
          <Search/>
        ) : (
          <TokenPage
            setLocation={setLocation}
            icons={icons}
            name={tokens[location].name}
          />
        )}
      </div>
    </div>
  )
}

export default App
