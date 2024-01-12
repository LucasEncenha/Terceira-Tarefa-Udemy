import React, { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Matheus","Pedro","Josias"]);

    const [users,setUsers] =useState([
        {id: 1, name: "Lucas", age: 21},
        {id: 2, name: "Felipe", age: 19},
        {id: 3, name: "Mierella", age: 17},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random()*4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

    return(
        <div>
            <ul>
                {list.map((item,i)=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>{/*Mais indicado*/}
                {users.map((user) => (
                    <li key={user.id}>{user.name}-{user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete</button>
        </div>
    );
};

export default ListRender;