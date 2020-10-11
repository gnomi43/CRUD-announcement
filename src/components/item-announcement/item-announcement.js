import React, {useContext} from "react";
import {GlobalConntext} from "../../context/global-state";
import "./item-announcement.scss"

const ItemAnnouncement = ({id, title, desc, phone, city, removeAnnouncement, editFormCall}) => {

    const { formEdit } = useContext(GlobalConntext);

    const numCorrect = `+7 (${phone.substring(1, 4)}) ${phone.substring(4, 7)}-${phone.substring(7, 9)}-${phone.substring(9, phone.lebgth)}`;

    return (
        <li className="announcement__item">
            <div className="announcement__item-wrapper">
                <p className="announcement__item-header">Заголовок</p>
                <p className="announcement__item-title">{title}</p>
            </div>
        
            <div className={`announcement__item-wrapper ${!desc && "hidden-block"}`}>
                <p className="announcement__item-header">Объявление</p>
                <p className="announcement__item-text">{desc}</p>
            </div>

            <div className="wrapper__item-phone-city">
                <div className="announcement__item-wrapper">
                    <p className="announcement__item-header">Телефон</p> 
                    <p className="announcement__item-phone">{numCorrect}</p>
                </div>
                <div className={`announcement__item-wrapper ${!city && "hidden-block"}`}>
                    <p className="announcement__item-header">Город</p> 
                    <p className="announcement__item-city">{city}</p>
                </div>
            </div>
            <div className="wrapper__buttons">
                <button onClick={ () => {removeAnnouncement(id)} } disabled={formEdit.formCall} className="announcement__item-btn announcement__item-btn--delete">Удалить</button>
                <button onClick={ () => {editFormCall(id)} } disabled={formEdit.formCall} className="announcement__item-btn announcement__item-btn--edit">Изменить</button>
            </div>    
        </li>
    );
};

export default ItemAnnouncement;
