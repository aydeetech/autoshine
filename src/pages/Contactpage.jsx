// import necessary modules and assets
import { Row, Col } from "react-bootstrap";
import "../Style/contact.css";
import callIcon from "../assets/images/call.png";
import mailIcon from "../assets/images/mail.png";
import mapIcon from "../assets/images/map.png";
import twitterIcon from "../assets/images/twitter.png";
import igIcon from "../assets/images/ig.png";
import fbIcon from "../assets/images/fb.png";
import ytIcon from "../assets/images/yt.png";
import phoneIcon from "../assets/images/phone.svg";
import { map } from "leaflet";

// ContactPage component
const ContactPage = () => {
  return (
    <div className="my-5 container d-flex align-items-center">
      <div>

 
      <div className="text-center d-lg-none d-block">
      <h3>Contact Us</h3>
      <p className="w-50 m-auto mb-4">Any question or remarks? Just write us a message!</p>
      </div>
        <div className="general-div d-lg-flex  justify-content-between">

   
      <div className="general-div1">
      <div className="design-div"></div>
      <div className="design-div1"></div>
        <div className="d-lg-none  text-center py-3">
          <h3>Contact Information</h3>
          <p>Say something to start a live chat!</p>
          <div>
            <img src={callIcon} alt="" />
            <p>(229) 555-0109</p>
          </div>
          <div>
            <img src={mailIcon} alt="" />
            <p>Autoshine@gmail.com</p>
          </div>
          <div>
            <img src={mapIcon} alt="" />
            <p className="w-75 m-auto">4517 Wahington Ave. Manchester, Kentucky 39495</p>
          </div>

          <div className="d-flex justify-content-center gap-4 my-4">
            <img src={twitterIcon} alt="" />
            <img src={igIcon} alt="" />
            <img src={fbIcon} alt="" />
            <img src={ytIcon} alt="" style={{zIndex:"1"}}/>
          </div>
        </div>

        <div className="d-none d-lg-flex align-items-center p-3">
            <div>
          <h3>Contact Us</h3>
          <p className="p-1">
            If you have any complains about our website or technicians complete
            a form and we will contact you shortly
          </p>
         
          <div className="" style={{marginTop:"5rem", marginBottom:"5rem"}}>
          <p className="my-5">
              <img src={callIcon} alt="" className="me-4"/>
              (229) 555-0109
            </p>
            <p className="my-5">
              <img src={mailIcon} alt="" className="me-4"/>
              demo@gmail.com
            </p>
            <p className="d-flex align-items-start gap-4 my-5">
              <img src={mapIcon} alt="" className="me-2 mt-2"/>
              <div>4517 Washington Ave, Manchester, Kentucky 39495</div>
            </p>
           
          </div>
          <div className="d-flex gap-4 mt-5">
            <img src={twitterIcon} alt="" className="text-dark" />
            <img src={igIcon} alt="" />
            <img src={fbIcon} alt="" />
            <img src={ytIcon} alt="" />
          </div>
        </div>
      </div>
      
      </div>
      <div className="general-div2">
        <form action="" className="">
          <div className="row justify-content-center ">
            <div className="col-12 col-lg-6">
              <label htmlFor="" className="d-block contact-label">
                First Name
              </label>
              <input type="text" className="w-100 contact-input" placeholder="John" />
            </div>
            <div className="col-12 col-lg-6">
              <label htmlFor="" className="d-block contact-label">
                Last Name
              </label>
              <input type="text" className="w-100 contact-input" placeholder="Doe" />
            </div>
            <div className="col-12 col-lg-6">
              <label htmlFor="" className="d-block contact-label">
                Email
              </label>
              <input
                type="text"
                className="w-100 contact-input"
                placeholder="johnd@gmail.com"
              />
            </div>
            <div className="col-12 col-lg-6">
              <label htmlFor="" className="d-block contact-label">
                Phone number
              </label>
              <input
                type="text"
                className="w-100 contact-input"
                placeholder="+234 903 3423 210"
              />
            </div>
            <div className="d-none d-lg-block col-12 col-lg-12">
              <label htmlFor="" className="d-block contact-label">
                Message
              </label>
              <input type="text" className="w-100 contact-input" placeholder="Message" />
            </div>
          </div>
          <h3 className="subject">Select Subject?</h3>
          <div className="row">
            <div className="col-5 col-lg-3 my-lg-4 my-2">
              <input type="checkbox" className="me-1"/>
              <label htmlFor="">General Inquiry</label>
            </div>
            <div className="col-5 col-lg-3 my-lg-4 my-2">
              <input type="checkbox" className="me-1"/>
              <label htmlFor="">General Inquiry</label>
            </div>
            <div className="col-5 col-lg-3 my-lg-4 my-2">
              <input type="checkbox" className="me-1"/>
              <label htmlFor="">General Inquiry</label>
            </div>
            <div className="col-5 col-lg-3 my-lg-4 my-2">
              <input type="checkbox" className="me-1"/>
              <label htmlFor="">General Inquiry</label>
            </div>
          </div>
          <div className="d-block d-lg-none my-5">
              <label htmlFor="" className="d-block contact-label">
                Message
              </label>
              <input type="text" className="w-100 contact-input" placeholder="Write your message.." />
            </div>
          <button className="button">
            Send Message
          </button>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
