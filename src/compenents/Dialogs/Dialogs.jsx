import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Massage = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )

}


const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                <DialogsItem name={"Alexey"} id={"1"}/>
                <DialogsItem name={"Dimych"} id={"2"}/>
                <DialogsItem name={"Valera"} id={"3"}/>
                <DialogsItem name={"Anastasia"} id={"4"}/>
                <DialogsItem name={"Elizabeth"} id={"5"}/>
            </div>

            <div className={s.messages}>
                <Massage message={"Hi"}/>
                <Massage message={"How are you?"}/>
                <Massage message={"Yo"}/>
            </div>

        </div>
    );
}

export default Dialogs;