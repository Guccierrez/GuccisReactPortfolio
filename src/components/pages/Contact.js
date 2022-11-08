import React from 'react';

export default function Contact() {
  return (

    <div className="container">
  <h1>Contact</h1>
  <h4>feel free to message me with any questions or concerns</h4>
  <form target="_blank" action="https://formsubmit.co/eb6b099a4693b79c495549591b816287" method="POST">
    <div className="form-group">
      <div className="form-row">
        <div className="col">
          <input type="text" name="name" className="form-control" placeholder="Full Name" required></input>
        </div>
        <div className="col">
          <input type="email" name="email" className="form-control" placeholder="Email Address" required></input>
        </div>
      </div>
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>
  );
}
