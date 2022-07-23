import React from "react";

import Carousel from "../components/Carousel";

export default function About() {
  return (
    <div className="About">
      <Carousel />
      <h1 class="title">Mia's Music Studios</h1>

      <h2 class="info-head">Info container</h2>
      <div class="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus
          felis, interdum vel sem sit amet, euismod faucibus ligula. Nunc tellus
          purus, pharetra a faucibus eu, hendrerit in nunc. Nulla ac imperdiet
          leo, eget pharetra ipsum. Suspendisse potenti. Etiam fringilla, purus
          id fringilla molestie, enim neque semper mi, eget facilisis.
          <ul>
            <li>eget facilisis</li>
            <li>faucibus eu</li>
            <li>interdum vel</li>
            <li>adipiscing elit</li>
          </ul>
        </p>
      </div>
      <h2 class="info-head"> About Mia</h2>
      <div class="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum vel eros vitae rutrum. Suspendisse eros odio, consectetur
          eget elit sit amet, egestas euismod leo. Integer quis ante malesuada,
          rhoncus metus sed, congue ex. Praesent ornare a quam eget consectetur.
          Praesent pretium ipsum vel porttitor lobortis. In purus ligula,
          tincidunt.
        </p>
      </div>
    </div>
  );
}
