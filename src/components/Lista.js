import React, { Component } from 'react'

export default class Lista extends Component {
  render(){
    return(
      <table>
        <thead className='thead'>
          <tr>
            <th>Nome</th>
            <th>Endereco</th>
          </tr>
        </thead>
        <tbody>
          {this.props.clientes.map(cliente => {
            return (
              <tr key={cliente.endereco}>
                <td>{cliente.nome}</td>
                <td>{cliente.endereco}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
