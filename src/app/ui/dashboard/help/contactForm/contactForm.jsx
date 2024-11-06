"use client";
import React, { useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted", { name, email, message });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>
          Your Message
        </label>
        <textarea
          id="message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here"
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
