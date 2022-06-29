import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import { Inputprops } from "../types/Props";

const Inputs: FC<Inputprops> = ({
  label,
  sx,
  onchange,
  value,
  type,
  ...props
}) => (
  <TextField
    value={value}
    type={type}
    label={label}
    onChange={onchange}
    style={sx}
    {...props}
    variant="outlined"
  />
);

export default Inputs;
