import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item brand="Ferrari" release_year={1990} />
                <Item />
                <Item brand="BMW" release_year={1995} />
            </ul>
        </>
    )
}

export default List