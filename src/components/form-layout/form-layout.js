import React from "react";
import {IMaskInput} from 'react-imask';
import "./form-layout.scss";

const FormLayout = ({
                        onSubmiteFrom,
                        onChangeTitle,
                        onChangeDesc,
                        onChangePhone,
                        onChangeCity,
                        title,
                        desc,
                        phone,
                        city,
                        maxLengthTitle,
                        maxLengthDesk,
                        formTitle,
                        submiteButtonTitle
                    }) => {

    return (
            <form onSubmit={ onSubmiteFrom } className="announcement__form">
                <p className="announcement__form-title">{formTitle}</p>

                <div className="announcement__form-imput-wrapper">
                    <p className="announcement__form-imput-header required">Заголовок</p>
                    <textarea onChange={ onChangeTitle } value={title} className="announcement__form-imput announcement__form-imput-title" type="text" maxLength={maxLengthTitle} required/>
                    <p className="announcement__form-imput-length">{title.length}/{maxLengthTitle}</p>
                </div>
                
                <div className="announcement__form-imput-wrapper">
                    <p className="announcement__form-imput-header">Текст объявления</p>
                    <textarea onChange={ onChangeDesc } value={desc} className="announcement__form-imput announcement__form-imput-text" type="text" maxLength={maxLengthDesk}/>
                    <p className="announcement__form-imput-length">{desc.length}/{maxLengthDesk}</p>
                </div>

                <div className="wrapper__input-phone-city">

                    <div className="announcement__form-imput-wrapper">
                        <p className="announcement__form-imput-header required">Ваш телефон</p>
                        <IMaskInput
                            mask="+{7} (000) 000-00-00"
                            radix="."
                            value={phone}
                            unmask={true}
                            onAccept={onChangePhone}
                            placeholder='+7 (___) ___-__ -__'
                            className="announcement__form-imput"
                            required
                            />
                    </div>

                    <div className="announcement__form-imput-wrapper">
                        <p className="announcement__form-imput-header">Ваш город:</p>
                        <select onChange={ onChangeCity } value={city} className="announcement__form-imput">
                            <option value="">Не выбран</option>
                            <option value="Москва">Москва</option>
                            <option value="Санкт-Петербург">Санкт-Петербург</option>
                            <option value="Казань">Казань</option>
                            <option value="Нижний Новгород">Нижний Новгород</option>
                        </select>
                    </div>

                </div>
                <p className="announcement__form-required"><span>*</span> поля обязательные для заполнения</p>
                <button className="announcement__form-submite" type="submit">{submiteButtonTitle}</button>

            </form>
    );
};

export default FormLayout;
