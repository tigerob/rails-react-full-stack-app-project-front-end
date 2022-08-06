import React from "react";
import image from "../assets/mv2.gif";

import Carousel from "../components/Carousel";

export default function About() {
  return (
    <div className="About">
      <h1 class="title">Mia Music Studios</h1>
      <Carousel class="carousel" />
      <h2 class="info-head">Lessons</h2>
      <div class="image">
        <img src={image} alt="music" />
      </div>
      <div class="info">
        <p class="text">
          <p>
            Everyone can make music! Mia is passionate about creating an
            environment for you to discover your sound. Her approach to music
            lessons is holistic. She invites you to free your inner artist by
            experimenting with your breath, mind and body through vocal and
            musical exercises. From this point, Mia will guide you on the path
            of musical education that your interests take you.
          </p>
          <p>
            Mia welcomes students of all ages and levels of musical experience,
            as well as music of all genres and styles. Mia principally teaches
            lessons in:
          </p>
          <ul>
            <li>Guitar</li>
            <li>Piano</li>
            <li>Voice</li>
          </ul>
          <p>
            If you have a specific interest in an instrument beyond these, don't
            hestitate to contact Mia to discuss.
          </p>
          <p>
            Mia teaches her lessons at her studio at 1, Penny Lane, Melbourne
            3000 and also online via Zoom.
          </p>
        </p>
      </div>
      <h2 class="info-head"> About Mia Music</h2>
      <div class="info">
        <p class="text">
          Mia's love for music began when she first picked up her mother's
          guitar at the age of three. Since then, she has studied classical
          voice with Brendan Hazzio at The University of Melbourne, peformed in
          a number of bands, and has been teaching music to students of all ages
          for over 15 years.
        </p>
      </div>
    </div>
  );
}
