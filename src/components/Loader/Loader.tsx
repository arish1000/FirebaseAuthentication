import React from "react";
import classes from "./Loader.module.scss";
import { Oval } from "react-loader-spinner";

const Loader = (props: any) => {
  const {
    height = "80px",
    width = "80px",
    color = "goldenrod",
    containerClassName,
  } = props;

  let containerClass = classes.container;

  if (containerClassName) {
    containerClass = `${containerClass} ${containerClassName}`;
  }
  return (
    <div className={containerClass}>
      <Oval
        visible={true}
        height={height}
        width={width}
        color={color}
        secondaryColor="lightgray"
        ariaLabel="oval-loading"
      />
    </div>
  );
};

export default Loader;
