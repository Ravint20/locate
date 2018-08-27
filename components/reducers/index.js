import {combineReducers} from 'redux';

import {
    ADD_PROJECTS
} from "../action/index"

let initialStateProjects = {
    projects: [],
    loading: true
};

const getProjectsReducer = (state = initialStateProjects, action) => {
    switch (action.type) {
        case ADD_PROJECTS:
            state = Object.assign({}, state, {projects: action.projects, loading: action.loading});
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    getProjectsReducer: getProjectsReducer,
});

export default rootReducer;
