import React from 'react';
import Card from '../Ui/Card'
import UserDetails from './UserDetails';

const UserData = (props) =>
{

    return (
    <Card>    
        <ul>
        {props.details.map((inputedData) => (
            <UserDetails 
            name={inputedData.username}
            age={inputedData.age}
            key={inputedData.id}
            />
        ))}
      </ul>
    </Card>
    )
}

export default UserData;