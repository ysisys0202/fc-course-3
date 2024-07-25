import { BoxProps } from "./types";
import * as React from "react";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", children } = props;
  return React.createElement(
    as,
    { ...props, ref, className: props.className },
    children,
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
