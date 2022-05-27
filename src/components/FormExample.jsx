import React from 'react';

export default class FormExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event){

        event.preventDefault()

        alert(this.state.email)

    }

    handleInputChange(event){

        return this.setState({
            email: event.target.value
        })

    }

    render() {
        return(
            <div>
                <h2>Exemplo de formulário</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Email' onChange={this.handleInputChange}/>
                    <button>Enviar</button>
                </form>
                <h3>Email: {this.state.email}</h3>
            </div>
        )
    }


}