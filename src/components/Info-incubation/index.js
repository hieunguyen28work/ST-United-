import { getApiPanel } from "../../config/apiService";
import { useState, useEffect } from "react";
import "./info-incubation.scss"
const Panel = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    arrayApiPanel();
  }, []);
  const arrayApiPanel = async () => {
    let res = await getApiPanel();
    if (res && res.data && res.data.length > 0) {
      res.data.map(item=>{
        if(item.path==="st-incubation"){
          setMenu(item.child);
        }
      })
      
    }
  };
  return (
    <div className="mt-panel">
      <div className="container">
        <div className="content-top">
          <div className="page-title-left">
            <h1 className="title-head">ST INCUBATION </h1>
            <div className="wpb_text_column wpb_content_element ">
              <div className="wpb_wrapper">
              <p className="p1"><span className="s1">After long time working in software development outsourcing industry, founders of <strong>ST United</strong> still keep intense aspiration how to apply the high technologies to solve the society problem in Vietnam.</span></p>
              <p className="p1"><span className="s1">Beginning as a provider of co-working spaces with <strong>IoT Space</strong> and Nomad Space in Danang, <strong>ST United</strong> would like to support the startup and ICT community. &nbsp; Moreover, <strong>ST United</strong> &nbsp;provides incubator programs for budding entrepreneurs. The program focuses on providing resources and support for startups in terms of business modeling, market penetration and even product development.</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {menu.length>0 && menu.map(item=>
            <div className="module-item col-4" key={item.id}>
            <div className="service-block">
              <div className="block-icon">
                <img src={item.image} alt={item.id}/>
              </div>
              <div className="block-content">
                <h3>{item.name}</h3>
                <p>{item.const}</p>
              </div>
            </div>
          </div>   
          )}
        </div>
      </div>
    </div>
  );
};

export default Panel;
