import clsx from "clsx";
import styles from "./ContentJoin.module.scss";
import { useEffect, useState } from "react";
import { getJoinApi } from "../../config/apiService";
import { Link } from "react-router-dom";

export const JoinUS = () => {
  const [joinus, setJoinUs] = useState([]);
  useEffect(() => {
    getJoinUsApi();
  }, []);
  const getJoinUsApi = async () => {
    const res = await getJoinApi();
    if (res && res.data && res.data.length > 0) {
      setJoinUs(res.data);
    } else {
      console.log("fail");
    }
  };
  return (
    <>
      <div className={clsx(styles.wrapperJoin)}>
        <div className={styles.joinTop}>
          <p id={styles.titleTop}>
            Building a startup is hard, so we build a family to make it more
            enjoyable.
          </p>
        </div>
        <div className={clsx(styles.joinBot, "container")}>
          <div className={clsx(styles.joinBuild, "row")}>
            {joinus.map((join) => (
              <div className={clsx(styles.joinMain, "col-md-3")} key={join.id}>
                <div className={styles.joinImage}>
                  <img src={join.image} alt={join.id}/>
                </div>
                <div className={styles.joinTitle}>
                  <h2>{join.title}</h2>
                </div>
                <div className={styles.joinDescription}>
                  <p>{join.description}</p>
                </div>
                <div className={styles.joinSeemore}>
                  <p>
                    <Link to="">Interesting? </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
