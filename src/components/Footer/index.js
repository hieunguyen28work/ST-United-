import clsx from "clsx";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getApiMenu } from "../../config/apiService";
import BackTopBtn from "../BackTopBtn";

const Footer = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    arrayApiMenu();
  }, []);

  const arrayApiMenu = async () => {
    let res = await getApiMenu();
    if (res && res.data && res.data.length > 0) {
      setMenu(res.data);
    }
  };
  const checkChildMenu = (data) => {
    if (data && data.length > 0) {
      let res = data.map((item) => {
        if (item.childMenu && item.childMenu.length > 0) {
          return (
            <li key={item.id} className="menu_item">
              <Link to={`/${item.path}`}>{item.name}</Link>
              <ul className={clsx(styles.sub_menu)}>
                {checkChildMenu(item.childMenu)}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={item.id} className="menu_item">
              <Link to={`/${item.path}`}>{item.name}</Link>
            </li>
          );
        }
      });
      return res;
    }
  };

  return (
    <footer className={clsx(styles.footer_section)}>
      <BackTopBtn />
      <div className={clsx(styles.footer)}>
        <div className={clsx(styles.footer_container)}>
          <div className={clsx(styles.footer_row)}>
            <div
              className={clsx(
                styles.footer_content,
                "col-md-4",
                "col-sm-12",
                "col-xs-12"
              )}
            >
              <div id="nav_menu-4" className={clsx(styles.widget_pages)}>
                <div className="widget-top">
                  <h3 className={clsx(styles.widget_title)}>MENU</h3>
                </div>
                <div className="menu-main-menu-container">
                  <ul id="menu-main-menu" className={clsx(styles.menu)}>
                    {checkChildMenu(menu)}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                styles.footer_content,
                "col-md-4",
                "col-sm-12",
                "col-xs-12"
              )}
            >
              <div
                id="houzez_contact-3"
                className="footer-widget widget-contact"
              >
                <div>
                  <h3 className={clsx(styles.widget_title)}>CONTACT US</h3>
                </div>
                <div className={clsx(styles.widget_body)}>
                  <div className={clsx(styles.contact_text)}>Nomad Space</div>
                  <ul className={clsx(styles.list_unstyled)}>
                    <li>
                      <i className="fa fa-location-arrow"></i> 14 An Thuong 18,
                      Danang
                    </li>
                    <li>
                      <i className="fa fa-phone"></i> Call us +84 905 610 229
                    </li>
                    <li>
                      <i className="fa-regular fa-envelope"></i>
                      <a href="mailto:info@stdsoftware.com">
                        info@stdsoftware.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                styles.footer_content,
                "col-md-4",
                "col-sm-12",
                "col-xs-12"
              )}
            >
              <div className={clsx(styles.footer_right)}>
                <div className={clsx(styles.st_photo)}>
                  <div className={clsx(styles.lop_phu)}></div>
                  <img alt="no" src="https://i.imgur.com/ucr4cPz.jpg" />
                </div>
                <div className={clsx(styles.clear_fix)}>
                  <div className={clsx(styles.clear_top)}>
                    <Link
                      className="_3-8_ lfloat"
                      href="https://www.facebook.com/106430790712933"
                    >
                      <img
                        className="_1drn _-s img"
                        src="https://i.imgur.com/QfodwQs.jpg"
                        height="50"
                        width="50"
                        alt="no-1"
                      />
                    </Link>
                    <div className="lfloat">
                      <div>
                        <Link href="https://www.facebook.com/106430790712933">
                          ST United
                        </Link>
                      </div>
                      <div className={clsx(styles.followers)}>
                        1,695 followers
                      </div>
                    </div>
                  </div>
                  <div className={clsx(styles.clear_bottom)}>
                    <div className={clsx(styles.left)}>
                      <div className={clsx(styles.follow_page)}>
                        <Link src="https://www.facebook.com/106430790712933">
                          <i className="fa-brands fa-square-facebook"></i>
                          Follow Page
                        </Link>
                      </div>
                    </div>
                    <div className={clsx(styles.right)}>
                      <div className={clsx(styles.contact_us)}>
                        <Link>
                          <i className="fa-solid fa-envelope"></i>
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.footer_bottom)}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={clsx(styles.footer_col)}>
                <p>Copyright © 2019 by ST United.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
