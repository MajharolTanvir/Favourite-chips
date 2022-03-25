import React from 'react';

const Item = ({ item }) => {
    const { picture, name, price, id } = item
    return (
        <div>
            <div className="card">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 key={id} className="card-title">Name:{name}</h5>
                    <p className="card-text">Price:{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;