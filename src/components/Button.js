import React, { Component } from 'react'

export default class Button extends Component {
  render(){
    return(
      <button className='button' type="submit" name={this.props.name}>{this.props.text}</button>
    )
  }
}
