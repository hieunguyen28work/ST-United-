import styles from './Banner.module.scss'
import clsx from 'clsx'
import { useEffect, useState } from 'react';
import { getBannersApi } from '../../config/apiService';

const Banner = () => {
  const [data, setData] = useState([]);
  const href = window.location.pathname;
  useEffect(() => {
    fetchData();
  }, [href]);

  const fetchData = async () => {
    const response = await getBannersApi().catch((err) => {
      console.log("ERROR", err);
    });
    let arr = [];
    response.data.map((item) => {
      if (item.link === href) {
        arr = item;
      }
    });
    setData(arr);
  };
  return (
    <div
      className={clsx(styles.Banner, "row")}
      style={{
        backgroundImage: data.background,
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles["text-content"]}>
        <h2 className={styles.title}>{data.title}</h2>
        <h4 className={styles.sub_title}>{data.sub_title}</h4>
      </div>
    </div>
  );
};
export default Banner