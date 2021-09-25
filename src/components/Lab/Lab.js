import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Professors from '../Professors/Professors';
import './Lab.css'

//Definig a Function named as "Lab" with  no parameter
const Lab = () => {
    const [professors, setProfessors] = useState([]);
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => {
                setProfessors(data)
            })
    }, [])

    //Definig a event Hadeler Function named as "handleDetails" with  parameter "professors"
    const handleDetails = professors => {
        const newDetails = [...details, professors]
        setDetails(newDetails);
    }

    return (
        <div>
            <div className="lab-container">
                <div className="professor-container">
                    {
                        //mapping on professors
                        professors.map(professor => <Professors professor={professor} key={professor.id} handleDetails={handleDetails}></Professors>)
                    }

                </div>
                <div className="details-container">
                    <Details details={details}></Details>

                </div>
            </div>
        </div>
    );
};

export default Lab;