import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faEnvelope as faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { send } from 'emailjs-com';

// const nodemailer = require("nodemailer");

const Contact = () => {
  const [form, setForm] = useState({ email: "", name: "", phone: "", msg: "" });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, phone, msg } = form;

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_izcwtp9',
      'template_vl5zt8k',
      {
        from_name: name,
        to_name: 'aGod',
        message: msg,
        reply_to: email
      },
      'TTHZisjwuTINkWc3t'
    ).then((response) => {
      setSuccess(true);
      setTimeout(() => {
        setForm({email: "", name: "", phone: "", msg: ""});
        setSuccess(false);
      }, 2000)
    }).catch((err) => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    })
    // if (email && name && phone && msg) {
    //   setSuccess(true);
    //   setTimeout(() => {
    //     setForm({ email: "", name: "", phone: "", msg: "" });
    //     setSuccess(false);
    //   }, 2000);
    // } else {
    //   setError(true);
    //   setTimeout(() => {
    //     setError(false);
    //   }, 2000);
    // }
  };
  return (
    <section id="contact">
      {/* <script src="https://kit.fontawesome.com/f27d64fe2f.js" crossorigin="anonymous"></script> */}
      
      <div className="container">
        
      {/* <Row>
              <Col xs={6}>
                <FontAwesomeIcon icon={faEnvelope}/>
              </Col>
              <Col xs={6}>
                <FontAwesomeIcon icon={faEnvelope}/>
              </Col>
              {/* <img src="img/news/nxtattempt.png" alt="image" /> */}
        {/* </Row> */}
        <div className="roww resumo_fn_contact">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Nobody built like you, you design yourself.</h3>
            <h3 className="title">Get In Touch</h3>
            
            
            {/* <p className="desc">
              If you have any suggestion, project or even you want to say
              “hello”, please fill out the form below and I will reply you
              shortly.
            </p> */}
          </div>
          {/* /Main Title */}
          {/* Contact Form */}
          <form className="contact_form" onSubmit={(e) => onSubmit(e)}>
            <div
              className="success"
              data-success="Your message has been received, we will contact you soon."
              style={{ display: success ? "block" : "none" }}
            >
              <span className="contact_success">
                Your message has been received, we will contact you soon.
              </span>
            </div>
            <div
              className="empty_notice"
              style={{ display: error ? "block" : "none" }}
            >
              <span>Please Fill Required Fields!</span>
            </div>
            <div className="items_wrap">
              <div className="items">
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "name" || name ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("name")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={name}
                      name="name"
                      id="name"
                      type="text"
                    />
                    <span className="moving_placeholder">Name *</span>
                  </div>
                </div>
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "email" || email ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("email")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={email}
                      name="email"
                      id="email"
                      type="email"
                    />
                    <span className="moving_placeholder">Email *</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "phone" || phone ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("phone")}
                      onBlur={() => setActive(null)}
                      id="phone"
                      onChange={(e) => onChange(e)}
                      value={phone}
                      name="phone"
                      type="text"
                    />
                    <span className="moving_placeholder">Phone</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "message" || msg ? "active" : ""
                    }`}
                  >
                    <textarea
                      onFocus={() => setActive("message")}
                      onBlur={() => setActive(null)}
                      name="msg"
                      onChange={(e) => onChange(e)}
                      value={msg}
                      id="message"
                    />
                    <span className="moving_placeholder">Message</span>
                  </div>
                </div>
                <div className="item">
                  {/* <a id="send_message" href="#">
                    Send Message
                  </a> */}
                  <input
                    className="a"
                    type="submit"
                    id="send_message"
                    value="Send Message"
                  />
                </div>
              </div>
            </div>
          </form>
          {/* /Contact Form */}
          {/* Contact Info */}
          {/* <div className="resumo_fn_contact_info"> */}
            {/* <div className="col-sm-4">
            <a href="mailto:alejandro.velez.arce@gmail.com"> */}
            {/* <i class="fa-solid fa-circle-envelope"></i> */}

            {/* </a>
            </div> */}
            {/* <p>Address</p>
            <h3>69 Queen St, London, United Kingdom</h3>
            <p>Phone</p>
            <h3>
              <a href="tel:+7068980751">(+706) 898-0751</a>
            </h3> */}
            {/* <p>
              <a className="fn__link" href="mailto:amva13@alum.mit.edu">
               alex@alexv24.com 
              </a>
            </p> */}
          {/* </div> */}
          {/* /Contact Info */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
