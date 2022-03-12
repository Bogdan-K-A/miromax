import api from '../../service/movie.json'
import { month } from '../../refs/nameDayMonth'
import s from './CardFilm.module.css'

const CardFilm = ({ date }) => {
  let today = 'Cегодня'
  const presentDay = `${today}, ${date.getDate()} ${month[date.getMonth()]}`

  return (
    <div>
      <ul className={s.CardList}>
        {api.map(({ id, src, title, genres, age }) => (
          <li key={id}>
            <img src={src} alt={title} />
            <h2>{title}</h2>
            <ul>
              <li>{age}</li>
              <li>{genres}</li>
            </ul>
            <h4>{presentDay}</h4>
            <ul>
              <li>
                <p>13:20</p>
                <p>160 грн</p>
              </li>
            </ul>
            <h5>Следующий сеанс</h5>
            <a href="">стрелка в лево</a>
            <a href="">стрелка в право</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardFilm
