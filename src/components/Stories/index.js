import clsx from "clsx";
import styles from "./Stories.module.scss";
import { useEffect, useState } from "react";
import { storiesApi } from "../../config/apiService";
import StoryCards from "./StoryCards";

const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    getStories();
  }, []);
  const getStories = async () => {
    const res = await storiesApi();
    if (res && res.data && res.data.length > 0) {
      let arr = [];
      res.data.map((item) => {
        if (item.status === 1) {
          arr.push(item);
        }
        return "ok";
      });
      return setStories(arr);
    } else {
      console.log("Stories have no data");
    }
  };
  return (
    <div className={clsx(styles.stories, "container")}>
      <div className="row">
        <div className={clsx(styles.heading, "text-center")}>
          <h2>Typical successful stories</h2>
          <h3 className={clsx(styles.sub)}>
            From ideas turned into carefully crafted pixels and problems crafted
            into solutions.
          </h3>
        </div>
        <StoryCards stories={stories} />
      </div>
    </div>
  );
};
export default Stories;
