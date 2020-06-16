import React, { Component } from 'react'
import InputFullSalary from './InputFullSalary'
import ImputReadOnly from './InputReadOnly'
import InputReadOnly from './InputReadOnly'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <InputFullSalary />
        <InputReadOnly />
      </React.Fragment>
    )
  }
}