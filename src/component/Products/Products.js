import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
// import Item from '../Item/Item';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row row-cols-lg-3">
                        {
                            products.map(item => <Item
                                key={item.id}
                                item={item}
                            ></Item>)
                        }
                    </div>
                </div>
                <div className="col-lg-4">
                    <h5>Check your luck</h5>
                </div>
            </div>
        </div>
    );
};

export default Products;