const UserDetails = ({name,age,prof}) => {
  return (
    <div>
        <h2>Teste para habilitação</h2>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {prof}</li>
        </ul>
        {age>=18 ? (
            <div>
                <p>Pode tirar a carteira de habilitação!</p>
            </div>):
            (
                <div>
                    <p>Não pode tirar a carteira de habilitação, idade insuficiente!</p>
                </div>
            )
        }
    </div>
  )
}

export default UserDetails