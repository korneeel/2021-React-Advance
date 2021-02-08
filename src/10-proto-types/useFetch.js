import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [products, setPorducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch (url);
        const products = await response.json();
        setPorducts(products);
        setLoading(false);
    }
    
    useEffect(()=>{
        getProducts();
    }, [url])

    return {loading, products}
}