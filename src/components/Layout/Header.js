import React from "react";

import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="a table full of meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
