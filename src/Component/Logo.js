import React from "react";
import { Typography } from "@material-ui/core";
const Logo = ({ classes }) => {
  return (
    <>
      <img
        className={classes.logoImg}
        alt="logo"
        src="https://www.gstatic.com/images/branding/product/2x/forms_48dp.png"
      />
      <Typography variant={"h6"} className={classes.title}>
        설문지
      </Typography>
    </>
  );
};
export default Logo;
