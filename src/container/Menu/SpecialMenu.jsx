import React from "react";
import { MenuItem, SubHeading } from "../../components";
import { data, images } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding " id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title={"Menu thats fits your palatte"} />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu ">
      <div className="app__specialMenu-menu_drink flex__center">
        <p className="app__specialMenu-menu_heading">Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drink, i) => (
            <MenuItem
              key={i + drink.title}
              title={drink.title}
              tags={drink.tags}
              price={drink.price}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, i) => (
            <MenuItem
              key={i + cocktail.title}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button ">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
