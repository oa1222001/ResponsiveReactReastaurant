import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={"Chef's Word"} />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="chef quote img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            neque? Consequuntur expedita molestiae dolore eum sint dolorum
            explicabo quaerat ullam maiores. Officiis deleniti nisi accusamus
            sit, impedit pariatur consequuntur voluptas.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, nihil
          dolores. Excepturi ipsa reprehenderit, consequatur at exercitationem
          explicabo possimus, quam ut vitae voluptatum perferendis tenetur.
          Praesentium, hic id! Illo, delectus.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Hany Nizar </p>
        <p className="p__opensans">{"Chef & founder"}</p>
        <img src={images.sign} alt="chef sign img" />
      </div>
    </div>
  </div>
);

export default Chef;
