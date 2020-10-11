import React, {useContext} from "react";
import FormNewAnnouncement from "../form-new-announcement/form-new-announcement";
import FormEditAnnouncement from "../form-edit-announcement/form-edit-announcement";
import {GlobalConntext} from "../../context/global-state";

import "./forms.scss";

const Forms = () => {
    const { formEdit } = useContext(GlobalConntext);
    return (
        <>
            {!formEdit.formCall && <FormNewAnnouncement />}
            {formEdit.formCall && <FormEditAnnouncement id={formEdit.id} />}
        </>              
    );

}

export default Forms;