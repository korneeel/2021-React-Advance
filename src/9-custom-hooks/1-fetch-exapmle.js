import React from 'react'
import { useFetch } from './2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

const FetchExample = () => {

    const {loading, products} = useFetch(url);
    console.log(products)

    return (
        <>
            <h2>{loading ? 'false loading...' : 'True data' }</h2>
            {
                products.map((product) => {
                    return (
                        <div className="item" key={product.id}>
                            <h2>{product.fields.company}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}
export default FetchExample