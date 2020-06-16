import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 800,
    },
  },
}));

export default class InputFullSalary extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <TextField
            id="salario-bruto"
            label="Salário Bruto"
            value="0.00"
            fullWidth />
        </Container>
      </React.Fragment>
    )
  }
}
