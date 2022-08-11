import React from 'react';
import Card from './Card';
import Button from './Button';
import style from './ErrorModal.module.css';

const ErrorModal = (props) =>
{

    return (
        <div>
            <div className={style.backdrop} onClick={props.onConfirm}></div>
        <Card className={style.container}>
            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={style.body}>
                <p>{props.message}</p>
            </div>
            <footer className={style.footer}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>

        </Card>
        </div>
    )
}

export default ErrorModal;