import React from "react";
import Typography from "@mui/material/Typography";

import { format } from "date-fns";

import "./Footer.css";

const Footer = () => (
  <div className="footer-container">
    <Typography align="center" variant="p" className="footer-subtitle">
      Ioannis Siampalias &copy; {format(new Date(), "yyyy")}
    </Typography>
  </div>
);

export { Footer };
export default Footer;
