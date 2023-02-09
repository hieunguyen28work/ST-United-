import styles from "./Sliders.module.scss";
import clsx from "clsx";
import img from "../../asset/images/1566375726229.jpeg";
function Sliders() {
  return (
    <div className={clsx(styles.sliders, "row")}>
      <div className={styles["inner-content"]}>
        <div className={clsx(styles["slide"])}>
          <div className={styles["over-lay"]}></div>
          <img className={styles["slide-img"]} src={img} alt={img} />
          <div className={clsx(styles["btn-switch"], styles["switch-lert"])}>
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className={clsx(styles["btn-switch"], styles["switch-right"])}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div className={styles["btn-visit"]}>
            <a href="/">Collaborate to kick-start your software project</a>
          </div>
          <div className={styles["bullet-group"]}>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-regular fa-circle"></i>
            <i className="fa-regular fa-circle"></i>
            <i className="fa-regular fa-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sliders;
