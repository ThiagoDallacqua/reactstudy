import React, { Component } from 'react'

export default class Lista extends Component {
  render(){
    return(
      <ul className='parentUl'>
        <li>Nome</li>
        <li>Endereço</li>
        {this.props.clientes.map(cliente => {
          return (
            <ul className='childrenUl' key={cliente.endereco}>
              <li>{cliente.nome}</li>
              <li>{cliente.endereco}</li>
            </ul>
          )
        })}
      </ul>
    )
  }
}
