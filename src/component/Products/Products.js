import React, { useEffect, useState } from 'react';
import { addToStored, getStoredData, removeData } from '../../Utilities/Storage';
import AddChips from '../AddChips/AddChips';
import Item from '../Item/Item';
import './Product.css'


const Products = () => {
    const [products, setProducts] = useState([])
    const [chips, setChips] = useState([])
    const [chip, setChip] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedOrder = getStoredData()
        const saveOrder = [];

        for (const name in storedOrder) {
            const addedChips = products.find(product => product.name === name);
            if (addedChips) {
                const quantity = storedOrder[name]
                addedChips.quantity = quantity;
                console.log(addedChips);
                saveOrder.push(addedChips);
            }
        }
        setChips(saveOrder);

    }, [products]);

    const addChips = (item) => {
        const newChips = [...chips, item]
        if (newChips.length > 4) {
            alert('Chose only 4 items')
        }
        setChips(newChips);
        addToStored(item.name);
    }
    const removeChips = (item) => {
        removeData(item)
    }

    const clearData = () => {
        setChips([])
        setChip([])
    }

    const findOne = () => {
        const randomChips = Math.round(Math.random() * chips.length)
        setChip(chips[randomChips].name);
        
    }



    return (
        <div className='container mb-5'>
            <div className="row m-0">
                <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
                        {
                            products.map(item => <Item
                                key={item.id}
                                item={item}
                                addChips={addChips}
                            ></Item>)
                        }
                    </div>
                </div>
                <div className="group-card col-md-3 col-lg-3 mt-3 text-center">
                    <AddChips chips={chips}
                        find={findOne}
                        chip={chip}
                        clear={clearData}
                        removeChips={removeChips} />
                </div>
            </div>
        </div>
    );
};

export default Products;