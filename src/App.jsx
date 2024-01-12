import { Fragment, useState } from 'react'
import City from "./assets/city.jpg";
import ManegeData from './components/ManegeData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDeteils from './components/CarDeteils';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserDetails from './components/UserDetails';

import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  //const name = "Lucas";
  const [userName] = useState("Felipe");
  
  const cars = [
    {id:1,brand:"Ferrari",color:"Amerela",newCar:true,km:0},
    {id:2,brand:"Ford",color:"Preto",newCar:false,km:1000},
    {id:3,brand:"Toyota",color:"Branco",newCar:true,km:15},
  ];

  function showMessage(){
    console.log("Evento do componente pai");
  }

  const [message,setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg);
  };

  const people = [
    {id:1,name:"Lucas",age:21,profissão:"Auxiliar"},
    {id:2,name:"Felipe",age:19,profissão:"Autonomo"},
    {id:3,name:"Mirella",age:17,profissão:"Auxiliar"},
  ];

  return(
    <>
      <h1>Bora!!!</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/*Imagem em assets*/}
      <div>
        <img src={City} alt="Cidade"/>
      </div>
      <ManegeData/>
      <ListRender/>
      <ConditionalRender/>
      {/*props*/}
      <ShowUserName name={userName} />
      {/*destructuring*/}
      <CarDeteils brand="VW" km={10000} color="black" newCar={false}/>
      {/*reaproveitamento*/}
      <CarDeteils brand="Ford" color="Red" km={0} newCar={true}/>
      <CarDeteils brand="Fiat" color="Blue" km={5000} newCar={true}/>
      {/*loop em array de objetos*/}
      {cars.map((car)=>(
        <CarDeteils
        key={car.id}
        brand={car.brand} 
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
      ))}
      {/*Fragments*/}
      <Fragments propFragment="Teste"/>
      {/*Children*/}
      <Container myValue="Testando">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="Testando">
        <h5>E este é o conteúdo</h5>
      </Container>
      {/*executar função*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*state lift*/}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
      {/*Tarefa*/}
      {people.map((peo)=>(
        <UserDetails
        key={peo.id}
        name = {peo.name}
        age = {peo.age}
        prof = {peo.profissão}
        />
      ))}
    </>
  )
}

export default App
