import { NEW_TO_OLD } from "./sort_criterias";

export const defaultState = {
    user:{},

    search:{
        pinsSearch: {
            term: "",
            sortCriteria: NEW_TO_OLD,
        },

        userPinsSearch: {
            term: "",
            sortCriteria: NEW_TO_OLD
        },

        conversationsSearch: {
            term: ""
        }
    }
    
}