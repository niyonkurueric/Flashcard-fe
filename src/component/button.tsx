import { Button, Grid, styled } from '@mui/material';
import React from 'react';
import Link from '@material-ui/core/Link';
function button() {
  return (
<Grid container paddingTop={10} direction="column" alignItems="center">
      <Grid item>
          <Button variant="contained">GETTING STARTED</Button>
      </Grid>
    </Grid>
  )
}
export default button