import { useState } from 'react'

function Conditional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    function clearEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e)=> setEmail(e.target.value)} />
                <button onClick={sendEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={clearEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Conditional