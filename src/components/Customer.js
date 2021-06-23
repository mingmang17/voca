import React from 'react';

function Customer(props) {
    return (
        <div>
            <CustomerProfile id={props.id} gender={props.gender} name={props.name} />
            <CustomerInfo birthday={props.birthday} />
        </div>
    )
}

function CustomerProfile(props) {
    return (
        <div>
            <h2>{props.id}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.name}</h2>
        </div>
    )
}

function CustomerInfo(props) {
    return (
        <div>
            <h2>{props.birthday}</h2>
        </div>
    )
}

export default Customer;