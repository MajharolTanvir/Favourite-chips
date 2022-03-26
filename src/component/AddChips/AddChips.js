import React from 'react';
import './AddChips.css'

const AddChips = ({ chips, find, clear, chip }) => {

    return (
        <div>
            <h5>Check your luck</h5>
            <div className='card-box'>
                {
                    chips.map(chip => <div key={(chip.id)}>
                        <h6>Name: {chip.name}
                        </h6>
                    </div>)
                }
                <button className='w-100 mb-3 py-1 border-0 rounded-3 bg-info' onClick={() => find()} >Find one</button>
                <h6>Name: {chip}</h6>
                <button className='w-100 mb-3 py-1 border-0 rounded-3 bg-danger' onClick={() => clear()}>Chose again</button>
            </div>
        </div>
    );
};

export default AddChips;