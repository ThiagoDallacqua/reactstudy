import React, { Component } from 'react'
import Input from '../components/Input.js'
import Button from '../components/Button.js'
import Lista from '../components/Lista.js'

export default class Formulario extends Component {
  constructor(){
    super();

    this.state={
      clientes: []
    }

    this.gerarCliente = this.gerarCliente.bind(this)
  }

  gerarCliente(e){
    e.preventDefault();

    let cliente = {
      nome: e.target.nome.value,
      endereco: e.target.endereco.value
    }

    this.setState({clientes: [...this.state.clientes, cliente]})
  }

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.gerarCliente}>
          <Input type={'text'} name={'nome'}/>
          <Input type={'text'} name={'endereco'}/>
          <Button name={'botaoEnvia'} text={'Envia'}/>
        </form>

        <Lista clientes={this.state.clientes}/>
      </div>
    )
  }
}
