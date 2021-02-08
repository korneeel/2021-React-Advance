import React, { useState, useEffect } from 'react'

const url = 'https://course-api.com/javascript-store-products'

const FetchExample = () => {
    const [loading,setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json();
        setProducts(products);
        setLoading(false);
    }

    useEffect(()=>{
        getProducts();
    }, []);

    console.log(products);

    return (
        <>
            <h2>{loading ? 'loading...:' : 'data' }</h2>
            <h1>-----------------------------------</h1>
            {
                products.map((product)=>{
                    return (
                        <div className="item" key={product.id}>
                            <h4>{product.id}</h4>
                            <h2>{product.fields.company}</h2>
                            <h5>{product.fields.price}$</h5>
                        </div>
                    )
                })
            }
        </>
    )
}
export default FetchExample