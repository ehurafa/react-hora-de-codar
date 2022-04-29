import { useState } from 'react'

function Form() {
    function sendUser(e) {
        e.preventDefault()
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}`)
        console.log('Cadastrou o usuário!')
    }

    const [name, setName] = useState('Rafa')
    const [password, setPassword] = useState()



    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={sendUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite o seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form