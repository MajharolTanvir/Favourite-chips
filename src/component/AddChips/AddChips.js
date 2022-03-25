import React from 'react';

const AddChips = ({ chips }) => {
    console.log(chips);
    return (
        <div>
            <h5>Check your luck</h5>
            <div>
                {
                    chips.map(chip => <div key={(chip.id)}>
                        <h6>Name: {chip.name}</h6>
                        <p>Price: {chip.price}</p>
                    </div>)
                }
                
            </div>
        </div>
    );
};

export default AddChips;