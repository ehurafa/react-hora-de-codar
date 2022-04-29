import Button from './event/Button'

function Event({number}) {
    function myEvent() {
        console.log('Opa, fui ativado!!!', number)
    }

    function secondEvent() {
        console.log('Ativando o segundo evento')
    }

    return (
        <div>
            <p>Cliqye para disparar um evento!</p>
            <Button event={myEvent} text="Primeiro Evento" />
            <Button event={secondEvent} text="Segundo Evento" />
        </div>
    )
}

export default Event