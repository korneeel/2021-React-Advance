import React from 'react'
import ProtoTypes from 'prop-types'
import testImage from '../assetts/test.jpg'

const Product = ({image, name, price}) => {
    const url = image && image.url
    return (
        <article className="product">
            <img src={url || testImage} alt={name} />
            <h3>{name}</h3>
            <h4>${price || 3.99}</h4>
        </article>
    )
}

Product.protoTypes = {
    image: ProtoTypes.object.isRequired,
    name: ProtoTypes.string.isRequired,
    price: ProtoTypes.number.isRequired
}

// Product.defaultProps = {
//     name: 'default name',
//     price: '3.99',
//     image: testImage
// }
export default Product