import { useState } from "react";

export default function StatProps(props) {

    const [cor, setCor] = useState("azul")

    return(
        <div>
            <h2>Componente de função com Props</h2>
            <h3>Minha cor favorita: {cor}</h3>
            <button onClick={
                () => setCor(props.color)
            }>
                Minha cor favorita
            </button>
        </div>
    )

}