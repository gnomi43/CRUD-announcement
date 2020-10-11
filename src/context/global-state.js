import React, { createContext, useReducer } from "react";
import AddReducer from "./app-reducer";

export const initaialState = {
    formEdit: {
        formCall: false,
        id: null
    },
    announcements: []
};


export const GlobalConntext = createContext(initaialState);


export const GlobalProvider = ({children}) => {
    const [state, dispath] = useReducer(AddReducer, initaialState);

    const removeAnnouncement = (id) => {
        dispath({
            type: "REMOVE_ANNOUNCEMENT",
            payload: id,
        })
    };

    const addAnnouncement = (title, desc = "", phone, city="") => {
        let arrId = [];
        state.announcements.forEach(({id}) => {
            arrId.push(id);
        });

        const newID = arrId.length !== 0 ? Math.max(...arrId) + 1 : 1;

        dispath({
            type: "ADD_ANNOUNCEMENT",
            payload: {
                id: newID,
                title,
                desc,
                phone,
                city
            },
        })
    };

    const editAnnouncement = (id, title, desc = "", phone, city = "") => {
        dispath({
            type: "EDIT_ANNOUNCEMENT",
            payload: {
                id,
                title,
                desc,
                phone,
                city
            },
        })
    };

    const editFormCall = (id) => {

        dispath({
            type: "EDIT_FORM_CALL",
            payload: id
        })
    };

    const newFormCall = () => {

        dispath({
            type: "NEW_FORM_CALL",
        })
    };

    return (
        <GlobalConntext.Provider value={{
            announcements: state.announcements,
            formEdit: state.formEdit,
            removeAnnouncement,
            addAnnouncement,
            editAnnouncement,
            editFormCall,
            newFormCall,
        }}>
            {children}
        </GlobalConntext.Provider>
    );
};

