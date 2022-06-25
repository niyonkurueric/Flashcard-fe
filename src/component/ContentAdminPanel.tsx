import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import {contentSiber} from '../types/Props';

const Contentsidebar:FC<contentSiber>= ({value} ) => <Typography>{value}</Typography>;

export default Contentsidebar