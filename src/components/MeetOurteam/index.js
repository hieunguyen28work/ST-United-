import clsx from "clsx";
import styles from "./MeetTeam.module.scss";
import { useEffect, useState } from "react";
import { getMeetOurteam } from "../../config/apiService";

export const MeetOurTeamUS = () => {
  const [meetTeams, setMeetTeams] = useState([]);
  useEffect(() => {
    getMeetOurTeamUsApi();
  }, []);
  const getMeetOurTeamUsApi = async () => {
    const res = await getMeetOurteam();
    if (res && res.data && res.data.length > 0) {
      setMeetTeams(res.data);
    } else {
      console.log("fail");
    }
  };
  return (
    <>
      <div className={clsx(styles.wrapperMeetOurTeam, "container")}>
        <div className={clsx(styles.meetBuild, "row")}>
          {meetTeams.map((meetTeam) => (
            <div
              className={clsx(styles.meetMain, "col-sm-3")}
              key={meetTeam.id}
            >
              <div className={clsx(styles.meetContent)}>
                <div className={clsx(styles.imagefull)}>
                  <img src={meetTeam.image} alt={meetTeam.id}/>
                </div>
                <div className={clsx(styles.meetName)}>
                  <h2>{meetTeam.name}</h2>
                </div>
                <div className={clsx(styles.meetPosition)}>
                  <p>{meetTeam.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
