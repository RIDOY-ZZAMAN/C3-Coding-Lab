import React from 'react';
import './Details.css'

//Definig a Function named as "Details" with  react's special parameter "props"
const Details = (props) => {
    //Destructuring details from props
    const { details } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const detail of details) {
        if (!detail.quantity) {
            detail.quantity = 1;
        }
        //Calculation total salary and totalQuantity
        total = total + detail.Salary * detail.quantity;
        totalQuantity = totalQuantity + detail.quantity;
    }
    const name = [];
    details.map(detail => name.push(detail.name))
    return (
        <div>
            <h3>Selected Professors Qunatity,Name and Total Salary</h3>
            <p>Total Selected Professor: {totalQuantity}</p>
            <p>Name: {name + ''}</p>
            <p>Total Salary: ${total}</p>
            <button className="btn-selection">More...</button>
        </div>
    );
};

export default Details;