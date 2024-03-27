import { Tooltip } from "react-bootstrap";

export const renderTooltip = (props, id, text) => (
  <Tooltip id={id} {...props}>{text}</Tooltip>
);