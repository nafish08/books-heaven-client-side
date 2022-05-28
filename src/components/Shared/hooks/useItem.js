import { useEffect, useState } from "react";

const useItem = () => {
    // useSteate for products changes
    const [products, setProducts] = useState([]);
    // loading data from api
    useEffect(() => {
        fetch('https://boiling-shore-92900.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
}

export default useItem;