import React from "react";
import style from './Button.module.css';

const Button = (props) =>
{
    return(
    <button className={style.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;