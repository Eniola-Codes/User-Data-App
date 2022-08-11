import React from 'react';
import FormInput from './FormInput';

const FormData = (props) =>
{

    const passInputsHandler = (userdata) =>
    {
        let userInfo = {
            ...userdata , id : Math.random().toString() * 10
        };

        props.passData(userInfo);
    }


    return (
        <FormInput passInputs={passInputsHandler}/>
    )
}

export default FormData;