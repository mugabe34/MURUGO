import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            we belive in great hospitality that we provide.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          in MURUGO CANTINE we believe that we provide best service.
          As a client you can get on our location ,or if its not possible 
          we have a very fast and good delively at any place in kigali.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>CHARLES</p>
        <p className="p__opensans">Barista & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
