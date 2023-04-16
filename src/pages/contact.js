import React from "react";

const Contact = () => {
  return (
    <div classNameName="content-container container">
      <div classNameName="content">
        <h1 classNameName="mb-5 mt-5">📮 Let's get in touch!</h1>
        <h3 classNameName="mt-4">Email</h3>
        <p>
          <a
            href="mailto:info@dawnwatchgroup.com"
            rel="noreferrer"
            title="Send us an email"
          >
            Send an email
          </a>
        </p>
        <h3>Twitter</h3>
        <p>
          <a
            href="https://www.twitter.com/dawnwatch"
            rel="noreferrer"
            title="Go to our twitter page"
            target="_blank"
          >
            Check out our twitter handle
          </a>
        </p>
        <h3>Instagram</h3>
        <p>
          <a
            href="https://www.instagram.com/dawnwatch"
            rel="noreferrer"
            title="View our Instagram page"
            target="_blank"
          >
            Find us on Instagram
          </a>
        </p>
      </div>

      <footer>
        <div className="d-flex justify-content-center mb-5"></div>
        <div className="social-links d-flex justify-content-center">
          <a
            href="https://www.github.com/ogeoginni"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
          >
            <i
              className="fa fa-brands fa-github px-5 fa-2x"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://www.instagram.com/ogeoginni"
            target="_blank"
            rel="noreferrer"
            title="Instagram Profile"
          >
            <i
              className="fa fa-brands fa-instagram px-5 fa-2x"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ogechukwu-oginni-0948365b"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
          >
            <i
              className="fa fa-brands fa-linkedin px-5 fa-2x"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
