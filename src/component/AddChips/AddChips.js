import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './AddChips.css'

const AddChips = ({ chips, find, clear, chip }) => {

    return (
        <div>
            <h5 className='mb-4'>Check your luck</h5>
            {
                chips.map(chip => <div key={(chip.id)}>
                    <div className="row">
                        <div className="col-sm-3 sol-md-3 col-lg-3 Card-info">
                            <img className='w-75' src={chip.picture} alt="" />
                        </div>
                        <div className="col-sm-7 col-md-7 col-lg-7">
                            <p className=''>{chip.name}</p>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>)
            }
            <button className='w-100 mb-3 py-1 border-0 rounded-3 bg-info' onClick={() => find()} >Find one</button>
            <h6>{chip}</h6>
            <button className='w-100 mb-3 py-1 border-0 rounded-3 bg-danger' onClick={() => clear()}>Chose again</button>
        </div>
    );
};

export default AddChips;