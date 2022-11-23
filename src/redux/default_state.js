import { pinsChunkSize } from "../various_things/constants";
import { pins } from "../various_things/pins";
import { users } from "../various_things/users";
import { NEW_TO_OLD } from "./sort_criterias";

export const defaultState = {
    app:{
        allPins: JSON.parse(JSON.stringify(pins)),
        pinsToShow: [], //Filtered pins that will be shown to user along scrolling
        showedPinsCount: pinsChunkSize
    },

    user: null,

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
    },

    authorization: {
        currentAuthorizationType: null
    },

    message: {
        text: "",
        title: ""
    },

    confirmation: {
        text: ""
    },

    update: {
        forceUpdateObject: {}
    }
}