import React from 'react';
import './Item.css'

const Item = ({ item, addChips }) => {
    const { picture, name, price, id } = item

    return (
        <div>
            <div className="card my-3 ">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 key={id} className="card-title">Name: {name}</h5>
                    <p className="card-text">Price: {price}</p>
                </div>
                <div className="card-footer bg-warning rounded-3">
                    <button onClick={() => addChips(item)} className='w-100 border-0 bg-warning text-white'>Add chips</button>
                </div>
            </div>
        </div>
    );
};

export default Item;