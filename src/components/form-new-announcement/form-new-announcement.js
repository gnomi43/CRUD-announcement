import React, { useContext, useState } from "react";
import {GlobalConntext} from "../../context/global-state";
import FormLayout from "../form-layout/form-layout";
import "./form-new-announcement.scss";

const FormNewAnnouncement = () => {
    const { addAnnouncement } = useContext(GlobalConntext);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const onChangeDesc = (event) => {
        setDesc(event.target.value);
    };

    const onChangePhone = (event) => {
        setPhone(event);
    };

    const onChangeCity = (event) => {
        setCity(event.target.value);
    };

    const onSubmiteFrom = (event) => {
        event.preventDefault();

        addAnnouncement(title, desc, phone, city);

        setTitle("");
        setDesc("");
        setPhone("");
        setCity("");

    };

    return(
        <FormLayout 
        onSubmiteFrom = {onSubmiteFrom}
        onChangeTitle = {onChangeTitle}
        onChangeDesc = {onChangeDesc}
        onChangePhone = {onChangePhone}
        onChangeCity = {onChangeCity}
        title = {title}
        desc = {desc}
        phone = {phone}
        city = {city}
        maxLengthTitle = {140}
        maxLengthDesk ={300}
        formTitle = {"Форма подачи объявлений"}
        submiteButtonTitle = {"Опубликовать"}
        />
    )
};

export default FormNewAnnouncement;
