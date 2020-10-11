import React, { useContext } from "react";
import ItemAnnouncement from "../item-announcement/item-announcement";
import {GlobalConntext} from "../../context/global-state";
import "./list-announcement.scss";
import {ReactComponent as ReactLogo} from '../../icon/sad-face.svg';


const ListAnnouncement = () => {
    const { announcements, removeAnnouncement, editFormCall } = useContext(GlobalConntext);

    const ItemAnnouncements = announcements.map(({ id, title, desc, phone, city }) => {
               return( 
                        <ItemAnnouncement 
                            key={id}
                            id={id} 
                            title={title} 
                            desc={desc} 
                            phone={phone} 
                            city={city}
                            removeAnnouncement={removeAnnouncement} 
                            editFormCall={editFormCall}
                            />
                    );
    });

    const ListAnnouncements = () => {
        if(announcements.length === 0){
            return(
                <>
                    <div className="announcement__list-empty">
                        <ReactLogo className="announcement__list-empty-logo" />
                        <p className="announcement__list-empty-text">К сожалению новых объявлений нет</p>
                    </div>
                </>
            )
        } 

        return (
            <>
                <ul className="announcement__list">
                    {ItemAnnouncements}
                </ul>
            </>
        )
    };

    return (
        <div className="announcement__list-wrapper">  
            <div className="announcement__list-block">
                <p className="announcement__list-title">Объявления</p>
                    <ListAnnouncements />
            </div>
        </div>
    );
    
};

export default ListAnnouncement;
