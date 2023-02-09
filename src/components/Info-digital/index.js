import { getApiPanel } from "../../config/apiService";
import { useState, useEffect } from "react";
import "./info_digital.scss"
const Panel = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    arrayApiPanel();
  }, []);
  const arrayApiPanel = async () => {
    let res = await getApiPanel();
    if (res && res.data && res.data.length > 0) {
      res.data.map(item => {
        if(item.path==="st-digital"){
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
            <h1 className="title-head">ST Digital </h1>
            <div className="wpb_text_column wpb_content_element ">
              <div className="wpb_wrapper">
                <p>
                  <strong>ST Digital</strong> offers professional offshore
                  digital marketing services that can make your business stand
                  out from the digital crowd. Our digital marketing services
                  range from search engine optimisation (SEO), social media
                  services, email marketing services, content outsourcing, and
                  graphic design services, which aids in creating organic
                  engagement and direct traffic towards your website and its
                  content. Through partnering with ST, we can help you create a
                  good lasting impression online and give you an edge over your
                  top competitors!
                </p>
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
