import { useState } from "react";

const ManegeData = () => {
    let someData =10;

    console.log(someData);

    const [number,setNumber] = useState(15);

    console.log(number);

    return(
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={()=> (someData=15)}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar state</button>
            </div>
        </div>
    );
};

export default ManegeData;