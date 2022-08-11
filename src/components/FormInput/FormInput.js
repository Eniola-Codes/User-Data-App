import React, { useState } from "react";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import ErrorModal from "../Ui/ErrorModal";
import style from "./FormInput.module.css";

const FormInput = (props) => {
    let [nameInput,setnameInput] = useState('');
    let [ageInput,setageInput] = useState('');
    let [errorModal,setErrorModal] = useState();

    const nameInputHandler = (event) =>
    {
        setnameInput(event.target.value);
    }

    const ageInputHandler = (event) =>
    {
        setageInput(event.target.value);
    }

    const submitFormHandler = (event) =>
    {

        if(nameInput.trim().length === 0 || ageInput.trim().length === 0)
        {
            setErrorModal({
                title: 'Invalid input!',
                message: "Ensure the input is valid (it can't be empty)"
            })

            return;
        }

        if(+ageInput <= 0)
        {

            setErrorModal({
                title: 'Invalid age input!',
                message: "Ensure the age value is > 0"
            })` `   

            return;
        }

        let formInputs = {username : nameInput, age : ageInput};

        props.passInputs(formInputs);

        setnameInput('');
        setageInput('');
    }

    const onConfirmHandler = () =>
    {
        setErrorModal(null);

    }

  return (
    <div>
     {errorModal && <ErrorModal  title={errorModal.title} message={errorModal.message} onConfirm={onConfirmHandler}/> }
    <Card className={style.form_input_div}>
        <form>
          <label htmlFor="username-id">Username</label>
          <input type="text" value={nameInput} id="username-id" onChange={nameInputHandler}></input>
          <label htmlFor="age-id">Age</label>
          <input type="number" value={ageInput} id="age-id" onChange={ageInputHandler}></input>
          <Button onClick={submitFormHandler}>Add user</Button>
        </form>
    </Card>
    </div>
  );
};

export default FormInput;
