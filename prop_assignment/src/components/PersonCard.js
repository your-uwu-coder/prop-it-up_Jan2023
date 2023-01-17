import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ ageCount, setAgeCount ] = useState(props.age);

    return (
        <div>
            <h2> { props.lastName }, { props.firstName } </h2>
            <p> Age: { ageCount } </p>
            <p> Hair Color: { props.hairColor } </p>
            <button onClick ={ (event) => setAgeCount(ageCount + 1)}>Happy Birthday, {props.firstName}!</button>
        </div>
    )
}

export default PersonCard; 
