//  create simple button component and export it

import { createElement } from "react";

interface ButtonProps {
  size: string;
  onClick: any;
  icon:
    | string
    | number
    | boolean
    | React.ReactElement<
        /*#__PURE__*/ any,
        string | React.JSXElementConstructor<any>
      >
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  text:
    | string
    | number
    | boolean
    | React.ReactElement<
        /*#__PURE__*/ any,
        string | React.JSXElementConstructor<any>
      >
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}

function Button(props: ButtonProps) {
  return /*#__PURE__*/ createElement(
    "button",
    {
      className: "button ".concat(props.size),
      onClick: props.onClick,
    },
    props.icon,
    props.text
  );
}
export default Button;
