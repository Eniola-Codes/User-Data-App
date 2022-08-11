import React from 'react';
import style from './UserDetails.module.css';

const UserDetails = (props) =>
{
    return (
        <div className={style.li}>
           { `${props.name} (${props.age} years old)`}
        </div>
    )
}   

export default UserDetails;