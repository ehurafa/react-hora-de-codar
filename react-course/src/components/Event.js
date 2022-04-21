function Event({number}) {
    function myEvent() {
        console.log('Opa, fui ativado!', number)
    }

    return (
        <div>
            <p>Cliqye para disparar um evento!</p>
            <button onClick={myEvent}>Ativar!</button>
        </div>
    )
}

export default Event