import {CREATE_DEAL, DELETE_DEAL} from './actionTypes';

export const create = ({name, commitment}) => ({
    type: CREATE_DEAL,
    payload: {
        name,
        commitment
    }
})

export const remove = ({ id }) => ({
    type: DELETE_DEAL,
    payload: { id }
})
