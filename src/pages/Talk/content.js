import "./content.scss";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <>
      <div className="container">
        <div className="page-title breadcrumb-top">
          <div className="row">
            <div className="col-sm-12">
              <ol className="breadcrumb">
                <li>
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li className="active">Let's talk</li>
              </ol>
              <div className="page_title_left">
                <h1 className="title-head">Let's talk </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <div className="page-main">
              <div className="white-block">
                <div className="entry-content">
                  <div className="left col-8">
                    <div className="wpb_wrapper">
                      <p>
                        <strong>ST United</strong> is always glad to hear your
                        comments regarding our services. Whether you have any
                        questions, or wish to get a quote for your project, or
                        require further information about what we can offer you,
                        please do not hesitate to contact us
                      </p>
                    </div>
                    <div>
                      <div className="form-group">
                        <label className="required" htmlFor="yourName">
                          Your Name
                        </label>
                        <br />
                        <span className="your-name">
                          <input type="text" name="your-name" size="40" />
                        </span>
                        <p></p>
                      </div>
                      <div className="form-group">
                        <label className="required" htmlFor="yourName">
                          Your Email
                        </label>
                        <br />
                        <span className="your-email">
                          <input type="text" name="your-email" size="40" />
                        </span>
                        <p></p>
                      </div>
                      <div className="form-group">
                        <label className="required" htmlFor="yourName">
                          Your Phone
                        </label>
                        <br />
                        <span className="your-name">
                          <input type="text" name="your-name" size="40" />
                        </span>
                        <p></p>
                      </div>
                      <div className="form-group">
                        <label className="required" htmlFor="yourName">
                          Subject
                        </label>
                        <br />
                        <span className="your-name">
                          <input type="text" name="your-name" size="40" />
                        </span>
                        <p></p>
                      </div>
                      <div className="form-group">
                        <label className="required" htmlFor="yourName">
                          Your Message
                        </label>
                        <br />
                        <span className="your-name">
                          <textarea type="text" name="your-name" size="40" />
                        </span>
                        <p></p>
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Send"
                          className="submit btn btn-primary btn-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right col-4">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <h4>Office</h4>
                            <p>
                              Address: Nomad Space, No.14 An Thuong 18, Danang,
                              Vietnam
                            </p>
                            <p>Hotline: (+84) 777 463 183</p>
                            <p>Email: hello(at)stunited.vn</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
