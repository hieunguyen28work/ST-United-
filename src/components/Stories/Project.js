import clsx from "clsx";
import styles from "./Stories.module.scss";
import { useEffect, useState } from "react";
import { getProjectApi } from "../../config/apiService";
import StoryCards from "./StoryCards";

const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    getStories();
  }, []);
  const getStories = async () => {
    const res = await getProjectApi();
    if (res && res.data && res.data.length > 0) {
      return setStories(res.data);
    } else {
      console.log("Stories have no data");
    }
  };
  return (
    <div className={clsx(styles.stories, "container")}>
      <div className="row">
        <div className={clsx(styles.heading, "text-center")}>
          <h2>Our incubating projects</h2>
          <h3 className={clsx(styles.sub)}>
            We are supporting for these cool teams
          </h3>
        </div>
        <StoryCards stories={stories} />
      </div>
    </div>
  );
};
export default Stories;
