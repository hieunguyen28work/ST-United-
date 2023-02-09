import clsx from "clsx";
import styles from './StSoftware.module.scss';
import { useState, useEffect } from "react";
import { getStSoftwareApi } from "../../config/apiService";
import { Link } from "react-router-dom";
const StSoftware = () => {
    const [data, setData] = useState( [] );
    useEffect( () => {
        getData();
    },[])
    const getData = async () => {
        const res = await getStSoftwareApi().catch( ( err ) => {
            console.log( "ERROR", err );
        } );
        setData( res.data );

    };
    return (
      <div className={clsx(styles["St-software"], "container")}>
        <div className={clsx("row", styles["st-inner"])}>
          {data.map((item, index) => (
            <div key={index} className={clsx(styles["item"], "col-md-4 col-sm-12")}>
              <div className={clsx(styles["item-inner"], "row")}>
                <div className={clsx(styles["icon"], "col-md-3 col-sm-3")}>
                  <i className={item.icon}></i>
                </div>
                <div className={clsx(styles["content"], "col-md-9 col-sm-9")}>
                    <h3>{ item.title }</h3>
                    <p>{ item.text }</p>
                    <Link to="">See More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
export default StSoftware;
