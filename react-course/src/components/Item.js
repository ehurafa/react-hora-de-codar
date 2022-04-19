import PropTypes from 'prop-types'

function Item({brand, release_year}) {
    return(
        <>
            <li>{brand} - {release_year}</li>
        </>
    )
}

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    release_year: PropTypes.number
}

Item.defaultProps = {
    brand: 'Faltou a marca',
    release_year: 2000
}

export default Item