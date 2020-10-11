export default (state, action) => {
    switch(action.type){

        case "REMOVE_ANNOUNCEMENT":
            return {
                ...state,
                announcements: state.announcements.filter(({id}) => {
                    return id !== action.payload;
                })
            };

        case "ADD_ANNOUNCEMENT":
            return {
                ...state,
                announcements: [ action.payload, ...state.announcements ]
                };

        case "EDIT_ANNOUNCEMENT":
            const updateAnnouncements = state.announcements.map(announcement => {
                if(announcement.id === action.payload.id){
                    return action.payload;
                }
                return announcement
            });
                
            return {
                ...state,
                announcements: updateAnnouncements
            };

        case "EDIT_FORM_CALL":
            return {
                ...state,
                formEdit: {
                        formCall: true,
                        id: action.payload
                    },
                };

        case "NEW_FORM_CALL":
            return {
                ...state,
                formEdit: {
                        formCall: false,
                        id: null
                    },
                };


        default: 
            return state;
    }
}