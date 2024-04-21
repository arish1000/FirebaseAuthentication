import React from "react";
import classes from "./Input.module.scss";
import { TextField } from "@mui/material";
import { IInputProps } from "../../modals/IInputProps";

const Input = (props: any) => {
  const { inputClasses, ...rest } = props;
  return (
    <div className={classes.container}>
      <TextField
        className={classes.root}
        variant="outlined"
        InputProps={{
          classes: {
            root: classes.input_root,
            notchedOutline: classes.input_notchedOutline,
            focused: classes.input_focused,
            ...inputClasses,
          },
        }}
        {...rest}
      />
    </div>
  );
};

export default Input;
