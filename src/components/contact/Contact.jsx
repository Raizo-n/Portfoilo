import React, { useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ghq1jet",
      "template_zv02znj",
      form.current,
      "iTfWHqC5n9kQCdzDd"
    );
    e.target.reset();
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title"><span className="title-span">Get in Touch</span></h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact-container container grid">
        <div className="content">
          <h3 className="title">Talk to me</h3>
          <div className="info">
            {/* Email */}
            <div className="card">
              <i className="bx bx-mail-send icon"></i>
              <h3 className="form-title">Email</h3>
              <span className="data">raizonakada@gmail.com</span>
              <a
                href="mailto:raizonakada@gmail.com.com"
                className="contact-button"
              >
                Write me <i className="bx bx-right-arrow-alt button-icon"></i>
              </a>
            </div>

            {/* Whatsapp */}
            <div className="card">
              <i className="bx bxl-whatsapp icon"></i>
              <h3 className="form-title">Whatsapp</h3>
              <span className="data">604-657-4679</span>
              <a href="" className="contact-button">
                Write me <i className="bx bx-right-arrow-alt button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h3 className="title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} action="" className="form">
            <div className="div">
              <label className="tag">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Type your name"
              />
            </div>
            <div className="div">
              <label className="tag">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Type your Email address"
              />
            </div>
            <div className="div form-area">
              <label className="tag">Project</label>
              <textarea
                name="project"
                className="input"
                placeholder="write your project"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="button button--flex send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
