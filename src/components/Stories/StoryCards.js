/* eslint-disable jsx-a11y/img-redundant-alt */
import clsx from "clsx";
import styles from "./Stories.module.scss";

const StoryCards = (props) => {
  return (
    <div className="row">
      {props.stories.map((story) => (
        <div key={story.id} className={clsx(styles.card, "col-lg-3 col-md-6 col-sm-12")}>
          <div className={clsx(styles.innnerCard)}>
            <img src={story.image} alt="No Image" />
            <div className={clsx(styles["content-Before"])}>
              <div className={clsx(styles["caption-inner"], "text-center")}>
                <h4 className={styles.captionName}>{story.name}</h4>
                <p className={styles.hashTag}>{story.hashtag}</p>
                <ul className={styles.social}>
                  <li>
                    <a href="https://www.facebook.com/stunited.vn/">
                      <i className="fa-brands fa-square-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/stunited.vn/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["content-After"]}>
              <div className={styles["caption-inner"]}>
                <h4 className={styles.captionName}>{story.name}</h4>
                <p className={styles.hashTag}>{story.hashtag}</p>
                <p className={styles.captionText}>{story.description}</p>
                <ul className={styles.social}>
                  <li>
                    <a href="https://www.facebook.com/stunited.vn/">
                      <i className="fa-brands fa-square-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/stunited.vn/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryCards;
