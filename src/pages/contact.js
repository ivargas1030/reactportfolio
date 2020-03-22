import React from "react";
import Container from "../components/Container";
import Section from "../components/Section";

function Contact() {
  return (
    <div>
      <Container>
        <Section>
          <h1>Contact</h1>

          <form className="contact-form">
            <ul>
              <li>
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Hello Kitty"
                  required="required"
                ></input>
              </li>
              <li>
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required="required"
                ></input>
              </li>
              <li>
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required="required"
                ></textarea>
              </li>
            </ul>
            <input type="submit"></input>
          </form>
        </Section>
      </Container>
    </div>
  );
}

export default Contact;
