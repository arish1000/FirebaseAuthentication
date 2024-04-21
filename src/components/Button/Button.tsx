import React from "react";
import classes from "./Button.module.scss";
import { Button as MuiButton } from "@mui/material";
import { IButtonProps } from "../../modals/IButtonProps";

const Button = (props: IButtonProps) => {
  const { onClick, rootClassName, ...rest } = props;
  let rootClass = classes.root;
  if (rootClassName) {
    rootClass = `${rootClass} ${rootClassName}`;
  }
  return (
    <div className={classes.container}>
      <MuiButton
        className={rootClass}
        onClick={onClick}
        variant="contained"
        {...rest}
      />
    </div>
  );
};

export default Button;
