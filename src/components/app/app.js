import React from "react";
import ListAnnouncement from "../list-announcement/list-announcement";
import Forms from "../forms/forms";
import {GlobalProvider} from "../../context/global-state";

import "./app.scss";

const App = () => {

    return (
        <main className="main-page container">
            <h1 className="main-page__title">Доска объявлений</h1>
            
            <section className="announcement">
                <GlobalProvider>
                    <div className="form-wrapper">
                        <Forms />
                    </div>
                    <ListAnnouncement />
                </GlobalProvider>
            </section>
        </main>
    );

}

export default App;