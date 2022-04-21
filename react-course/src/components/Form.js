function Form() {
    function sendUser(e) {
        e.preventDefault()
        console.log('Cadastrou o usuário!')
    }
    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={sendUser}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form