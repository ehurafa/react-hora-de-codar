function Salutation({ name }) {

    function factorySalutation(someName) {
        return `Olá ${someName}, tudo bem?`
    }

    return (
        <>{ name && <p>{ factorySalutation(name) }</p>}</>
    )
}

export default Salutation