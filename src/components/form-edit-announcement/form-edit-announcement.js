import React, { useContext, useState } from "react";
import {GlobalConntext} from "../../context/global-state";
import FormLayout from "../form-layout/form-layout";
import "./form-edit-announcement.scss";

const FormEditAnnouncement = ({id}) => {
    const { editAnnouncement, newFormCall, announcements } = useContext(GlobalConntext);

    const editAnnouncementItem = announcements.filter(item => item.id === id);

    const {title, desc, city, phone} = editAnnouncementItem[0];

    const [selectedTitle, setSelectedTitle] = useState(title);
    const [selectedDesc, setSelectedDesc] = useState(desc);
    const [selectedPhone, setSelectedPhone] = useState(phone);
    const [selectedCity, setSelectedCity] = useState(city);

    const onChangeTitle = (event) => {
        setSelectedTitle(event.target.value);
    };

    const onChangeDesc = (event) => {
        setSelectedDesc(event.target.value);
    };

    const onChangePhone = (event) => {
        setSelectedPhone(event);
    };

    const onChangeCity = (event) => {
        setSelectedCity(event.target.value);
    };

    const onSubmiteFrom = (event) => {
        event.preventDefault();

        editAnnouncement(id, selectedTitle, selectedDesc, selectedPhone, selectedCity);
        newFormCall();

        setSelectedTitle("");
        setSelectedDesc("");
        setSelectedPhone("");
        setSelectedCity("");
    };

    return(
        <FormLayout 
        onSubmiteFrom = {onSubmiteFrom}
        onChangeTitle = {onChangeTitle}
        onChangeDesc = {onChangeDesc}
        onChangePhone = {onChangePhone}
        onChangeCity = {onChangeCity}
        title = {selectedTitle}
        desc = {selectedDesc}
        phone = {selectedPhone}
        city = {selectedCity}
        maxLengthTitle = {140}
        maxLengthDesk ={300}
        formTitle = {"Редактирование объявления"}
        submiteButtonTitle = {"Изменить"}
        />
    )
};

export default FormEditAnnouncement;
