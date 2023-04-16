import React from "react";

const Contact = () => {
  return (
    <div className="content-container container">
      <div className="content">
        <h1 className="mb-5 mt-5">📮 Let's get in touch!</h1>
        <h3 className="mt-4">Email</h3>
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
    </div>
  );
};

export default Contact;
