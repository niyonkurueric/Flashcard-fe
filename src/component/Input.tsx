import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import {Inputprops} from '../types/Props';

const Inputs:FC<Inputprops>= ({value,sx} ) => <TextField type="text"label={value} style={sx} variant="outlined"/>;

export default Inputs