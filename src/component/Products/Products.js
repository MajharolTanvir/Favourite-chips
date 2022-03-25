import React, { useEffect, useState } from 'react';
import AddChips from '../AddChips/AddChips';
import Item from '../Item/Item';

const Products = () => {
    const [products, setProducts] = useState([])
    const [chips, setChips] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addChips = (item) => {
        const newChips = [...chips, item]
        setChips(newChips)
    }

    return (
        <div>
            <div className="row m-0">
                <div className="col-lg-9">
                    <div className="row row-cols-lg-3">
                        {
                            products.map(item => <Item
                                key={item.id}
                                item={item}
                                addChips={addChips}
                            ></Item>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 text-center">
                    <AddChips chips={chips} />
                </div>
            </div>
        </div>
    );
};

export default Products;