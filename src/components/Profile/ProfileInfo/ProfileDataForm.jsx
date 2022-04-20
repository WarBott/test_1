import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import style from './../../common/FormsControls/FormsControls.module.css';
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Изменить</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Ник</b>: {createField('Напишите...', 'fullName', [], Input)}
        </div>

        <div>
            <b>Работаю</b>:{createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>Знания</b>:
            {createField("Напишите...", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            <b>О себе</b>: {createField('Напишите...', 'aboutMe', [], Textarea)}
        </div>

        <div>
            <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts' + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm