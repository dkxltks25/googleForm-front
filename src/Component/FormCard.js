import React from "react";
import { Card, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(({ theme }) => ({
  root: {
    minHeight: 128,
    minWidth: 171,
    border: 1,
    borderColor: "black",
    backgroundColor: "white",
  },
}));

const FormCard = () => {
  const classes = useStyle();
  return <Card className={classes.root} />;
};
export default FormCard;
