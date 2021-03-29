import React, { useState } from "react";
import * as contactStyles from "../../scss/contact.module.scss";
const Contact = () => {
  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setLogin({
      ...login,
      [evt.target.name]: value,
    });
    console.log(login);
  };
  return (
    <main className={contactStyles.container}>
      <h1>Get In Touch</h1>
      <div className={contactStyles.form_container}>
        <form>
          <div className={contactStyles.form_input_field}>
            <label htmlFor="email">Name</label>
            <input name="name" type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={contactStyles.form_input_field}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={contactStyles.form_input_field}>
            <label htmlFor="email">Message</label>
            <textarea
              rows="20"
              name="message"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className={contactStyles.form_button}>Send</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
