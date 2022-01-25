import React from "react";
import Button from "@mui/material/Button";

const CtaButton = ({
  color,
  disabled,
  variant,
  size,
  href,
  onClick,
  label,
  className,
}) => (
  <Button
    color={color}
    disabled={disabled}
    variant={variant}
    onClick={onClick}
    size={size}
    href={href}
    className={className}
  >
    {label}
  </Button>
);

CtaButton.defaultProps = {
  color: "secondary",
  disabled: false,
  variant: "contained",
  size: "large",
  href: "",
  onClick: () => {},
  label: "Label",
  className: "",
};

export { CtaButton };
export default CtaButton;
