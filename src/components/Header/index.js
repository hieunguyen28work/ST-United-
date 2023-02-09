import clsx from "clsx";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getApiMenu } from '../../config/apiService'

function Header() {
  const [menu, setMenu] = useState([])
  const [checkMenu, setCheckMenu] = useState(true)
  const [clickList, setClickList] = useState(true)

  useEffect(() => {
    arrayApiMenu();
  }, [])
  useEffect(() => {
    setClickList(true);
  }, [checkMenu])

  const arrayApiMenu = async () => {
    let res = await getApiMenu();
    if (res && res.data && res.data.length > 0) {
      setMenu(res.data)
    }
  }
  const checkChildMenu = (data) => {
    if (data && data.length > 0) {
      let res = data.map(item => {
        if (item.childMenu && item.childMenu.length > 0) {
          return (
            <li key={item.id} className={clickList ? clsx(styles.our_programme) : clsx(styles.our_programme, styles.our_close)}
              onClick={() => setClickList(!clickList)}>
              <ul className={clsx(styles.menu_our, styles.sub_menu)}>{checkChildMenu(item.childMenu)}</ul>
              <Link to={checkMenu ? `/${item.path}` : ""}>{item.name}</Link>
            </li>
          )
        }
        else {
          return <li key={item.id}>
            <Link to={`/${item.path}`} aria-current="page">{item.name}</Link>
          </li>
        }
      }
      )
      return res
    }
  }
  const checkChildResponsive = (data) => {
    if (data && data.length > 0) {
      let res = data.map(item => {
        if (item.childMenu && item.childMenu.length > 0) {
          return (
            <li key={item.id} className={clickList ? clsx(styles.programme) : clsx(styles.our_programme, styles.us_close)}
              onClick={() => setClickList(!clickList)}>
              <Link to={checkMenu ? `/${item.path}` : ""}>{item.name}</Link>
              <ul>{checkChildResponsive(item.childMenu)}</ul>
            </li>
          )
        }
        else {
          return <li key={item.id}>
            <Link to={`/${item.path}`} aria-current="page">{item.name}</Link>
          </li>
        }
      }
      )
      return res
    }
  }
  return (
    <header className={clsx(styles.header)} id="header" onMouseLeave={()=>setCheckMenu(true)}>
      <div className={clsx(styles.content, 'container')}>
        <input type="checkbox" className={clsx(styles.click_menu)} hidden id="click-menu" />
        <div className={clsx(styles.y_middle, "row")}>
          <div className={clsx(styles.menu)}>
            <label onClick={() => setCheckMenu(!checkMenu)} className={clsx(styles.icon_menu, "fa-solid", "fa-bars")} htmlFor="click-menu"></label>
          </div>
          <div className={clsx(styles.logo)}>
            <Link to="/">
              <img alt="logo" src="https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png" />
            </Link>
          </div>
          <div className={checkMenu ? clsx(styles.text_end, styles.m_menu) : clsx(styles.text_end, styles.m_menu, styles.m_close)}>
            <nav className={clsx(styles.rs_menu_area, "rs-menu")}>
              <ul className={clsx(styles.nav_menu, "ul-main")}>
                {checkMenu?checkChildMenu(menu):checkChildResponsive(menu)}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
