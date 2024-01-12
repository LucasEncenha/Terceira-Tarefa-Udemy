import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const[name,setName] = useState("Lukas");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso!</p>}
            <h1>if ternário</h1>
            {name === "Lucas" ? (
                <div>
                    <p>O nome é Lucas</p>
                </div>
            ):(
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={()=>setName("Lucas")}>Clique aqui!</button>
        </div>
    )
}

export default ConditionalRender