import React, { Component } from 'react'

export default class Input extends Component {
  render(){
    return(
      <input className='input' type={this.props.type} name={this.props.name} />
    )
  }
}
