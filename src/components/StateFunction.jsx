import React, {useState} from 'react'

export default function StateFunction (){

    //Definir o estado inicial
    const [numero, setNumero] = useState(10)

    //numero = numero + 100

    return (
        <div>
            <h2>Componente de função</h2>
            <h3>Número atual: {numero} </h3>
            <button
                onClick={
                    () => setNumero(numero + 100)
                }>
                Somar 100
            </button>
        </div>
    )
}