import React from 'react';

export default function About() {
  return (
    <div>

      <h1>About Me</h1>

      <div className="row">
        <div className="col-6">

          <img src={require("../../assets/Profile-pic.jpeg")} alt="Selfie of Fabian Gutierrez" width="600" height="480" />

        </div>

        <div className="col-6">
          <p>
            Console.log(Hello world, or whoever is reading this)! My name is Fabian Gutierrez and
            I'm hoping to break into the tech industry. I worked for 6 years in construction,
            specifically concrete, so I'm no stranger to hard work. When I'm not learning to code
            I'm out playing soccer, volleyball or finding some other way to stay active. I learned the
            in's and out's of coding at the prestigious Southern Methodist University, where I got the pleasure
            of working with all kinds of different technologies such as Javascript, CSS, HTML, Node, MySQL, MongoDB etc.
          </p>
        </div>


      </div>


    </div>
  );
}
