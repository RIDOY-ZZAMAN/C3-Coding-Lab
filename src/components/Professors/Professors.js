import React from 'react';
import './Professors.css'

//Definig a Function named as "Professors" with  react's special parameter "props"
const Professors = (props) => {
    //Destructuring items from props
    const { name, id, Position, Country, Salary, img, Gender } = props.professor
    return (
        <div>
            <div className="single-professor">
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <button className="btn" onClick={() => props.handleDetails(props.professor)}>See Details <i className="fas fa-info-circle"></i></button>
                <h4>ID: {id}</h4>
                <p>Position: {Position}</p>
                <p>Gender: {Gender}</p>
                <p>Country: {Country}</p>
                <p>Salary: ${Salary}</p>
            </div>
        </div>
    );
};

export default Professors;