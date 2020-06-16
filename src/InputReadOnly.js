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

export default class InputReadOnly extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <TextField id="base-INSS"
            label="Base INSS"
            value="0.00"
            InputProps={{
              readOnly: true,
            }} />
          <TextField id="desconto-INSS"
            label="Desconto INSS"
            value="0.00"
            InputProps={{
              readOnly: true,
            }} />
          <TextField id="base-IRPF"
            label="Base IRPF"
            value="0.00"
            InputProps={{
              readOnly: true,
            }} />
          <TextField id="desconto-IRPF"
            label="Desconto IRPF"
            value="0.00"
            InputProps={{
              readOnly: true,
            }} />
        </Container>
      </React.Fragment>
    )
  }
}
