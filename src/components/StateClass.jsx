import React from 'react';

export default class StateClass extends React.Component {

    constructor(){
        super();
        this.state = {
            numero: 10
        }
    }

    setNumero(){
        let soma = this.state.numero + 100
        this.setState({numero: soma})
    }

    render() {
        return(
            <div>
                <h2>Componente de classe</h2>
                <h3>Numero atual: {this.state.numero}</h3>
                <button onClick={
                    () => this.setNumero()
                }>
                Somar 100
                </button>
            </div>
        )
    }
}