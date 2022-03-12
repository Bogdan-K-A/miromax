import React from 'react'
import Header from './component/Header/Header'
import ListFilm from './component/ListFilm/ListFilm'
import { days, month } from './refs/nameDayMonth'
import Container from './component/container'

function App() {
  const data = new Date()

  const nowDate = (data) => {
    return `${days[data.getDay()]} ${data.getDate()} ${month[data.getMonth()]}`
  }

  return (
    <Container>
      <Header date={nowDate(data)} />
      <ListFilm date={data} />
    </Container>
  )
}

export default App
