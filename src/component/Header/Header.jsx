import logo from '../../images/logo.svg'
import s from './Header.module.css'
import SvgSelector from './SvgSelector'

const Header = ({ date }) => {
  return (
    <header className={s.header}>
      <div className={s.appHiderLeft}>
        <a href="/" aria-current="page" className={s.logo}>
          <img src={logo} alt="Miramax logo" />
        </a>
        <div className={s.mollPlace}>
          <SvgSelector id="location" className={s.location} />
          <h4 className={s.title}>Київ, ТРЦ Аладдін</h4>

          <div className={s.arrow}>
            <SvgSelector id="up-arrow" />
          </div>
        </div>
      </div>

      <div className={s.appHiderRight}>
        <ul className={s.headerMeta}>
          <li className={s.metaItem}>
            <button className={s.svg}>
              <SvgSelector id="filter" />
            </button>
            <h5>Фильтр</h5>
          </li>
          <li className={s.metaItem}>
            <button className={s.svg}>
              <SvgSelector id="calendar" />
            </button>

            <h5>{date}</h5>
          </li>
          <li className={s.metaItem}>
            <button className={s.svg}>
              <SvgSelector id="schedule" />
            </button>
            <h5>Расписание сеансов</h5>
          </li>
          <li className={s.metaItem}>
            <button className={s.btnLogin} type="button">
              Вход
              <SvgSelector id="user" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
