import React from "react";
import s from './ProfileInfo.module.css';
import california from "../../../../california-1751455.jpg";

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={california} alt="image"/>
            </div>
            <div className={s.discriptionBlock}>
                ava + discription
            </div>
        </div>
    );
}

export default ProfileInfo;