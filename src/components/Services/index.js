import clsx from "clsx";
import { getServices } from "../../config/apiService";
import { useState, useEffect } from "react";
import styles from "./Service.module.scss";
import { Link } from "react-router-dom";

export const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServiceApi();
  }, []);
  const getServiceApi = async () => {
    const res = await getServices();
    if (res && res.data && res.data.length > 0) {
      setServices(res.data);
    } else {
      console.log("fail");
    }
  };

  return (
    <>
      <div className={clsx(styles.wrapperService)}>
        <div className={styles.serviceTop}>
          <h2 id={styles.titleTop}>WE DEVELOP | WE SUPPORT | WE IMPROVE</h2>
          <h3 id={styles.titleBot}>
            Launch your ideas. Execute your plans. Maximize project success
          </h3>
        </div>
        <div className={clsx(styles.serviceBot, "container")}>
          <div className="row">
            {services.map((service) => (
              <div
                className={clsx(styles.serviceMain, "col-md-4")}
                key={service.id}
              >
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.id}/>
                </div>
                <div className={styles.serviceTitle}>
                  <h2>{service.title}</h2>
                </div>
                <div className={styles.serviceDescription}>
                  <p>{service.description}</p>
                </div>
                <div className={styles.serviceSeemore}>
                  <p>
                    <Link to="">See More </Link>
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
