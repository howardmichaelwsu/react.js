import React from 'react';

const StatusSelector = (props) {

    const ipt = props.selected == true ? (<input checked type="radio" value="active" name="status" />) : (<input type="radio" value="active" name="status" />);
    return (
        <div className="status-selector">
            <label htmlFor="status">{props.statusName}</label>
            {ipt} 
        </div>
    )
}

export default StatusSelector;